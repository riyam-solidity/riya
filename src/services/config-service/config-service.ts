import { apiService } from "@services/base-api";
import { getErrorAndStatusFromErr } from "@utils/handle-error";

const getConfig = async () => {
  const url =
    "https://refurb-app-gateway.qac24svc.dev/refurb/config/rules/PANEL";
  const response = await apiService.get({ url }).catch((err) => {
    throw getErrorAndStatusFromErr(err);
  });
  return response;
};

export default { getConfig };