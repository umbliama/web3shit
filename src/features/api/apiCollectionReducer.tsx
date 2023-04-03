const initialState = {
  data: [],
  filteredData: [],
  stats: [],
  isReady: false,
  limit: 20,
  tokenIdFirst: 1,
  tokenIdLast: 20,
  continuation: "",
};

export default function apiCollectionReducer(
  state = initialState,
  action: any
) {
  switch (action.type) {
    case "setCollectionData":
      const newData = [...state.data, ...action.payload];

      if (state.data.length > 0) {
        return {
          ...state,
          data: newData,
        };
      } else {
        return {
          ...state,
          data: action.payload,
        };
      }

    case "setContinuation": {
      return {
        ...state,
        continuation: action.payload,
      };
    }
    case "setFirstNLastIDs":
      return {
        ...state,
        tokenIdFirst: state.tokenIdLast,
        tokenIdLast: state.tokenIdLast + action.payload,
      };
    case "setCollectionStats":
      return {
        ...state,
        stats: action.payload,
      };
    case "loadData":
      return {
        ...state,
        isReady: true,
      };
    default:
      return {
        ...state,
      };
  }
}
