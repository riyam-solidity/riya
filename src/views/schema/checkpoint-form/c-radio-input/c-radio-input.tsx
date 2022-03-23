import { FC } from "react";
import radioButtonStyles from "./styles/css/c-radio-button.module.css";
const { checkbox, checkes } = radioButtonStyles;

interface CRadioInputInfo {
  radioInputLabel: string;
  condition: string;
  conditionWith: string;
  name: string;
  id: string;
}

interface CRadioInputProps {
  isFormEditable: "auto" | "none";
  handleRadioButton: Function;
  label: string;
  dataItems: Array<CRadioInputInfo>;
}

export const CRadioInput: FC<CRadioInputProps> = ({
  label,
  dataItems,
  isFormEditable,
  handleRadioButton,
}) => {
  return (
    <fieldset className={checkes} onChange={(e) => handleRadioButton(e)}>
      <label className="w-40 pl-3">{label}</label>
      {dataItems.map(
        ({ radioInputLabel, name, condition, conditionWith, id }) => {
          return (
            <div className={checkbox} style={{ pointerEvents: isFormEditable }}>
              <div key={id}>
                <label htmlFor={id}>{radioInputLabel}</label>
                <input
                  type="radio"
                  checked={conditionWith === condition}
                  name={name}
                  id={id}
                  onChange={() => {}}
                />
              </div>
            </div>
          );
        }
      )}
    </fieldset>
  );
};
