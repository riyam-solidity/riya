export const getValuesOfFilter = ({
  keys,
  filterName,
  stageName,
}: {
  keys: Array<string>;
  filterName: string;
  stageName: string;
}) => {
  const config = JSON.parse(localStorage.getItem("config") || "{}");
  const filter = config.uiRules[stageName].filter[filterName];
  const values = keys.map((key) => {
    const filterType = filter.find((f: any) => key === f.label);
    return filterType.value;
  });
  return values.toString();
};

export const getFilters = ({ stageName }: { stageName: string }) => {
  const config = JSON.parse(localStorage.getItem("config") || "{}");
  const filter = config.uiRules[stageName].filter;
  return filter;
};

export const getSearch = ({ stageName }: { stageName: string }) => {
  const config = JSON.parse(localStorage.getItem("config") || "{}");
  const search = config.uiRules[stageName].search;
  const searchWithValueKey = search.map((s: any) => ({
    ...s,
    value: s.key,
  }));
  return searchWithValueKey;
};
