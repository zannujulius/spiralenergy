import { ACCEPT_CHANNEL_REQUEST, ALL_CHANNELS } from "../action/types";

const initialState = {
  acceptedRequested: false,
  allChannels: [],
};

export function channelReducer(state = initialState, action) {
  switch (action.type) {
    case ACCEPT_CHANNEL_REQUEST:
      return {
        ...state,
      };
    case ALL_CHANNELS:
      return {
        ...state,
        allChannels: action.payload,
      };

    default:
      return state;
  }
}
