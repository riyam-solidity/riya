import { CTextInput } from "@shared/inputs";
import { FC } from "react";
import { CheckpointType } from "types/dashboard";

interface NonAcceptableProps {
  nonAcceptable: Array<any>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}

const getNonAcceptableInput = ({
  nonAcceptable,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}: {
  nonAcceptable: Array<any>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}) => {
  return (
    <>
      {nonAcceptable.length === 0 ? (
        <CTextInput
          label={"Non Acceptable criteria"}
          type={"text"}
          value={"N/A"}
          onChange={() => {}}
          disabled={!isFormEditable}
        />
      ) : (
        nonAcceptable.map((item: any) => {
          return (
            <>
              <CTextInput
                label={"Non Acceptable criteria"}
                type={"text"}
                value={item}
                onChange={() => {}}
                disabled={!isFormEditable}
              />
            </>
          );
        })
      )}
    </>
  );
};

export const NonAcceptableInput: FC<NonAcceptableProps> = ({
  nonAcceptable,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  return (
    <>
      {getNonAcceptableInput({
        nonAcceptable,
        isFormEditable,
        checkpointFormDetails,
        setCheckpointFormDetails,
      })}
    </>
  );
};
