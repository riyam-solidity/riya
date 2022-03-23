import { oktaConfig } from "../okta";
import { environments } from "../enum";

export const oktaSingInWidgetConfig = {
  baseUrl: oktaConfig.oidc.baseUrl,
  clientId: oktaConfig.oidc.clientId,
  issuer: oktaConfig.oidc.issuer,
  redirectUri: oktaConfig.oidc.redirectUri,
  scopes: oktaConfig.oidc.scopes,
  idpDisplay: "PRIMARY",
  idps: [
    {
      type: "GOOGLE",
      id:
        process.env.REACT_APP_ENV &&
        process.env.REACT_APP_ENV === environments.PRODUCTION
          ? "0oa3qxdo2vJhZIuBC4x7"
          : "0oazt2wwffBKWHn5T1d6",
    },
  ],
};
