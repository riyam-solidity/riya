import { environments } from "../enum";
import {
  redirectUris,
  baseUrls,
  clientId,
} from "@constants/authentication-constant/okta";
let CLIENT_ID: string;
let BASE_URL: string;
let REDIRECT_URI: string = `${window.location.origin}${redirectUris.common.REDIRECT_URI}`;

const oktaConstants = {
  qa: {
    CLIENT_ID: clientId.qa.CLIENT_ID,
    BASE_URL: baseUrls.qa.BASE_URL,
  },
  staging: {
    CLIENT_ID: clientId.staging.CLIENT_ID,
    BASE_URL: baseUrls.staging.BASE_URL,
  },
  production: {
    CLIENT_ID: clientId.production.CLIENT_ID,
    BASE_URL: baseUrls.production.BASE_URL,
  },
};

switch (process.env.REACT_APP_ENV) {
  case environments.QA:
    CLIENT_ID = oktaConstants.qa.CLIENT_ID;
    BASE_URL = oktaConstants.qa.BASE_URL;
    break;
  case environments.STAGING:
    CLIENT_ID = oktaConstants.staging.CLIENT_ID;
    BASE_URL = oktaConstants.staging.BASE_URL;
    break;
  case environments.PRODUCTION:
    CLIENT_ID = oktaConstants.production.CLIENT_ID;
    BASE_URL = oktaConstants.production.BASE_URL;
    REDIRECT_URI = redirectUris.production.REDIRECT_URI;
    break;
  default:
    CLIENT_ID = oktaConstants.qa.CLIENT_ID;
    BASE_URL = oktaConstants.qa.BASE_URL;
    break;
}

export const oktaConfig = {
  oidc: {
    baseUrl: BASE_URL,
    clientId: CLIENT_ID,
    issuer: BASE_URL + "/oauth2/default",
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email", "phone"],
    tokenManager: {
      autoRenew: true,
    },
  },
};
