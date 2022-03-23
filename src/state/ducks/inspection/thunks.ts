import {
  inspectionDetails,
  WorkshopQaDetailsQuery,
  qualityChecksUpdate,
  AdditionalPartsQuery,
  AuditLogType,
} from "@services/inspection";
import { AppDispatch } from "@state/store";
import slice from "./slices";

const {
  actions: { getDetails },
} = slice;

const getWorkshopQaDetailsThunk =
  ({ appointmentId }: WorkshopQaDetailsQuery) =>
  async (dispatch: AppDispatch) => {
    const workshopQaDetails = await inspectionDetails
      .getWorkshopQaDetails({ appointmentId })
      .catch((err) => console.log({ getWorkshopQaDetailsThunk: err }));
    if (!workshopQaDetails) return;
    dispatch(getDetails(workshopQaDetails));
    return workshopQaDetails;
  };

const getAdditionalPartsThunk =
  ({ ids }: AdditionalPartsQuery) =>
  async (dispatch: AppDispatch) => {
    const additionalParts = await inspectionDetails
      .getAdditionalParts({ ids })
      .catch((err) => console.log({ getAdditionalPartsThunk: err }));
    if (!additionalParts) return;
    return additionalParts;
  };

const approveQualityChecksThunk =
  ({ appointmentId, payload }: qualityChecksUpdate) =>
  async (dispatch: AppDispatch) => {
    const approveQc = await inspectionDetails
      .approveQualityChecks({ appointmentId, payload })
      .catch((err) => console.log({ approveQualityChecksThunk: err }));
    if (!approveQc) return;
    //  dispatch(getDetails(approveQc));
  };

const getAuditLogThunk =
  ({ stage, inspectionId }: AuditLogType) =>
  async (dispatch: AppDispatch) => {
    const auditLog = await inspectionDetails
      .getAuditLog({ stage, inspectionId })
      .catch((err) => console.log({ getAuditLogThunk: err }));
    if (!auditLog) return;
  };

export default {
  getWorkshopQaDetailsThunk,
  approveQualityChecksThunk,
  getAdditionalPartsThunk,
  getAuditLogThunk,
};
