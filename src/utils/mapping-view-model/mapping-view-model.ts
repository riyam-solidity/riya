export const mapInspectionStatusViewModelValue = ({
  inspectionStatus,
}: {
  inspectionStatus: string;
}) => {
  if (inspectionStatus && inspectionStatus === "DIAGNOSTIC_ESTIMATED")
    return "Diagnostics";
  else return "Inspection";
};
