import { CheckObjectInterface } from "../interfaces/checks";

export const transform_array = (array: CheckObjectInterface[]) => {
  let transformedArray = array.map(
    (check) => check && { ...check, checked_value: "", active_index: 0 }
  );

  transformedArray = transformedArray.sort((a, b) => a.priority - b.priority);

  return transformedArray;
};

export const update_Active_index = (
  array: CheckObjectInterface[],
  active_index: number
) => {
  const updated_array: CheckObjectInterface[] = [];
  array.forEach((check) => {
    check.active_index = active_index + 1;
    updated_array.push(check);
  });

  return updated_array;
};

export const key_event_listner = (
  key: string,
  array: CheckObjectInterface[]
) => {
  let selectedItem = array && array[0]?.active_index;
  if (selectedItem !== undefined) {
    switch (key) {
      case "1":
        array[Number(selectedItem)].checked_value = "yes";
        break;

      case "2":
        array[Number(selectedItem)].checked_value = "no";
        break;

      case "ArrowDown":
        if (
          array[selectedItem].checked_value !== "" &&
          selectedItem !== array.length - 1
        ) {
          update_Active_index(array, selectedItem);
        }
        break;

      case "ArrowUp":
        let updated_array: CheckObjectInterface[] = [];
        if (selectedItem > 0) {
          array.forEach((check) => {
            check.active_index = Number(selectedItem) - 1;
            updated_array.push(check);
          });
        }
        break;

      default:
        break;
    }
  }

  return { selectedItem, array };
};
