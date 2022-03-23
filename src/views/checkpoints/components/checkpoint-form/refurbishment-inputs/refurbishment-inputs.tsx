import { CButton } from "@shared/buttons";
import { FC, useEffect, useState } from "react";
import { RefurbishmentChoicesInput } from "./refurbishment-choices/refurbishment-choices-input";
import { refurbishmentChoiceTextInput } from "../helper/additional-inputs";
import { CheckpointType } from "types/dashboard";

interface RefurbishmentInputsProps {
  choices: Array<string>;
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  isFormEditable: boolean;
}

export const RefurbishmentInputs: FC<RefurbishmentInputsProps> = ({
  choices,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  const [refurbishmentData, setRefurbishmentData] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const handleAddInput = () => {
    setRefurbishmentData([
      ...refurbishmentData,
      {
        label: "Refurbishment Choices",
        name: "refurbishment",
        value: "",
        type: "text",
      },
    ]);
  };

  useEffect(() => {
    let tempArr: any = [];

    choices.map((choice) => {
      tempArr.push({
        label: "Refurbishment Choices",
        name: "refurbishment",
        value: choice,
        type: "text",
      });
    });
    setRefurbishmentData(tempArr);
  }, [choices]);

  const handleRemoveInput = (index: number) => {
    const list = [...refurbishmentData];
    list.splice(index, 1);
    setRefurbishmentData(list);
  };

  const onChangeInput = (e: any, index: number) => {
    const { value } = e.target;
    let list = [...refurbishmentData];
    list[index]["value"] = value;
    setRefurbishmentData(list);
    const data = list.map((x) => x.value);
    setCheckpointFormDetails([
      {
        ...checkpointFormDetails,
        refurbishment: {
          ...checkpointFormDetails.refurbishment,
          choices: data,
        },
      },
    ]);
  };

  return (
    <>
      {/* <div className="grid grid-cols-3 gap-4 p-3"> */}
      <div className="flex flex-col">
        {refurbishmentData &&
          refurbishmentData.length &&
          refurbishmentData.map((item: any, index: number) => {
            return (
              <>
                <RefurbishmentChoicesInput
                  checkpointFormDetails={checkpointFormDetails}
                  setCheckpointFormDetails={setCheckpointFormDetails}
                  choices={item.value}
                  name={item.name}
                  index={index}
                  onChangeInput={onChangeInput}
                  isFormEditable={isFormEditable}
                />
                <div className="mt-4">
                  {refurbishmentData.length - 1 === index && (
                    <CButton
                      label={"Add"}
                      onClick={handleAddInput}
                      type={"addMore"}
                      disabled={!isFormEditable}
                    />
                  )}
                  {refurbishmentData.length !== 1 && (
                    <CButton
                      label={"Remove"}
                      onClick={() => handleRemoveInput(index)}
                      type={"remove"}
                      disabled={!isFormEditable}
                    />
                  )}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
