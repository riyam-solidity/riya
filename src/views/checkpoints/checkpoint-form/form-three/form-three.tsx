import { FC } from "react";
import { CButton } from "@shared/buttons";
import { CDropdownInput, CTextInput } from "@shared/inputs";
import styles from "./styles/css/check-point-details.module.css";
import { CCheckbox } from "@shared/c-checkbox";
import { RefurbishmentInputs } from "../../components/checkpoint-form/refurbishment-inputs";
import { CheckpointType } from "types/dashboard";

const { checkPointsTitleCard, checkes, prepopulation } = styles;

interface CheckPointFormProps {
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  formData: CheckpointType;
  isFormEditable: boolean;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const checkboxOptions = [
  { label: "Part", name: "part", value: "Part" },
  { label: "SubPart", name: "subPart", value: "Sub Part" },
];

export const FormThree: FC<CheckPointFormProps> = ({
  checkpointFormDetails,
  setCheckpointFormDetails,
  formData,
  isFormEditable,
}) => {
  const {
    refurbishment: { choices },
  } = formData;
  const onChangeText = () => {};
  const onClick = () => {};
  const onChangeOptions = () => {};
  return (
    <div className={checkPointsTitleCard}>
      <RefurbishmentInputs
        choices={choices}
        isFormEditable={isFormEditable}
        checkpointFormDetails={checkpointFormDetails}
        setCheckpointFormDetails={setCheckpointFormDetails}
      />
      <div className="grid grid-cols-3 gap-4 p-3">
        <CDropdownInput
          label={"Category"}
          options={options}
          value={""}
          onChange={onChangeOptions}
        />
        <CTextInput
          label={"Sub Category"}
          type={"text"}
          value={""}
          onChange={onChangeText}
        />
        <div className="mt-4">
          <CButton
            label={"Add"}
            onClick={onClick}
            type={"addMore"}
            disabled={!isFormEditable}
          />
        </div>
      </div>

      <div className={checkes}>
        <label className="w-40 pl-3">Standard Image</label>
        <CCheckbox options={checkboxOptions} />
      </div>
      <div className={checkes}>
        <label className="w-40 pl-3">Standard Image</label>
        <CCheckbox options={checkboxOptions} />
      </div>
      <div className={checkes}>
        <label className="w-40 pl-3">Standard Image</label>
        <CCheckbox options={checkboxOptions} />
      </div>

      <div className={`grid grid-cols-3 gap-4 p-3 ${prepopulation}`}>
        <CDropdownInput
          label={"Prepopulation"}
          options={options}
          value={""}
          onChange={onChangeOptions}
        />
        <span>to</span>
        <div className="pt-5">
          <CDropdownInput
            label={""}
            options={options}
            value={""}
            onChange={onChangeOptions}
          />
        </div>
        <div className="mt-4">
          <CButton
            label={"Add"}
            onClick={onClick}
            type={"addMore"}
            disabled={!isFormEditable}
          />
          <CButton
            label={"Remove"}
            onClick={onClick}
            type={"remove"}
            disabled={!isFormEditable}
          />
        </div>
      </div>
    </div>
  );
};
