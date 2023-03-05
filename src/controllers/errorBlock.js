import { toast } from "react-hot-toast";

export const errorBlock = (item) => {
  if (item?.response) {
    toast.error(item.response?.data?.response);
  }
};
