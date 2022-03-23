import { CTextInput } from "@shared/inputs";
import { FC } from "react";

interface TagSolutionInputProps {
  isFormEditable: boolean;
}

export const TagSolutionInput: FC<TagSolutionInputProps> = ({
  isFormEditable,
}) => {
  return (
    <>
      <CTextInput
        label={"Tag/Solution"}
        type={"text"}
        value={""}
        onChange={() => {}}
        disabled={!isFormEditable}
      />
    </>
  );
};
