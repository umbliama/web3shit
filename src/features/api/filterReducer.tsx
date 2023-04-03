import { Reducer } from "@reduxjs/toolkit";

interface Item {
  id: number;
}

interface State {
  filteredData: Item[];
  filterValue: string;
  sort: string;
  traits: Array<Object>;
  filterTraitValue: string;
  filterIsOpen: boolean;
  traitsIsSet: boolean;
}

const initialState: State = {
  filteredData: [],
  filterValue: "",
  sort: "ASC",
  traits: [],
  filterTraitValue: "",
  filterIsOpen: true,
  traitsIsSet: false,
};

export const filterReducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_VALUE":
      return {
        ...state,
        filterValue: action.payload,
      };
    case "SET_FILTER_TRAITS":
      return {
        ...state,
        traits: action.payload,
      };
    case "SET_SORT_VALUE":
      return {
        ...state,
        sort: action.payload,
      };
    case "SET_FILTER_TRAIT_VALUE":
      return {
        ...state,
        filterTraitValue: action.payload,
      };
    case "SET_FILTER_DATA":
      return {
        ...state,
        filteredData: action.payload,
      };
    case "TOGGLE_FILTER":
      return {
        ...state,
        filterIsOpen: !state.filterIsOpen,
      };
    case "TRAITS_IS_SET":
      return {
        ...state,
        traitsIsSet: true,
      };
    default:
      return state;
  }
};
