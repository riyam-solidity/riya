import { baseUrls } from "./base-url";
import { environment } from "./enum";

let BASE_URL_CATALOG_PANNEL;
let BASE_URL_CATALOG_QC;
let BASE_ASSIGN_CATALOG_URL;

const currentEnv = `${process.env.REACT_APP_ENV}`;

const baseUrl = {
  catalogPannel: {
    QA: baseUrls.qa.CATALOG_URL,
    STAGING: baseUrls.staging.CATALOG_URL,
    PRODUCTION: baseUrls.prod.CATALOG_URL,
  },
  catalogQc: {
    QA: baseUrls.qa.CATALOG_QC_URL,
    STAGING: baseUrls.staging.CATALOG_QC_URL,
    PRODUCTION: baseUrls.prod.CATALOG_QC_URL,
  },
  assignTo: {
    QA: baseUrls.qa.BASE_CATALOG_URL,
    STAGING: baseUrls.staging.BASE_CATALOG_URL,
    PRODUCTION: baseUrls.prod.BASE_CATALOG_URL,
  },
};

switch (currentEnv) {
  case environment.QA:
    BASE_URL_CATALOG_PANNEL = baseUrl.catalogPannel.QA;
    BASE_URL_CATALOG_QC = baseUrl.catalogQc.QA;
    BASE_ASSIGN_CATALOG_URL = baseUrl.assignTo.QA;
    break;
  case environment.STAGING:
    BASE_URL_CATALOG_PANNEL = baseUrl.catalogPannel.STAGING;
    BASE_URL_CATALOG_QC = baseUrl.catalogQc.STAGING;
    BASE_ASSIGN_CATALOG_URL = baseUrl.assignTo.STAGING;
    break;
  case environment.PRODUCTION:
    BASE_URL_CATALOG_PANNEL = baseUrl.catalogPannel.PRODUCTION;
    BASE_URL_CATALOG_QC = baseUrl.catalogQc.PRODUCTION;
    BASE_ASSIGN_CATALOG_URL = baseUrl.assignTo.PRODUCTION;
    break;
  default:
    BASE_URL_CATALOG_PANNEL = baseUrl.catalogPannel.QA;
    BASE_URL_CATALOG_QC = baseUrl.catalogQc.QA;
    BASE_ASSIGN_CATALOG_URL = baseUrl.assignTo.QA;
    break;
}

export const endPoints = {
  workshop: {
    API_V1: "/api/v1",
    API_V2: "/api/v2",
    CATALOG: "/catalog",
    ASSIGN: "/assign",
    INSPECTION_LISTING: "/inspection-list",
    WORKSHOP_QA_DETAILS: "/detail/WORKSHOP-QA",
    INSPECTION: "/inspection",
    ADDITIONAL_PARTS: "/dms/category",
    AUDIT_HISTORY: "/audit-history",
  },
  dashboard: {
    CHECKPOINTS: "/rs/checkpoint",
    SCHEMA: "/rs/schema",
  },
};

const getBaseUrl = (baseUrl: string) => {
  return (endPoint: string) => {
    return `${baseUrl}${endPoint}`;
  };
};

const getAssignBaseUrl = (baseUrl: string) => {
  return (endPoint: string) => {
    return `${baseUrl}${endPoint}`;
  };
};

export const getCatalogPannelEndPoint = getBaseUrl(BASE_URL_CATALOG_PANNEL);
export const getCatalogQcEndPoint = getBaseUrl(BASE_URL_CATALOG_QC);
export const getCatalogPannelAssignEndPoint = getAssignBaseUrl(
  BASE_ASSIGN_CATALOG_URL
);
