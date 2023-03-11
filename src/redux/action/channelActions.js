import { ALL_CHANNELS } from "./types";
import { channelServices } from "../services/channelServices";
export const getAllchannels =
  (groupprefix, limit, offset) => async (dispatch) => {
    try {
      const result = await channelServices.fetchChannels(
        groupprefix || "",
        limit || 10,
        offset || 0
      );
      console.log(result);
      //   dispatch({ type: ALL_CHANNELS });
    } catch (err) {
      console.log(err.message, "//err message");
    }
  };
