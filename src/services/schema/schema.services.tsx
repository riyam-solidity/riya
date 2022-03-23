import { endPoints, getCatalogPannelEndPoint } from "@constants/api-constant";
import { apiService } from "@services/base-api";
import { convertObjectToParams } from "@utils/query";
import { getErrorAndStatusFromErr } from "@utils/handle-error";

export interface SchemaQuery {
  inspectionType: string;
  inspectionSubType: string;
  status: string;
}

const getSchemas = async ({
  inspectionType,
  inspectionSubType,
  status,
}: SchemaQuery) => {
  const endPoint = `${endPoints.dashboard.SCHEMA}${convertObjectToParams({
    inspectionType,
    inspectionSubType,
    status,
  })}`;
  const schemaEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: schemaEndpoint })
    .catch((err) => getErrorAndStatusFromErr(err));
  return response;
};

export default { getSchemas };
