import { Action } from "@reduxjs/toolkit";

export interface apiStatus {
  isReady: boolean;
}

const initialState: apiStatus = {
  isReady: false,
};

export default function apiReducer(state = initialState, action: Action) {
  switch (action.type) {
    case "api_call_success":
      return {
        ...state,
        isReady: true,
      };
    case "api_call_failed":
      return {
        ...state,
        isReady: false,
      };
    default:
      return state;
  }
}
