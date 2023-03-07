import { ACCEPT_CHANNEL_REQUEST } from "../action/types";

const initialState = {
  acceptedRequested: false,
};

export function submeterReducer(state = initialState, action) {
  switch (action.type) {
    case A:
      return {
        ...state,
      };

    default:
      return state;
  }
}
