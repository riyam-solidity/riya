import {
  inspectionService,
  WorkshopQaInspectionsQuery,
  CatalogAssignToMeQuery,
} from "@services/inspections";
import loadingDuck from "../loading";
import { AppDispatch } from "@state/store";

const { setLoadingThunk } = loadingDuck;

const getWorkshopQaInspectionsThunk =
  ({
    pagination: { page, size },
    stage,
    searchParams,
    filterParams,
  }: WorkshopQaInspectionsQuery) =>
  async (dispatch: AppDispatch) => {
    dispatch(setLoadingThunk({ isLoading: true }));
    const workshopQaInspections = await inspectionService
      .getWorkshopQaInspections({
        pagination: { page, size },
        stage,
        searchParams,
        filterParams,
      })
      .catch((err) => {
        console.log({ getWorkshopQaInspectionsThunk: err });
        dispatch(setLoadingThunk({ isLoading: false }));
      });
    dispatch(setLoadingThunk({ isLoading: false }));
    if (!workshopQaInspections) return;
    return workshopQaInspections;
  };

const catalogAssignToMeThunk =
  ({ appointmentId, inspectionType }: CatalogAssignToMeQuery) =>
  async (dispatch: AppDispatch) => {
    const catalogAssignToMe = await inspectionService
      .catalogAssignToMe({
        appointmentId,
        inspectionType,
      })
      .catch((err) => console.log({ catalogAssignToMeThunk: err }));
    if (!catalogAssignToMe) return;
    return catalogAssignToMe;
  };

export default { getWorkshopQaInspectionsThunk, catalogAssignToMeThunk };
