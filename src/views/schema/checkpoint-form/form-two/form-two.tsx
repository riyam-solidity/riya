import { FC, useEffect, useState } from "react";
import { CTextInput } from "@shared/inputs";
import formStyles from "../styles/css/checkpoint-form.module.css";
import { CRadioInput } from "../c-radio-input";
import { CInputLabel } from "@shared/inputs/c-input-label";
import { getRadioInputAttributes } from "../../helper/get-radio-button-attributes";

const { checkPointsTitleCard } = formStyles;

interface FormTwoProps {
  checkpointFormDetail: any;
}

export const FormTwo: FC<FormTwoProps> = ({ checkpointFormDetail }) => {
  const [
    standardImageRadioInputAttributes,
    setStandardImageRadioInputAttributes,
  ] = useState<any>([]);
  const [
    notApplicableRadioInputAttributes,
    setNotApplicableRadioInputAttributes,
  ] = useState<any>([]);
  const [diagnosticsRadioInputAttributes, setDiagnosticsRadioInputAttributes] =
    useState<any>([]);

  const { notApplicable, diagnostics, standardImage, refurbishment } =
    checkpointFormDetail;

  useEffect(() => {
    setStandardImageRadioInputAttributes([
      getRadioInputAttributes({
        label: "True",
        condition: "enabled",
        conditionWith: standardImage,
        name: "standardImage",
        id: "standardImage_True",
      }),
      getRadioInputAttributes({
        label: "False",
        condition: "disabled",
        conditionWith: standardImage,
        name: "standardImage",
        id: "standardImage_False",
      }),
    ]);
    setDiagnosticsRadioInputAttributes([
      getRadioInputAttributes({
        label: "True",
        condition: "enabled",
        conditionWith: diagnostics,
        name: "diagnostics",
        id: "diagnostics_True",
      }),
      getRadioInputAttributes({
        label: "False",
        condition: "disabled",
        conditionWith: diagnostics,
        name: "diagnostics",
        id: "diagnostics_False",
      }),
    ]);
    setNotApplicableRadioInputAttributes([
      getRadioInputAttributes({
        label: "True",
        condition: "enabled",
        conditionWith: notApplicable,
        name: "notApplicable",
        id: "notApplicable_True",
      }),
      getRadioInputAttributes({
        label: "False",
        condition: "disabled",
        conditionWith: notApplicable,
        name: "notApplicable",
        id: "notApplicable_False",
      }),
    ]);
  }, [standardImage, diagnostics, notApplicable]);

  useEffect(() => {
    console.log(checkpointFormDetail);
  }, [checkpointFormDetail]);

  return (
    <div className={checkPointsTitleCard}>
      <div className="grid grid-cols-3 gap-4 p-3">
        <div className="">
          <CInputLabel label="Refurbishment Choices" />
          {refurbishment?.choices.map((choice: string) => (
            <CTextInput
              label={""}
              type={"text"}
              value={choice}
              onChange={() => {}}
              disabled={true}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-3">
        <CTextInput
          label={"Category"}
          type={"text"}
          value={""}
          onChange={() => {}}
          disabled={true}
        />
        <CTextInput
          label={"Sub Category"}
          type={"text"}
          value={""}
          onChange={() => {}}
          disabled={true}
        />
      </div>

      <CRadioInput
        isFormEditable={"none"}
        handleRadioButton={() => {}}
        label={"Standard Image"}
        dataItems={standardImageRadioInputAttributes}
      />

      <CRadioInput
        isFormEditable={"none"}
        handleRadioButton={() => {}}
        label={"Not Applicable"}
        dataItems={notApplicableRadioInputAttributes}
      />

      <CRadioInput
        isFormEditable={"none"}
        handleRadioButton={() => {}}
        label={"Diagnostics"}
        dataItems={diagnosticsRadioInputAttributes}
      />
    </div>
  );
};
