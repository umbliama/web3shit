import { Action, Dispatch } from "redux";
import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export interface FetchDataStartAction extends Action {
  type: typeof FETCH_DATA_START;
}

export interface FetchDataSuccessAction extends Action {
  type: typeof FETCH_DATA_SUCCESS;
  payload: any;
}

export interface FetchDataFailAction extends Action {
  type: typeof FETCH_DATA_FAIL;
  error: any;
}

export const fetchDataStart = (): FetchDataStartAction => ({
  type: FETCH_DATA_START,
});

export const fetchDataSuccess = (data: any): FetchDataSuccessAction => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFail = (error: any): FetchDataFailAction => ({
  type: FETCH_DATA_FAIL,
  error,
});

const dataParams = (continuation?: string) => {
  if (continuation) {
    return {
      method: "GET",
      url: `https://api.reservoir.tools/tokens/v5?limit=30&collection=0x0df49ce5a655b53118824c7ad4988da4fe9035f5&includeAttributes=true&sortBy=tokenId&sortDirection=asc&continuation=${continuation}`,
      headers: {
        accept: "application/json",
        "X-API-KEY": "d3c7ddfa-ce15-55cd-84b9-8522797185d4",
      },
    };
  } else {
    return {
      method: "GET",
      url: `https://api.reservoir.tools/tokens/v5?limit=30&collection=0x0df49ce5a655b53118824c7ad4988da4fe9035f5&includeAttributes=true&sortBy=tokenId&sortDirection=asc`,
      headers: {
        accept: "application/json",
        "X-API-KEY": "d3c7ddfa-ce15-55cd-84b9-8522797185d4",
      },
    };
  }
};

const paramsStats = {
  method: "GET",
  url: "https://api.reservoir.tools/tokens/v5?limit=30&collection=0x0df49ce5a655b53118824c7ad4988da4fe9035f5&includeAttributes=true&sortBy=tokenId&sortDirection=asc",
  params: {
    collection_slug: "cryptoversespike",
  },
  headers: {
    accept: "application/json",
    "X-API-KEY": "d3c7ddfa-ce15-55cd-84b9-8522797185d4",
  },
};

const paramsTokenByIDSearch = (id: number) => {
  return {
    method: "GET",
    url: `https://api.reservoir.tools/tokens/v5?limit=30&tokens=0x0df49ce5a655b53118824c7ad4988da4fe9035f5%3A${id}&includeAttributes=true&sortBy=tokenId&sortDirection=asc`,
    headers: {
      accept: "application/json",
      "X-API-KEY": "d3c7ddfa-ce15-55cd-84b9-8522797185d4",
    },
  };
};

export const fetchStats = (): any => {
  return (dispatch: Dispatch) => {
    axios
      .request(paramsStats)
      .then((response) => {
        dispatch({
          type: "setCollectionStats",
          payload: response.data.collection,
        });
      })
      .then(() => {
        dispatch({
          type: "api_call_success",
        });
      });
  };
};

export const fetchData = (continuation?: string): any => {
  return (dispatch: Dispatch) => {
    dispatch(fetchDataStart());

    axios
      .request(dataParams(continuation))
      .then(function (response) {
        dispatch({
          type: "setContinuation",
          payload: response.data.continuation,
        });
        dispatch({
          type: "setCollectionData",
          payload: response.data.tokens,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};

export const fetchTokenByID = (id: number): any => {
  return (dispatch: Dispatch) => {
    axios
      .request(paramsTokenByIDSearch(id))
      .then(function (response) {
        dispatch({
          type: "SET_FILTER_DATA",
          payload: response.data.tokens,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
};
