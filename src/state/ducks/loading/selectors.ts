import { createSelector, Selector } from "@reduxjs/toolkit";
import { RootState } from "@state/store";

const loadingState: Selector = createSelector(
  (state: RootState) => state.loader,
  (toast) => toast.loading
);

export default {
  loadingState,
};
