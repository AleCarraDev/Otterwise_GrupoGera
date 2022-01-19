import { format } from "date-fns";

export const dateFormatter = (date) => {
  return format(date, "dd/MM/yyyy");
};
