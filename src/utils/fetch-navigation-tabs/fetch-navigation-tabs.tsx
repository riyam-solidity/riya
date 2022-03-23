import { ConfigType, UiRulesType } from "types/config";

export const fetchNavigatoinTabs = (data: ConfigType) => {
  let titles: Array<string> = [];
  const { uiRules }: { uiRules: UiRulesType } = data;
  if (!uiRules) return titles;
  Object.keys(uiRules).map((key: string) => {
    const { rootNode, title } = uiRules[key];
    rootNode === true && titles.push(title);
  });
  return titles;
};
