export const getUserConfig = () => {
  const config = JSON.parse(localStorage.getItem("config") || "{}");
  if (config) {
    return config;
  }
  return {};
};
