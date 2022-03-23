export interface NavigationTab {
  leftNavigationTabName: string;
  leftNavigationTabRoute: string;
}

export interface LeftNavigationType {
  leftNavigationHeader: {
    navigationName: string;
    navigationRoute: string;
  };
  leftNavigationTabs: Array<NavigationTab>;
}
