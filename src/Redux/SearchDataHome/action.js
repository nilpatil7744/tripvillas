import { SEARCH_DATA, SEARCH_DATA_QUERY } from "./actiontype";

export const searchdata = (payload) => {
  return {
    type: SEARCH_DATA,
    payload,
  };
};

export const searchdataquery = (payload) => {
  return {
    type: SEARCH_DATA_QUERY,
    payload,
  };
};
