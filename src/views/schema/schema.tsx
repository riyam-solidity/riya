import { CButton } from "@shared/buttons";
import { MutableRefObject, useRef } from "react";
import { Checkpoints } from "./checkpoints";
import styles from "./styles/css/checkpoints.module.css";
const { checkPointsWrapper } = styles;

export const Schema = () => {
  const saveAllRef = useRef() as MutableRefObject<any>;
  const handleSaveAllRef = () => {
    if (saveAllRef.current) {
      saveAllRef.current.saveAll();
    }
  };
  return (
    <>
      <div className={checkPointsWrapper}>
        <Checkpoints ref={saveAllRef} />
      </div>
      <CButton
        label={"Save All"}
        type={"secondary"}
        onClick={() => {
          handleSaveAllRef();
        }}
      />
    </>
  );
};
