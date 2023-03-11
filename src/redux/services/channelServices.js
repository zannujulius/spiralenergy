import axios from "../../utils/voltzapi";

export const channelServices = {
  fetchChannels: (groupprefix, limit, offset) => {
    axios.post("/submeter/getallchannels").then(({ data, status }) => ({
      data,
      status,
    }));
  },
};
