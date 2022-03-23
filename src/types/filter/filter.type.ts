export interface InfluentialFilterType {
  label: string;
  key: string;
  value: string;
}

export interface InfluentialFiltersType {
  [key: string]: Array<InfluentialFilterType>;
}

export interface SelectedFiltersType {
  [key: string]: Array<string>;
}
