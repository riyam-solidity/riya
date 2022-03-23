import { configService } from "@services/config-service";
import { AppDispatch } from "@state/store";

const getConfigThunk = () => async (dispatch: any) => {
  const config = await configService
    .getConfig()
    .catch((err: any) => console.log({ getWorkshopQaInspectionsThunk: err }));
  if (!config) return config;
  localStorage.setItem("config", JSON.stringify(config));
  return config;
};

export default { getConfigThunk };
