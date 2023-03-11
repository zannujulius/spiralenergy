import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import { channelReducer } from "./channelReducer";

const persisConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  channels: channelReducer,
});

export default persistReducer(persisConfig, rootReducer);
