import { Dispatch } from "redux";

export const setFilterValue = (value: string): any => {
  return (dispatch: Dispatch) => {
    dispatch({ type: "SET_FILTER_VALUE", payload: value });
  };
};

export const filterData = (value: number) => ({
  type: "FILTER_DATA",
  payload: value,
});

export const setFilterDATA = (data: Array<Object>) => ({
  type: "SET_FILTER_DATA",
  payload: data,
});

export const setSort = (value: string) => ({
  type: "SET_SORT_VALUE",
  payload: value,
});

export const setFilterTraits = (traits: Array<Object>) => ({
  type: "SET_FILTER_TRAITS",
  payload: traits,
});

export const setFilterTraitValue = (traitValue: string) => ({
  type: "SET_FILTER_TRAIT_VALUE",
  payload: traitValue,
});

export const toggleFilter = () => ({ type: "TOGGLE_FILTER" });
