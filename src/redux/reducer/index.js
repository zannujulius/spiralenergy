import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persisConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  submeter: "",
});

export default persistReducer(persisConfig, rootReducer);
