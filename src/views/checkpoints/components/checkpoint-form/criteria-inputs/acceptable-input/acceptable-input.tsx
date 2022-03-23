import { FC } from "react";
import { CTextInput } from "@shared/inputs";
import { CheckpointType } from "types/dashboard";

interface AcceptableProps {
  acceptable: Array<any>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}

const getAcceptableInput = ({
  acceptable,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}: {
  acceptable: Array<any>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}) => {
  return (
    <>
      {acceptable.length === 0 ? (
        <CTextInput
          label={"Acceptable criteria"}
          type={"text"}
          value={"N/A"}
          onChange={() => {}}
          disabled={!isFormEditable}
        />
      ) : (
        acceptable.map((item: any) => {
          return (
            <>
              <CTextInput
                label={"Acceptable criteria"}
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

export const AcceptableInput: FC<AcceptableProps> = ({
  acceptable,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  return (
    <>
      {getAcceptableInput({
        acceptable,
        isFormEditable,
        checkpointFormDetails,
        setCheckpointFormDetails,
      })}
    </>
  );
};
