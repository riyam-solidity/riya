import { FC, MouseEventHandler } from "react";
import styles from "./styles/css/check-point-card.module.css";
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
  serialNumber: number | string;
  index: number;
  toggleCheckpointForm: MouseEventHandler<HTMLLIElement>;
  handleCheckpointFormEditable: MouseEventHandler<HTMLLIElement>;
  label: string;
  sortingUp: Function;
  sortingDown: Function;
}

export const CheckPointTitleCard: FC<CheckPointTitleCardProps> = ({
  toggleCheckpointForm,
  handleCheckpointFormEditable,
  serialNumber,
  sortingDown,
  sortingUp,
  index,
  label,
}) => {
  return (
    <div className={checkPointsTitleCard}>
      <div className={checkPointsRow}>
        <div className={checkPointTitle}>
          <span>{serialNumber}</span>
          <h2>{label}</h2>
        </div>
        <div className={editWrapepr}>
          <ul>
            <li className={edit} onClick={handleCheckpointFormEditable}>
              Edit
            </li>
            <li className={active}>Remove</li>
            <li onClick={toggleCheckpointForm}>
              <img src={Arrow} alt="Arrow" />
            </li>
            <li onClick={() => sortingUp(index)}>Up</li>
            <li onClick={() => sortingDown(index)}>Down</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
