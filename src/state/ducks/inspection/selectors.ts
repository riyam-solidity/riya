import { useSelector } from "react-redux";
import { RootState } from "@state/store";

export const GetDetailsState = () => {
  const details = useSelector((state: RootState) => state.details.WorkshopQaDetailsState);
  return details;
};

export default {
  GetDetailsState,
};
