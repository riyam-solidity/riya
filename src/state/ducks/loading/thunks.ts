import { AppDispatch } from "../../store";
import slice from "./slices";

const {
  actions: { setLoading },
} = slice;

const setLoadingThunk =
  ({ isLoading }: { isLoading: boolean }) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoading({ isLoading: isLoading }));
  };

export default {
  setLoadingThunk,
};
