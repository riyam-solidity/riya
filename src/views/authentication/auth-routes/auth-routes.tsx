import { ReactElement } from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, LoginCallback, SecureRoute } from "@okta/okta-react";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaConfig } from "@app-config/authentication/okta";
import { AuthScreen } from "@screens/auth-screen";
import { ListingScreen } from "@screens/listing-screen";
import {
  WORKSHOP_QA,
  WORKSHOP_QA_L1,
  WORKSHOP_QA_L2,
  WORKSHOP_QA_L3,
  NO_GO,
  ADDITIONAL_ESTIMATE,
} from "@constants/route-constant";
import { DetailScreen } from "@screens/detail-screen";
import { CheckPointScreen } from "@screens/check-point-screen";
import { SchemaScreen } from "@screens/schema-screen";

const oktaAuth = new OktaAuth(oktaConfig.oidc);

export const AuthRoutes = (): ReactElement => {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };
  const customAuthHandler = () => {
    history.push("/");
  };
  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      <Route exact path="/" component={AuthScreen} />
      <Route exact path="/implicit/callback" component={LoginCallback} />
      <SecureRoute
        exact
        path={[
          WORKSHOP_QA,
          WORKSHOP_QA_L1,
          WORKSHOP_QA_L2,
          WORKSHOP_QA_L3,
          NO_GO,
          ADDITIONAL_ESTIMATE,
        ]}
        component={ListingScreen}
      />
      <SecureRoute exact path={`${WORKSHOP_QA}/:id`} component={DetailScreen} />
      <SecureRoute exact path={"/check-points"} component={CheckPointScreen} />
      <SecureRoute exact path={"/schema"} component={SchemaScreen} />
    </Security>
  );
};
