import { CTextInput } from "@shared/inputs";
import { FC } from "react";

interface CriteriaTagInputProps {
  isFormEditable: boolean;
}

export const CriteriaTagInput: FC<CriteriaTagInputProps> = ({
  isFormEditable,
}) => {
  return (
    <>
      <CTextInput
        label={"Criteria"}
        type={"text"}
        value={""}
        onChange={() => {}}
        disabled={!isFormEditable}
      />
    </>
  );
};
