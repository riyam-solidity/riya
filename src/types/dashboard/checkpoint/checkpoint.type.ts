export interface ChoiceType {
  acceptable: Array<string>;
  criteria: Array<any>;
  name: string;
  nonAcceptable: Array<string>;
  taggingCriteria: Array<any>;
  type: string;
}

export interface ImageType {
  maxCount: number;
  minCount: number;
}

export interface VideoType {
  maxCount: number;
  minCount: number;
}

export interface ImperfectionChoiceType {
  name: string;
  type: string;
}

export interface PDIType {
  images: ImageType;
  videos: VideoType;
}

export interface QAType {
  top: boolean;
}

export interface RefurbishmentType {
  additionalParts: Array<any>;
  choices: Array<string>;
}

export interface CheckpointType {
  active: boolean;
  additionalInfo: Array<any>;
  choices: Array<ChoiceType>;
  diagnostics: string;
  images: ImageType;
  key: string;
  l0: string;
  l1: string;
  l2: string;
  noImperfectionChoices: Array<ImperfectionChoiceType>;
  pdi: PDIType;
  prepopulate: Array<any>;
  qa: QAType;
  refurbishment: RefurbishmentType;
  videos: VideoType;
}
