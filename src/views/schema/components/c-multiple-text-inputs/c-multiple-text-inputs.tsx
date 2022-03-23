import { CButton } from "@shared/buttons";
import { CTextInput } from "@shared/inputs";
import { CInputLabel } from "@shared/inputs/c-input-label";
import { useEffect, useState } from "react";

interface TextInputAttributesType {
  id: number;
  value: string | number;
  isEditable: boolean;
}

interface MultipleTextInputProps {
  attributes: Array<TextInputAttributesType>;
  initialAttribute: TextInputAttributesType;
  label: string;
  onChangeAttributes: Function;
}

export const CMultipleTextInput = ({
  attributes,
  initialAttribute,
  label,
  onChangeAttributes,
}: MultipleTextInputProps) => {
  const [textInputAttributes, setTextInputAttributes] = useState<Array<any>>(
    []
  );

  useEffect(() => {
    setTextInputAttributes(attributes);
  }, []);

  useEffect(() => {
    onChangeAttributes(textInputAttributes);
  }, [textInputAttributes]);

  const handleAddInput = () => {
    setTextInputAttributes([
      ...textInputAttributes,
      { ...initialAttribute, id: textInputAttributes.length },
    ]);
  };

  const handleRemoveInput = (index: number) => {
    let newTextInputAttributes = [...textInputAttributes];
    newTextInputAttributes.splice(index, 1);
    setTextInputAttributes(newTextInputAttributes);
  };

  const handleEditInput = (id: number) => {
    const newTextInputAttributes = [...textInputAttributes];
    const isEditable = newTextInputAttributes.find(
      (newTextInputAttribute) => newTextInputAttribute.id === id
    ).isEditable;
    newTextInputAttributes.find(
      (newTextInputAttribute) => newTextInputAttribute.id === id
    ).isEditable = !isEditable;
    setTextInputAttributes(newTextInputAttributes);
  };

  const onChangeTextInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const {
      target: { value },
    } = e;
    let attributes = [...textInputAttributes];
    attributes[index]["value"] = value;
    setTextInputAttributes(attributes);
  };
  return (
    <>
      <CInputLabel label={label} />
      {textInputAttributes.map(
        (textInputAttribute: TextInputAttributesType, index: number) => {
          const { value, isEditable, id } = textInputAttribute;
          return (
            <>
              <CTextInput
                label={""}
                onChange={(e) => {
                  onChangeTextInput(e, index);
                }}
                type={"text"}
                value={value}
                disabled={isEditable}
              />
              <div className="mt-4">
                {textInputAttributes.length !== 1 && (
                  <CButton
                    label={"Edit"}
                    onClick={() => handleEditInput(id)}
                    type={"addMore"}
                  />
                )}
                {textInputAttributes.length - 1 === index && (
                  <CButton
                    label={"Add"}
                    onClick={handleAddInput}
                    type={"addMore"}
                  />
                )}
                {textInputAttributes.length !== 1 && (
                  <CButton
                    label={"Remove"}
                    onClick={() => handleRemoveInput(index)}
                    type={"remove"}
                  />
                )}
              </div>
            </>
          );
        }
      )}
    </>
  );
};
