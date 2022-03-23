import { CTextInput } from "@shared/inputs";
import React, { FC } from "react";
import styles from "../styles/css/checkpoint-form.module.css";
const { checkPointsTitleCard } = styles;

interface FormOneProps {
  checkpointFormDetail: any;
}

export const FormOne: FC<FormOneProps> = ({ checkpointFormDetail }) => {
  const { images, videos, pdi, key, l1, l0 } = checkpointFormDetail;

  return (
    <div className={checkPointsTitleCard}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
        <CTextInput
          label={"Category"}
          type={"text"}
          value={key}
          name="key"
          onChange={() => {}}
          disabled={true}
        />
        <div className="col-span-2">
          <CTextInput
            label={"Part"}
            type={"text"}
            value={l0}
            name="l0"
            onChange={() => {}}
            disabled={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
        <CTextInput
          label={"Sub Part"}
          type={"text"}
          value={l1}
          name="l1"
          onChange={() => {}}
          disabled={true}
        />
        <CTextInput
          label={"Min. Image count"}
          type={"number"}
          value={images && images.minCount}
          onChange={() => {}}
          min="0"
          disabled={true}
        />
        <CTextInput
          label={"Max. Image count"}
          type={"number"}
          value={images && images.maxCount}
          onChange={() => {}}
          min="0"
          disabled={true}
        />
      </div>
      <div className="grid grid-cols-5 gap-4 p-3">
        <CTextInput
          label={"Min. Video Count"}
          type={"number"}
          value={videos && videos.minCount}
          onChange={() => {}}
          min="0"
          disabled={true}
        />
        <CTextInput
          label={"Min. PDI Image Count"}
          type={"number"}
          value={pdi && pdi.images.minCount}
          onChange={() => {}}
          min="0"
          disabled={true}
        />
        <CTextInput
          label={"Max. PDI Image Count"}
          type={"number"}
          value={pdi && pdi.images.maxCount}
          onChange={() => {}}
          min="0"
          disabled={true}
        />
      </div>
    </div>
  );
};
