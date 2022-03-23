import { FC, useEffect, useRef } from "react";
import OktaSignIn from "@okta/okta-signin-widget";
import { oktaSingInWidgetConfig } from "@app-config/authentication/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";

interface OktaSignInWidgetProps {
  onSuccess: Function;
  onError: Function;
}

export const OktaSignInWidget: FC<OktaSignInWidgetProps> = ({
  onSuccess,
  onError,
}) => {
  const widgetRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect((): any => {
    const { current } = widgetRef;
    if (!current) {
      return false;
    }
    const widget = new OktaSignIn(oktaSingInWidgetConfig);
    widget
      .showSignInToGetTokens({
        el: current,
      })
      .then(onSuccess)
      .catch(onError);

    return () => {
      widget.remove();
    };
  }, [onError, onSuccess]);

  return <div ref={widgetRef} />;
};
