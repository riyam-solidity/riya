import { FC, useState } from "react";
import { CTextInput } from "@shared/inputs";
import styles from "./styles/css/category-component.module.css";
import { CheckpointType } from "types/dashboard";

const { checkPointsTitleCard } = styles;

interface CheckPointFormProps {
  checkpointFormDetails: CheckpointType;
  setCheckpointFormDetails: Function;
  formData: CheckpointType;
  isFormEditable: boolean;
}

export const FormOne: FC<CheckPointFormProps> = ({
  formData,
  checkpointFormDetails,
  setCheckpointFormDetails,
  isFormEditable,
}) => {
  const [data, setData] = useState(checkpointFormDetails);
  const { key, l1, l2, l0, images, videos, pdi } = formData;

  const onChangeHandle = (e: React.ChangeEvent<any>) => {
    const {
      target: { name, value },
    } = e;
    setData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={checkPointsTitleCard}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
        <CTextInput
          label={"Category"}
          type={"text"}
          value={key}
          onChange={onChangeHandle}
          name={"key"}
          disabled={!isFormEditable}
        />
        <div className="col-span-2">
          <CTextInput
            label={"Part"}
            type={"text"}
            value={l0}
            onChange={onChangeHandle}
            name={"l0"}
            disabled={!isFormEditable}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-3">
        <CTextInput
          label={"Sub Part"}
          type={"text"}
          value={l1}
          onChange={onChangeHandle}
          name={"l1"}
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Min. Image count"}
          type={"number"}
          value={images && images.minCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              images: {
                ...checkpointFormDetails.images,
                minCount: parseInt(e.target.value),
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Max. Image count"}
          type={"number"}
          value={images && images.maxCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              images: {
                ...checkpointFormDetails.images,
                maxCount: parseInt(e.target.value),
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
      </div>
      <div className="grid grid-cols-5 gap-4 p-3">
        <CTextInput
          label={"Min Video Count"}
          type={"number"}
          value={videos && videos.minCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              videos: {
                ...checkpointFormDetails.videos,
                minCount: parseInt(e.target.value),
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Min. PDI Image count"}
          type={"number"}
          value={pdi && pdi.images.minCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              pdi: {
                ...checkpointFormDetails.pdi,
                images: {
                  ...checkpointFormDetails.pdi.images,
                  minCount: parseInt(e.target.value),
                },
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Max. PDI Image count"}
          type={"number"}
          value={pdi && pdi.images.maxCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              pdi: {
                ...checkpointFormDetails.pdi,
                images: {
                  ...checkpointFormDetails.pdi.images,
                  maxCount: parseInt(e.target.value),
                },
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Min. PDI Video count"}
          type={"number"}
          value={pdi && pdi.videos.minCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              pdi: {
                ...checkpointFormDetails.pdi,
                images: {
                  ...checkpointFormDetails.pdi.videos,
                  minCount: parseInt(e.target.value),
                },
              },
            });
          }}
          min="0"
          disabled={!isFormEditable}
        />
        <CTextInput
          label={"Max. PDI Video count"}
          type={"number"}
          value={pdi && pdi.videos.maxCount}
          onChange={(e) => {
            setCheckpointFormDetails({
              ...checkpointFormDetails,
              pdi: {
                ...checkpointFormDetails.pdi,
                images: {
                  ...checkpointFormDetails.pdi.videos,
                  maxCount: parseInt(e.target.value),
                },
              },
            });
          }}
          disabled={!isFormEditable}
        />
      </div>
    </div>
  );
};
