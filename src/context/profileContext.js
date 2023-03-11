import axios from "../utils/axios";
import { createContext } from "react";
import { getToken } from "../utils/token";
import { errorBlock } from "../controllers/errorBlock";
import { toast } from "react-hot-toast";
import { channelController } from "../controllers/channelController";
export const ProfileContext = createContext();

const profileReducer = () => {
  return {
    profileData: async () => {
      try {
        let username = await getToken("spiral_username");
        let res = await axios.post("/auth/account/getuser", {
          username,
        });
        let result = channelController(res);
        const { message } = result;
        return message;
      } catch (err) {
        return errorBlock(err);
      }
    },
  };
};

export const ProfileContextProvider = ({ children }) => {
  return (
    <ProfileContext.Provider value={profileReducer()}>
      {children}
    </ProfileContext.Provider>
  );
};
