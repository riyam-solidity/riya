import { CTextInput } from "@shared/inputs";
import { FC, useState } from "react";
import { CheckpointType, ChoiceType } from "types/dashboard";
import { CriteriaTagInputs } from "../../components/checkpoint-form/criteria-tag-inputs";
import { CriteriaInputs } from "../../components/checkpoint-form/criteria-inputs";
import styles from "./styles/css/condition-component.module.css";
import checkpointStyle from "../styles/css/check-point-details.module.css";
import {
  acceptableInputField,
  nonAcceptableInputField,
  criteriaInputField,
  criteriaTagInputField,
  conditionInputField,
  conditionTypeInputField,
  conditionHeaderTextInput,
  conditionTextInput,
} from "../../components/checkpoint-form/helper/additional-inputs";
import { CButton } from "@shared/buttons";

const { checkPointsTitleCard } = styles;
const { addRemoveCtaWrapper } = checkpointStyle;

const radioOptions = [
  { label: "Absolute", name: "Absolute", value: "Absolute" },
  { label: "Relatives", name: "Relatives", value: "Relatives" },
];

interface CheckpointFormProps {
  choice: ChoiceType;
  checkpointFormDetails: any;
  setCheckpointFormDetails: Function;
  choiceIndex: number;
  formData: CheckpointType;
  isFormEditable: boolean;
}

export const FormTwo: FC<CheckpointFormProps> = ({
  choice,
  choiceIndex,
  formData,
  isFormEditable,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  const [conditionsTextInput, setConditionsTextInput] = useState<any>([
    [
      conditionInputField,
      conditionTypeInputField,
      acceptableInputField,
      nonAcceptableInputField,
      conditionHeaderTextInput,
      conditionTextInput,
      criteriaInputField,
      criteriaTagInputField,
    ],
  ]);

  const { name, nonAcceptable, acceptable } = formData.choices[choiceIndex];

  const ConditionInputFields = [
    conditionInputField,
    conditionTypeInputField,
    acceptableInputField,
    nonAcceptableInputField,
    conditionHeaderTextInput,
    conditionTextInput,
    criteriaInputField,
    criteriaTagInputField,
  ];

  const handleAddInput = () => {
    setConditionsTextInput([...conditionsTextInput, ConditionInputFields]);
  };

  const handleRemoveInput = (index: number) => {
    const list = [...conditionsTextInput];
    list.splice(index, 1);
    setConditionsTextInput(list);
  };

  const onChangeCondition = ({
    value,
    key,
    i,
  }: {
    value: string;
    key: string;
    i: number;
  }) => {
    const choice = { ...checkpointFormDetails.choices[i], [key]: value };
    let choices = checkpointFormDetails.choices;
    choices[i] = choice;
    setCheckpointFormDetails({
      ...checkpointFormDetails,
      choices: choices,
    });
  };

  const handleRadioButton = (e: React.ChangeEvent<any>, i: number) => {
    const value = e.target.id;
    const key = e.target.name;
    const choice = { ...checkpointFormDetails.choices[i], [key]: value };
    let choices = checkpointFormDetails.choices;
    choices[i] = choice;
    console.log(choice);
    setCheckpointFormDetails({
      ...checkpointFormDetails,
      choices: choices,
    });
  };

  return (
    <>
      {conditionsTextInput.map((item: any, index: number) => {
        return (
          <>
            <div className={checkPointsTitleCard}>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-3">
                <CTextInput
                  label={"Condition"}
                  type={"text"}
                  value={name}
                  onChange={() => {}}
                  disabled={!isFormEditable}
                />
                <fieldset onChange={(e) => handleRadioButton(e, choiceIndex)}>
                  <div>
                    <p>Type</p>
                    <label htmlFor="relative">Relative</label>
                    <input
                      type="radio"
                      checked={
                        formData.choices[choiceIndex].type === "relative"
                      }
                      name="type"
                      id="relative"
                      onChange={(e) => {
                        onChangeCondition({
                          value: e.target.value,
                          key: e.target.name,
                          i: choiceIndex,
                        });
                      }}
                    />
                    <label htmlFor="absolute">Absolute</label>
                    <input
                      type="radio"
                      checked={
                        formData.choices[choiceIndex].type === "absolute"
                      }
                      name="type"
                      id="absolute"
                      onChange={() => {}}
                    />
                  </div>
                </fieldset>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 col-span-2">
                  <CriteriaInputs
                    acceptable={acceptable}
                    nonAcceptable={nonAcceptable}
                    isFormEditable={isFormEditable}
                    checkpointFormDetails={checkpointFormDetails}
                    setCheckpointFormDetails={setCheckpointFormDetails}
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 p-3">
                <CTextInput
                  label={"Header"}
                  type={"text"}
                  value={""}
                  onChange={(e) => {
                    onChangeCondition({
                      value: e.target.value,
                      key: e.target.name,
                      i: choiceIndex,
                    });
                  }}
                  disabled={!isFormEditable}
                />
                <CTextInput
                  label={"Text"}
                  type={"text"}
                  value={""}
                  onChange={(e) => {
                    onChangeCondition({
                      value: e.target.value,
                      key: e.target.name,
                      i: choiceIndex,
                    });
                  }}
                  disabled={!isFormEditable}
                />
                <CriteriaTagInputs
                  choice={choice}
                  checkpointFormDetails={checkpointFormDetails}
                  setCheckpointFormDetails={setCheckpointFormDetails}
                  isFormEditable={isFormEditable}
                />
              </div>
              <div className={addRemoveCtaWrapper}>
                {conditionsTextInput.length !== 1 && (
                  <CButton
                    label={"Remove condition"}
                    onClick={() => handleRemoveInput(index)}
                    type={"remove"}
                    disabled={!isFormEditable}
                  />
                )}
                {conditionsTextInput.length - 1 === index && (
                  <CButton
                    label={"Add more condition"}
                    onClick={handleAddInput}
                    type={"addMore"}
                    disabled={!isFormEditable}
                  />
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
