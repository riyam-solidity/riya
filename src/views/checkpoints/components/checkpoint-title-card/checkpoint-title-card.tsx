import { FC, MouseEventHandler } from "react";
import { CheckpointType } from "types/dashboard";
import styles from "./styles/css/check-points-card.module.css";
import Arrow from "./styles/images/arrow.svg";

const {
  checkPointsTitleCard,
  checkPointsRow,
  checkPointTitle,
  editWrapepr,
  edit,
  active,
} = styles;

interface CheckPointTitleCardProps {
  toggleCheckpointForm: MouseEventHandler<HTMLLIElement>;
  checkpointFormDetails: CheckpointType;
  serialNumber: number;
  formData: CheckpointType;
  handleCheckpointFormEditable: MouseEventHandler<HTMLLIElement>;
}

export const CheckPointTitleCard: FC<CheckPointTitleCardProps> = ({
  toggleCheckpointForm,
  checkpointFormDetails,
  serialNumber,
  formData,
  handleCheckpointFormEditable,
}) => {
  const { l2, l0 } = formData;

  return (
    <div className={checkPointsTitleCard}>
      <div className={checkPointsRow}>
        <div className={checkPointTitle}>
          <span>{serialNumber}</span>
          <h2>{l2 + l0}</h2>
        </div>
        <div className={editWrapepr}>
          <ul>
            <li className={edit} onClick={handleCheckpointFormEditable}>
              Edit
            </li>
            <li className={active}>Activate</li>
            <li onClick={toggleCheckpointForm}>
              <img src={Arrow} alt="Arrow" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
