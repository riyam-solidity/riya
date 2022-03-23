import { Checkpoint } from "./checkpoint/checkpoint";
import { data } from "../helper/moq";
import {
  FC,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { CButton } from "@shared/buttons";
import styles from "./styles/css/checkpoints.module.css";
import { swapPositionOfItemInArray } from "../helper/swap-position-of-item-in-array";
import { CMultipleTextInput } from "../components/c-multiple-text-inputs";
const { newCheckPoint } = styles;

interface CheckpointsProps {
  ref: any;
}

export const Checkpoints: FC<CheckpointsProps> = forwardRef(({}, ref) => {
  const [checkpoints, setCheckpoints] = useState<any>([]);
  const [noGoReason, setSetNoGOReason] = useState<any>([]);

  useEffect(() => {
    setCheckpoints(data.checkpoints);
  }, []);

  useEffect(() => {
    setCheckpoints((checkpoint: any) => checkpoint);
    console.log({ checkpoints });
    console.log({ noGoReason });
  }, [checkpoints, noGoReason]);

  const up = (index: number) => {
    if (index !== 0)
      setCheckpoints([
        ...swapPositionOfItemInArray(checkpoints, index, index - 1),
      ]);
  };
  const down = (index: number) => {
    if (index !== checkpoints.length - 1)
      setCheckpoints([
        ...swapPositionOfItemInArray(checkpoints, index, index + 1),
      ]);
  };

  useImperativeHandle(ref, () => ({
    saveAll() {
      console.log("save All", checkpoints);
    },
  }));

  return (
    <>
      <ul>
        {checkpoints.map((checkpoint: any, i: number) => (
          <div key={i}>
            <Checkpoint
              checkpoint={checkpoint}
              serialNumber={i}
              sortingUp={up}
              sortingDown={down}
            />
          </div>
        ))}
      </ul>

      <div className={newCheckPoint}>
        <CButton
          label={"Create new checkpoint"}
          type={"addMore"}
          onClick={() => {}}
        />
      </div>

      <CMultipleTextInput
        attributes={[
          { id: 0, value: "a", isEditable: true },
          { id: 1, value: "b", isEditable: true },
          { id: 2, value: "c", isEditable: true },
        ]}
        initialAttribute={{ id: 0, value: "", isEditable: false }}
        label={"No Go Reason"}
        onChangeAttributes={setSetNoGOReason}
      />
    </>
  );
});
