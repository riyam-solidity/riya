import { useOktaAuth } from "@okta/okta-react";
import { FunctionComponent, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AUTHENTICATION_SUCCESS_SCREEN } from "@constants/route-constant";
import {
  USER_DATA,
  OKTA_TOKEN_STORAGE,
  COUNTRY,
  VEHICLE_TYPE,
  USER_ROLES,
  LOGGED_IN_USER_EMAIL,
} from "@constants/authentication-constant/local-storage-keys";
import { OktaSignInWidget } from "../okta-signin-widget";
import { useDispatch } from "react-redux";
import configDuck from "@state/ducks/config";
import { useAppDispatch } from "@state/store/store";
import { toast } from "react-toastify";

export const AuthMain: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const { getConfigThunk } = configDuck;
  const { authState, oktaAuth } = useOktaAuth();
  const history = useHistory();

  useEffect(() => {
    if (!authState?.isAuthenticated) {
      history.push("/");
    } else {
      oktaAuth.getUser().then((info) => {
        localStorage.setItem(USER_DATA, JSON.stringify(info));
        if (localStorage.getItem(OKTA_TOKEN_STORAGE)) {
          let userClaims = JSON.parse(
            localStorage.getItem(OKTA_TOKEN_STORAGE) || "{}"
          );
          const {
            accessToken: {
              claims: { country, vehicleType, groups, sub },
            },
          } = userClaims;
          localStorage.setItem(COUNTRY, country[0]);
          localStorage.setItem(VEHICLE_TYPE, vehicleType);
          localStorage.setItem(USER_ROLES, groups);
          localStorage.setItem(LOGGED_IN_USER_EMAIL, sub);
        }
      });
      const saveConfig = async () => {
        const config = await dispatch(getConfigThunk()).catch((err: any) => {
          oktaAuth.signOut();
        });
        if (!config) oktaAuth.signOut();
        history.push(AUTHENTICATION_SUCCESS_SCREEN);
      };
      saveConfig();
    }
  }, [authState, oktaAuth]);

  const onSuccess = (tokens: any) => {
    oktaAuth.handleLoginRedirect(tokens);
  };
  const onError = function (err: any) {
    console.log("error logging in", err);
  };
  return authState?.isAuthenticated ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <OktaSignInWidget onSuccess={onSuccess} onError={onError} />
  );
};
