import {
  InspectionDetailDataCheckpointChoiceType,
  InspectionDetailDataCheckpointRefurbishmentChoiceType,
  InspectionDetailDataCheckpointType,
  InspectionDetailDataEstimatesType,
} from "types/inspection-details";

export const mapLabourCostViewModel = ({
  checkpointKey,
  estimates,
}: {
  checkpointKey: string;
  estimates: InspectionDetailDataEstimatesType;
}) => {
  if (!checkpointKey || !estimates) return "_";
  if (estimates[checkpointKey]) {
    return estimates[checkpointKey].labourCost.toString();
  }
  return "_";
};

export const mapWorkToBeDoneViewModel = ({
  refurbishmentChoices,
}: {
  refurbishmentChoices: Array<InspectionDetailDataCheckpointRefurbishmentChoiceType>;
}) => {
  if (!refurbishmentChoices || refurbishmentChoices.length === 0) return "_";
  let workToBeDone = "";
  refurbishmentChoices.map(
    (
      refurbishmentChoice: InspectionDetailDataCheckpointRefurbishmentChoiceType
    ) => {
      workToBeDone += refurbishmentChoice.refurbishment + "  | ";
    }
  );
  return workToBeDone.slice(0, -2);
};

export const mapAdditionalPartDetailsViewModel = ({
  checkpointKey,
  estimates,
}: {
  checkpointKey: string;
  estimates: InspectionDetailDataEstimatesType;
}) => {
  if (!checkpointKey || !estimates) return [];
  if (estimates[checkpointKey]) {
    return estimates[checkpointKey].parts;
  }
  return [];
};

export const mapImperfectionViewModel = ({
  checkpoint,
}: {
  checkpoint: InspectionDetailDataCheckpointType;
}) => {
  let acceptableImperfection = "";
  let unAcceptableImperfection = "";

  const { ok, choices } = checkpoint;

  if (ok === false && choices.length > 0) {
    choices.map((ch: InspectionDetailDataCheckpointChoiceType) => {
      const { acceptable, choice } = ch;
      if (acceptable) {
        acceptableImperfection += choice + "  | ";
      } else if (!acceptable) {
        unAcceptableImperfection += choice + "  | ";
      }
    });
  } else if (ok === true && choices.length > 0) {
    choices.map((ch: InspectionDetailDataCheckpointChoiceType) => {
      const { acceptable, choice } = ch;
      if (acceptable) {
        acceptableImperfection += choice + "  | ";
      }
    });
  }

  return {
    acceptableImperfection: acceptableImperfection.slice(0, -2),
    unAcceptableImperfection: unAcceptableImperfection.slice(0, -2),
  };
};

export const mapAdditionalInfoViewModel = ({
  additionalInfo,
}: {
  additionalInfo: any;
}) => {
  let choices = "";
  if (!additionalInfo) return "_";
  additionalInfo.choice.map((ch: any) => {
    choices += ch + "  | ";
  });
  return choices.slice(0, -2);
};
