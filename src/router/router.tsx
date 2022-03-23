import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "@views/components/authentication/auth-routes";

export const Router = (): ReactElement<BrowserRouter> => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};
