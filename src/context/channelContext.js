import axios from "../utils/axios";
import React, { createContext, useState } from "react";
import { channelController } from "../controllers/channelController";
import { errorBlock } from "../controllers/errorBlock";
import { getToken } from "../utils/token";
export const ChannelContext = createContext();

const channelReducer = () => {
  let token, user;
  return {
    // acceptChannelRequest: async (channelid, alias) => {
    //   try {
    //     let res = await axios.post("/submeter/acceptchanneladdrequest", {
    //       channelid: channelid,
    //       alias: alias,
    //     });
    //     return res;
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // },
    // acceptChannelDowngradeRequest: async (channelid, username) => {
    //   try {
    //     let res = await axios.post("/submeter/acceptchanneldowngraderequest", {
    //       channelid: channelid,
    //       username: username,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // addDevice: async (alias, deviceid, devicetype) => {
    //   try {
    //     user = await getUsername("voltz_user_username");
    //     console.log(alias, deviceid, devicetype, user, token);
    //     let res = await axios.post("/submeter/adddevice", {
    //       deviceid: deviceid,
    //       devicetype: devicetype,
    //       alias: alias,
    //       username: user,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // assignChannel: async (targetusername, channelid, note, accesslevel) => {
    //   try {
    //     let res = await axios.post("/submeter/assignchannel", {
    //       targetusername: targetusername,
    //       channelid: channelid,
    //       note: note,
    //       accesslevel: accesslevel,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // cancelChannelRequest: async (channelid) => {
    //   try {
    //     let res = await axios.post("/submeter/cancelchanneladdrequest", {
    //       channelid: channelid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // editChannelAlias: async (newalias, channelid, username) => {
    //   try {
    //     let res = await axios.post("/submeter/editchannelalias", {
    //       channelid: channelid,
    //       username: username,
    //       newalias: newalias,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // editChannelGroup: async (newgroup, channelid) => {
    //   try {
    //     user = await getUsername("voltz_user_username");
    //     let res = await axios.post("/submeter/editchannelgroup", {
    //       channelid: channelid,
    //       username: user,
    //       newgroup: newgroup,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    getAllChannels: async (groupprefix, limit, offset) => {
      try {
        let res = await axios.post("/submeter/getallchannels", {
          groupprefix: groupprefix || "",
          limit: limit || 30,
          offset: offset || 0,
        });
        let result = channelController(res);
        const { message } = result;

        return message;
      } catch (err) {
        return errorBlock(err);
      }
    },
    // getAllUserDevices: async () => {
    //   try {
    //     let res = await axios.post("/submeter/getalluserdevices");
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // getChannelDowngradeRequest: async () => {
    //   try {
    //     let res = await axios.post("/submeter/getchanneldowngraderequests", {});
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // getReceivedChannelAddrequest: async (limit, offset) => {
    //   try {
    //     let res = await axios.post("/submeter/getreceivedchanneladdrequests", {
    //       limit: limit,
    //       offset: offset,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // getSentChannelAddrequest: async (limit, offset) => {
    //   try {
    //     let res = await axios.post("/submeter/getsentchanneladdrequests", {
    //       limit: limit || 10,
    //       offset: offset || 0,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // // ​
    // getUsersonChannel: async (username, channelId) => {
    //   try {
    //     let user = await getToken("voltz_user_username");
    //     let res = await axios.post("/submeter/getuserschannelissharedwith", {
    //       username: user,
    //       channelid: channelId,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // getUserChannelAreAssignedTo: async (username, deviceid) => {
    //   try {
    //     let res = await axios.post("/submeter/getuserschannelareassignedto", {
    //       username: username,
    //       deviceid: deviceid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // isDeviceOwner: async (username) => {
    //   try {
    //     let res = await axios.post("/submeter/isdeviceowner", {
    //       username: username,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // isDeviceOwnerByChannelId: async (username, deviceid) => {
    //   try {
    //     let res = await axios.post("/submeter/downgraderequest", {
    //       username: username,
    //       deviceid: deviceid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // isDeviceOwnerByChannelId: async (username, channelid) => {
    //   try {
    //     let res = await axios.post("/submeter/isdeviceownerbychannelid", {
    //       username: username,
    //       channelid: channelid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // rejectChannelAddRequest: async (channelid) => {
    //   try {
    //     let token = await getToken("voltz_user_token");
    //     let user = await getToken("voltz_user_username");
    //     let res = await axios.post("/submeter/rejectchanneladdrequest", {
    //       channelid: channelid,
    //     });
    //     return res;
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // },
    // rejectChannelDowngradeRequest: async (channelid, username) => {
    //   try {
    //     let res = await axios.post("/submeter/rejectchanneldowngraderequest", {
    //       channelid: channelid,
    //       username: username,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // removeSelfFromChannel: async (channelid) => {
    //   try {
    //     let user = await getToken("voltz_user_username");
    //     let res = await axios.post("/submeter/removeselffromchannel", {
    //       channelid: channelid,
    //       username: user,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // requestChannelAccessSharing: async (channelid) => {
    //   try {
    //     let res = await axios.post("/submeter/requestchannelaccesssharing", {
    //       channelid: channelid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
    // userHasChannelAccess: async (channelid, username) => {
    //   try {
    //     let res = await axios.post("/submeter/userhaschannelaccess", {
    //       channelid: channelid,
    //     });
    //     return res;
    //   } catch (err) {
    //     return err;
    //   }
    // },
  };
};

export const ChannelContextProvider = ({ children }) => {
  return (
    <ChannelContext.Provider value={channelReducer()}>
      {children}
    </ChannelContext.Provider>
  );
};
