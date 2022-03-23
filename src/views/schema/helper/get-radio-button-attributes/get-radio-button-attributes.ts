interface RadioInputAttributesType {
  label: string;
  condition: string;
  conditionWith: string;
  name: string;
  id: string;
}

/**
 * @param label radio Input Label.
 * @param condition condition must be user defined, example: true, enabled etc so whenever conditionWith matches with conditon the radio input will get checked.
 * @param conditionWith conditionWith must come from backend, so it will decide wheather radio input will be checked or not, example: if it'll matches with condition it mean from backend its checked.
 * @param name name is name of radio input, *name must be same for multiple radio input in group*.
 * @param id id must be different so you can know on which radio input user have clicked on.
 */
export const getRadioInputAttributes = ({
  label,
  condition,
  conditionWith,
  name,
  id,
}: RadioInputAttributesType) => {
  return {
    radioInputLabel: label,
    condition: condition,
    conditionWith: conditionWith,
    name: name,
    id: id,
  };
};
