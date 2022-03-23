import { FC, useState } from "react";
import { CheckPointTitleCard } from "../components/checkpoint-title-card";
import { CheckPointForm } from "../checkpoint-form";
import { CheckpointType } from "types/dashboard";

interface CheckpointProps {
  checkpointFormDetails: CheckpointType;
  serialNumber: number;
  setCheckpointFormDetails: Function;
  formData: CheckpointType;
}

export const CheckPoint: FC<CheckpointProps> = ({
  serialNumber,
  formData,
  checkpointFormDetails,
  setCheckpointFormDetails,
}) => {
  const [isCheckpointFormVisible, setIsCheckpointFormVisible] =
    useState<boolean>(false);
  const [isCheckpointFormEditable, setIsCheckpointFormEditable] =
    useState(false);

  const toggleCheckpointForm = () => {
    setIsCheckpointFormVisible(!isCheckpointFormVisible);
  };

  const handleCheckpointFormEditable = () => {
    setIsCheckpointFormEditable(!isCheckpointFormEditable);
  };

  const handleSaveCheckpointForm = () => {
    console.log({ formData });
  };

  return (
    <li>
      <CheckPointTitleCard
        checkpointFormDetails={checkpointFormDetails}
        handleCheckpointFormEditable={handleCheckpointFormEditable}
        formData={formData}
        serialNumber={serialNumber}
        toggleCheckpointForm={toggleCheckpointForm}
      />
      {isCheckpointFormVisible && (
        <CheckPointForm
          checkpointFormDetails={checkpointFormDetails}
          setCheckpointFormDetails={setCheckpointFormDetails}
          formData={formData}
          isFormEditable={isCheckpointFormEditable}
          handleSaveCheckpointForm={handleSaveCheckpointForm}
        />
      )}
    </li>
  );
};
