import {
  endPoints,
  getCatalogPannelEndPoint,
  getCatalogQcEndPoint,
} from "@constants/api-constant";
import { apiService } from "@services/base-api";
import { getErrorAndStatusFromErr } from "@utils/handle-error";
import { convertObjectToParams } from "@utils/query";

export interface WorkshopQaDetailsQuery {
  appointmentId: number;
}

export interface AdditionalPartsQuery {
  ids: Array<string>;
}

export interface qualityChecksUpdate {
  appointmentId: string;
  payload: any;
}

export interface AuditLogType {
  stage: string;
  inspectionId: string;
}

const getWorkshopQaDetails = async ({
  appointmentId,
}: WorkshopQaDetailsQuery) => {
  const endPoint = `${endPoints.workshop.WORKSHOP_QA_DETAILS}/${appointmentId}`;
  const workshopQaDetailsEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: workshopQaDetailsEndpoint })
    .catch((err) => {
      throw getErrorAndStatusFromErr(err);
    });
  return response;
};

const getAdditionalParts = async ({ ids }: AdditionalPartsQuery) => {
  const endPoint = `${endPoints.workshop.ADDITIONAL_PARTS}?ids=${ids}`;
  const additionalPartsEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: additionalPartsEndpoint })
    .catch((err) => {
      throw getErrorAndStatusFromErr(err);
    });
  return response;
};

const approveQualityChecks = async ({
  appointmentId,
  payload,
}: qualityChecksUpdate) => {
  const endPoint = `${endPoints.workshop.INSPECTION}/${appointmentId}`;
  const approveQualityChecksEndpoint = getCatalogQcEndPoint(endPoint);
  const response = await apiService
    .post({ url: approveQualityChecksEndpoint, data: payload })
    .catch((err) => {
      throw getErrorAndStatusFromErr(err);
    });
  return response;
};

const getAuditLog = async ({ stage, inspectionId }: AuditLogType) => {
  const endPoint = `${endPoints.workshop.AUDIT_HISTORY}/${stage}/${inspectionId}`;
  const auditLogEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: auditLogEndpoint })
    .catch((err) => {
      throw getErrorAndStatusFromErr(err);
    });
  return response;
};

export default {
  getWorkshopQaDetails,
  approveQualityChecks,
  getAdditionalParts,
  getAuditLog,
};
