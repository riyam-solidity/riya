export interface InspectionDetailDataCheckpointChoiceType {
  acceptable: boolean;
  choice: string;
  other: boolean;
}

export interface InspectionDetailDataCheckpointImageType {
  label: string;
  path: string;
}

export interface InspectionDetailDataCheckpointRefurbishmentChoiceType {
  other: boolean;
  refurbishment: string;
}

export interface InspectionDetailDataCheckpointUpdatedByType {
  authType: string;
  uid: string;
}

export interface InspectionDetailDataEstimatesUpdatedByType {
  authType: string;
  uid: string;
}

export interface InspectionDetailDataEstimatesPartsType {
  name: string;
  cost: number;
  labourCost: number;
  available: boolean;
  tat: number;
}

export interface InspectionDetailDataEstimatesType {
  [key: string]: {
    invalidated: boolean;
    labourCost: number;
    parts: Array<InspectionDetailDataEstimatesPartsType>;
    revision: number;
    tat: number;
    updatedAt: string;
    updatedBy: InspectionDetailDataEstimatesUpdatedByType;
  };
}

export interface InspectionDetailDataCheckpointType {
  additional: boolean;
  additionalInfo: Array<any>;
  category: string;
  choices: Array<InspectionDetailDataCheckpointChoiceType>;
  images: Array<InspectionDetailDataCheckpointImageType>;
  key: string;
  noImperfectionChoices: Array<any>;
  ok: boolean;
  prepopulated: boolean;
  refurbishmentChoices: Array<InspectionDetailDataCheckpointRefurbishmentChoiceType>;
  revision: number;
  schema: any;
  skipped: boolean;
  subCategory: string;
  title: string;
  updatedAt: string;
  updatedBy: InspectionDetailDataCheckpointUpdatedByType;
  videos: Array<any>;
}

export interface InspectionDetailGallery {
  label: string;
  path: string;
}

export interface InspectionDetailInspectedBy {
  authType: string;
  uid: string;
}
export interface InspectionDetailDataQualityChecksType {
  [key: string]: {
    comment: string;
    invalidated: boolean;
    reason: string;
    revision: number;
    status: string;
    tag: string;
  };
}
export interface InspectionDetailDataType {
  checkpoints: Array<InspectionDetailDataCheckpointType>;
  diagnosticEstimates: any;
  diagnosticQualityChecks: any;
  estimates: InspectionDetailDataEstimatesType;
  noGoReasons: Array<string>;
  qaComments: any;
  qualityChecks: InspectionDetailDataQualityChecksType;
}

interface InspectionDetailLocationType {
  name: string;
}

interface InspectionDetailSummaryType {
  acceptableImperfections: number;
  approvedEstimates: number;
  noGo: number;
  noWork: number;
  rejectedOkCheckpoints: number;
  remainingEstimates: number;
  tat: number;
  unAcceptableImperfections: number;
}

export interface InspectionDetailAssignedToType {
  authType: string;
  uid: string;
}

export interface InspectionDetailCostSummaryType {
  boughtPrice: number;
  current: {
    approved: number;
    pending: number;
  };
  totalCost: number;
}
export interface InspectionDetailType {
  appointmentId: string;
  assigned: boolean;
  reviewedBy: string;
  assignedTo: InspectionDetailAssignedToType;
  costSummary: InspectionDetailCostSummaryType;
  data: InspectionDetailDataType;
  gallery: Array<InspectionDetailGallery>;
  inspectedAt: string;
  inspectedBy: InspectionDetailInspectedBy;
  inspectionId: string;
  inspectionStatus: string;
  lastInspection: any;
  location: InspectionDetailLocationType;
  make: string;
  model: string;
  poolType: string;
  fuelType: string;
  inspectionType:string;
  schema: string;
  summary: InspectionDetailSummaryType;
  variant: string;
  year: string;
}
