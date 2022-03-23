import { FC, useState } from "react";
import { AcceptableInput } from "./acceptable-input";
import { NonAcceptableInput } from "./non-acceptable-input";
import {
  acceptableInputField,
  nonAcceptableInputField,
} from "../helper/additional-inputs";
import { CButton } from "@shared/buttons";
import { CheckpointType } from "types/dashboard";

interface CriteriaInputsProps {
  acceptable: Array<any>;
  nonAcceptable: Array<any>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}

export const CriteriaInputs: FC<CriteriaInputsProps> = ({
  acceptable,
  nonAcceptable,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  const [criteriaTextInput, setCriteriaTextInput] = useState<any>([
    [acceptableInputField, nonAcceptableInputField],
  ]);

  const CriteriaInputField = [acceptableInputField, nonAcceptableInputField];

  const handleAddInput = () => {
    setCriteriaTextInput([...criteriaTextInput, CriteriaInputField]);
  };

  const handleRemoveInput = (index: number) => {
    const list = [...criteriaTextInput];
    list.splice(index, 1);
    setCriteriaTextInput(list);
  };

  return (
    <>
      {criteriaTextInput.map((item: any, index: number) => {
        return (
          <>
            <AcceptableInput
              acceptable={acceptable}
              checkpointFormDetails={checkpointFormDetails}
              setCheckpointFormDetails={setCheckpointFormDetails}
              isFormEditable={isFormEditable}
            />
            <NonAcceptableInput
              nonAcceptable={nonAcceptable}
              checkpointFormDetails={checkpointFormDetails}
              setCheckpointFormDetails={setCheckpointFormDetails}
              isFormEditable={isFormEditable}
            />
            {criteriaTextInput.length !== 1 && (
              <CButton
                label={"Remove"}
                onClick={() => handleRemoveInput(index)}
                type={"remove"}
                disabled={!isFormEditable}
              />
            )}
            {criteriaTextInput.length - 1 === index && (
              <div className="mt-4">
                <CButton
                  label={"Add"}
                  onClick={handleAddInput}
                  type={"addMore"}
                  disabled={!isFormEditable}
                />
              </div>
            )}
          </>
        );
      })}
    </>
  );
};
