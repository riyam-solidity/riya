import { endPoints, getCatalogPannelEndPoint } from "@constants/api-constant";
import { apiService } from "@services/base-api";
import { convertObjectToParams } from "@utils/query";
import { getErrorAndStatusFromErr } from "@utils/handle-error";

export interface checkpointsQuery {
  keys?: string;
}

const getCheckpoints = async (props: checkpointsQuery) => {
  const endPoint = `${endPoints.dashboard.CHECKPOINTS}${convertObjectToParams(
    props
  )}`;
  const checkpointEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: checkpointEndpoint })
    .catch((err) => getErrorAndStatusFromErr(err));
  return response;
};

export default { getCheckpoints };
