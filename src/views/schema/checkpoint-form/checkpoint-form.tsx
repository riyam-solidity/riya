import { CButton } from "@shared/buttons";
import { FC, useEffect, useState } from "react";
import { FormOne } from "./form-one";
import { FormTwo } from "./form-two";
import styles from "./styles/css/checkpoint-form.module.css";
const { pagesaveCta } = styles;

interface CheckPointFormProps {
  checkpointDetail: any;
  isFormEditable: boolean;
}

export const CheckPointForm: FC<CheckPointFormProps> = ({
  checkpointDetail,
  isFormEditable,
}) => {
  const [checkpointFormDetail, setCheckpointFormDetail] = useState({});

  useEffect(() => {
    setCheckpointFormDetail(checkpointDetail);
  }, []);

  const handleSaveCheckpointForm = () => {};
  const handleCancelSubmitCheckpointForm = () => {
    setCheckpointFormDetail(checkpointDetail);
  };
  return (
    <>
      <FormOne checkpointFormDetail={checkpointFormDetail} />
      <FormTwo checkpointFormDetail={checkpointFormDetail} />
      <div className={pagesaveCta}>
        <CButton
          label={"Cancel"}
          type={"cancel"}
          onClick={handleCancelSubmitCheckpointForm}
          disabled={!isFormEditable}
        />
        <CButton
          label={"Save"}
          type={"save"}
          onClick={handleSaveCheckpointForm}
          disabled={!isFormEditable}
        />
      </div>
    </>
  );
};
