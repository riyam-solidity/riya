import { fetchNavigatoinTabs } from "@utils/fetch-navigation-tabs";
import { tabsURI } from "helper/moq-api/tabs-uri";
import { getTabLinks } from "@utils/get-tab-link";
import { getUserConfig } from "@utils/localstorage";
import { LeftNavigationType } from "types/tab";

const configData = getUserConfig();
const tabs = fetchNavigatoinTabs(configData);
const tabsAndURI = getTabLinks(tabs, tabsURI);

export let leftNavigationTabs: LeftNavigationType = {
  leftNavigationHeader: {
    navigationName: "Catalog Panel",
    navigationRoute: "/workshop-qa/0",
  },
  leftNavigationTabs: [],
};

tabsAndURI.map((tab: any) => {
  leftNavigationTabs.leftNavigationTabs.push(tab);
});
