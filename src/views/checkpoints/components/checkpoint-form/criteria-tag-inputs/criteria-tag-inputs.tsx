import { FC, useState } from "react";
import { CButton } from "@shared/buttons";
import { ChoiceType } from "types/dashboard";
import { CriteriaTagInput } from "./criteria-input";
import { TagSolutionInput } from "./tag-solution-input";
import {
  criteriaInputField,
  criteriaTagInputField,
} from "../helper/additional-inputs";

interface CheckpointFormProps {
  choice: ChoiceType;
  checkpointFormDetails: ChoiceType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}

export const CriteriaTagInputs: FC<CheckpointFormProps> = ({
  choice,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  const [criteriaTagTextInput, setCriteriaTagTextInput] = useState<any>([
    [criteriaInputField, criteriaTagInputField],
  ]);

  const handleAddInput = () => {
    setCriteriaTagTextInput([...criteriaTagTextInput, criteriaInputField]);
  };

  const handleRemoveInput = (index: number) => {
    const list = [...criteriaTagTextInput];
    list.splice(index, 1);
    setCriteriaTagTextInput(list);
  };

  return (
    <>
      {criteriaTagTextInput.map((item: any, index: number) => {
        return (
          <>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-2">
              <CriteriaTagInput isFormEditable={isFormEditable} />
              <TagSolutionInput isFormEditable={isFormEditable} />
              {criteriaTagTextInput.length !== 1 && (
                <CButton
                  label={"Remove"}
                  onClick={() => handleRemoveInput(index)}
                  type={"remove"}
                  disabled={!isFormEditable}
                />
              )}
              {criteriaTagTextInput.length - 1 === index && (
                <div className="mt-4">
                  <CButton
                    label={"Add"}
                    onClick={() => handleAddInput()}
                    type={"addMore"}
                    disabled={!isFormEditable}
                  />
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};
