import { CheckObjectInterface } from "../interfaces/checks";

export const submit_button_check = (array: CheckObjectInterface[]) => {
  let all_checks_yes_array: CheckObjectInterface[] = [];
  let at_least_one_no_array: CheckObjectInterface[] = [];

  all_checks_yes_array = array?.filter(
    (check) => check.checked_value !== "" && check.checked_value === "yes"
  );

  at_least_one_no_array = array?.filter(
    (check) => check.checked_value !== "" && check.checked_value !== "no"
  );
  return !(
    all_checks_yes_array?.length === array?.length ||
    at_least_one_no_array?.length === array?.length - 1
  );
};
