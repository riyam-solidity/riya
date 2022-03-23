import { CButton } from "@shared/buttons";
import { FC, MouseEventHandler } from "react";
import { FormOne } from "./form-one";
import { FormTwo } from "./form-two";
import { FormThree } from "./form-three";
import styles from "./styles/css/check-point-details.module.css";
import { CheckpointType, ChoiceType } from "types/dashboard";

const { checkPointsTitleCard, pagesaveCta, addRemoveCtaWrapper } = styles;

interface CheckPointFormProps {
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  formData: CheckpointType;
  isFormEditable: boolean;
  handleSaveCheckpointForm: MouseEventHandler<HTMLButtonElement>;
}

export const CheckPointForm: FC<CheckPointFormProps> = ({
  formData,
  checkpointFormDetails,
  setCheckpointFormDetails,
  isFormEditable,
  handleSaveCheckpointForm,
}) => {
  return (
    <div className={checkPointsTitleCard}>
      <FormOne
        formData={formData}
        checkpointFormDetails={checkpointFormDetails}
        setCheckpointFormDetails={setCheckpointFormDetails}
        isFormEditable={isFormEditable}
      />
      {formData &&
        formData.choices.map((choice: ChoiceType, index: number) => {
          return (
            <>
              <FormTwo
                choice={choice}
                choiceIndex={index}
                formData={formData}
                isFormEditable={isFormEditable}
                checkpointFormDetails={checkpointFormDetails}
                setCheckpointFormDetails={setCheckpointFormDetails}
              />
            </>
          );
        })}
      <FormThree
        formData={formData}
        isFormEditable={isFormEditable}
        checkpointFormDetails={checkpointFormDetails}
        setCheckpointFormDetails={setCheckpointFormDetails}
      />
      <div className={pagesaveCta}>
        <CButton
          label={"Cancel"}
          type={"cancel"}
          onClick={() => {}}
          disabled={!isFormEditable}
        />
        <CButton
          label={"Save"}
          type={"save"}
          onClick={handleSaveCheckpointForm}
          disabled={!isFormEditable}
        />
      </div>
    </div>
  );
};
