export interface ConfigSearchType {
  key: string;
  label: string;
}

export interface ConfigFilterKeyType {
  key: string;
  label: string;
  value: string;
}

export interface ConfigFilterType {
  [key: string]: [key: Array<ConfigFilterKeyType>];
}

export interface UiRulesType {
  [key: string]: {
    title: string;
    rootNode: boolean;
    search: Array<ConfigSearchType>;
    filter: ConfigFilterType;
  };
}

export interface PermissionsType {
  [key: string]: {
    read: boolean;
    action: boolean;
  };
}

export interface ConfigType {
  device: string;
  locationType: Array<string>;
  uiRules: UiRulesType;
  permissions: PermissionsType;
}
