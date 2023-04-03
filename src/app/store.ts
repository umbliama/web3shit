import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import apiCollectionReducer from '../features/api/apiCollectionReducer';
import apiReducer from '../features/api/apiReducer';
import { filterReducer } from '../features/api/filterReducer';


export const store = configureStore({
  reducer:{
    apiCollectionReducer,
    apiReducer,
    filterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
