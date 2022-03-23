import { FC, useEffect, useState } from "react";
import { CheckPointForm } from "../../checkpoint-form";
import { CheckPointTitleCard } from "../../components/check-point-title-card";

interface CheckpointProps {
  checkpoint: any;
  serialNumber: number;
  sortingUp: Function;
  sortingDown: Function;
}

export const Checkpoint: FC<CheckpointProps> = ({
  checkpoint,
  serialNumber,
  sortingDown,
  sortingUp,
}) => {
  const [isCheckpointFormVisible, setIsCheckpointFormVisible] = useState(false);
  const [isCheckpointFormEditable, setIsCheckpointFormEditable] =
    useState(false);

  const [checkpointDetail, setCheckpointDetail] = useState<any>({});

  useEffect(() => {
    setCheckpointDetail(checkpoint);
  }, [checkpoint]);

  const { key } = checkpointDetail;
  const toggleCheckpointForm = () => {
    setIsCheckpointFormVisible(!isCheckpointFormVisible);
  };
  const handleCheckpointFormEditable = () => {
    setIsCheckpointFormEditable(!isCheckpointFormEditable);
  };
  return (
    <li>
      <CheckPointTitleCard
        label={key}
        serialNumber={serialNumber + 1}
        index={serialNumber}
        toggleCheckpointForm={toggleCheckpointForm}
        handleCheckpointFormEditable={handleCheckpointFormEditable}
        sortingUp={sortingUp}
        sortingDown={sortingDown}
      />
      {isCheckpointFormVisible && (
        <CheckPointForm
          checkpointDetail={checkpointDetail}
          isFormEditable={isCheckpointFormEditable}
        />
      )}
    </li>
  );
};
