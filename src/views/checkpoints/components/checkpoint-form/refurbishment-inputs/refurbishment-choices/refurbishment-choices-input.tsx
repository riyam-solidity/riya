import { CTextInput } from "@shared/inputs";
import { FC } from "react";
import { CheckpointType } from "types/dashboard";

interface RefurbishmentChoicesInputProps {
  choices: string;
  setCheckpointFormDetails: Function;
  checkpointFormDetails: CheckpointType;
  onChangeInput: Function;
  index: number;
  name: string;
  isFormEditable: boolean;
}

const getRefurbishmentChoicesInput = ({
  choices,
  setCheckpointFormDetails,
  checkpointFormDetails,
  onChangeInput,
  index,
  name,
  isFormEditable,
}: {
  choices: string;
  setCheckpointFormDetails: Function;
  checkpointFormDetails: CheckpointType;
  onChangeInput: Function;
  index: number;
  name: string;
  isFormEditable: boolean;
}) => {
  return (
    <>
      <CTextInput
        label={"Refurbishment Choices"}
        type={"text"}
        value={choices}
        name={name}
        onChange={() => {}}
        disabled={!isFormEditable}
      />
    </>
  );
};

export const RefurbishmentChoicesInput: FC<RefurbishmentChoicesInputProps> = ({
  choices,
  setCheckpointFormDetails,
  checkpointFormDetails,
  onChangeInput,
  index,
  name,
  isFormEditable,
}) => {
  return (
    <>
      {getRefurbishmentChoicesInput({
        choices,
        setCheckpointFormDetails,
        checkpointFormDetails,
        onChangeInput,
        index,
        name,
        isFormEditable,
      })}
    </>
  );
};
