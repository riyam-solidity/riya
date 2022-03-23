import {
  endPoints,
  getCatalogPannelEndPoint,
  getCatalogPannelAssignEndPoint,
} from "@constants/api-constant";
import { apiService } from "@services/base-api";
import { PaginationType } from "types/pagination";
import { convertObjectToParams } from "@utils/query";
import { getErrorAndStatusFromErr } from "@utils/handle-error";

export interface WorkshopQaInspectionsQuery {
  pagination: PaginationType;
  stage: string;
  searchParams?: any;
  filterParams?: any;
}

export interface CatalogAssignToMeQuery {
  appointmentId: number;
  inspectionType: string;
}

const getWorkshopQaInspections = async ({
  pagination: { page, size },
  stage,
  searchParams,
  filterParams,
}: WorkshopQaInspectionsQuery) => {
  const query = {
    ...searchParams,
    ...filterParams,
    page,
    size,
  };
  const endPoint = `${
    endPoints.workshop.INSPECTION_LISTING
  }/${stage}${convertObjectToParams(query)}`;
  const workshopQaInspectionsEndpoint = getCatalogPannelEndPoint(endPoint);
  const response = await apiService
    .get({ url: workshopQaInspectionsEndpoint })
    .catch((err) =>
      getErrorAndStatusFromErr({ getWorkshopQaInspections: err })
    );
  return response;
};

const catalogAssignToMe = async ({
  appointmentId,
  inspectionType,
}: CatalogAssignToMeQuery) => {
  const query = {
    inspectionType,
  };
  const endPoint = `${endPoints.workshop.CATALOG}${
    endPoints.workshop.ASSIGN
  }/${appointmentId}${convertObjectToParams(query)}`;
  const catalogAssignToMeEndpoint = getCatalogPannelAssignEndPoint(endPoint);
  const response = await apiService
    .put({
      url: catalogAssignToMeEndpoint,
      data: { appointmentId, inspectionType },
    })
    .catch((err) => getErrorAndStatusFromErr({ catalogAssignToMe: err }));
  return response;
};

export default { getWorkshopQaInspections, catalogAssignToMe };
