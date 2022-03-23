export interface LastInspectionType {
  checkpoints: LastInspectionCheckpointsType;
  estimates: LastInspectionEstimatesType;
  inspectedAt: string;
  location:LastInspectionLocationType;
  qualityChecks:LastInspectionQualityChecksType;
}

export interface LastInspectionCheckpointsType{
  [key: string]:{
    additional:boolean;
    additionalInfo:Array<any>;
    choices:Array<any>;
    images:Array<LastInspectionCheckpointsImageType>;
    noImperfectionChoices:Array<string>;
    ok:boolean;
    prepopulated:boolean;
    refurbishmentChoices:Array<any>;
    revision:number;
    skipped:boolean;
    updatedAt:String;
    updatedBy:LastInspectionCheckpointsUpdatedByType;
    videos:Array<LastInspectionCheckpointsVideoType>;
  }
} 

export interface LastInspectionCheckpointsImageType{ 
  label: string;
  path: string;
}
export interface LastInspectionCheckpointsUpdatedByType{ 
  authType:string;
  uid:string;
}

export interface LastInspectionCheckpointsVideoType {
  label: string;
  path: string;
}

export interface LastInspectionEstimatesType{
  [key: string]:{
    invalidated:boolean;
    labourCost:number;
    parts:Array<any>;
    revision:number;
    tat:number;
    updatedAt:string;
    updatedBy:LastInspectionEstimatesUpdatedByType
  }
}

export interface LastInspectionEstimatesUpdatedByType{ 
  authType:string;
  uid:string;
}

export interface LastInspectionLocationType{
  name:string;
}
export interface LastInspectionQualityChecksType{
  [key: string]:{
    invalidated:boolean;
    reason:string;
    revision:number;
    status:string;
    tag:string;
  }
}
  