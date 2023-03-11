import { toast } from "react-hot-toast";

export const errorBlock = (err) => {
  if (err?.response) return toast.error(err.response?.data?.response);
  toast.error(err.message);
};
