import { NavigationTab } from "types/tab";

export const getTabLinks = (tabs: Array<string>, tabsURI: Array<string>) => {
  let nav: Array<NavigationTab> = [];
  tabs.map((tab: string, index: number) => {
    nav.push({
      leftNavigationTabName: tab,
      leftNavigationTabRoute: tabsURI[index],
    });
  });
  return nav;
};
