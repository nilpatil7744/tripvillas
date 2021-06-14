import { SEARCH_DATA, SEARCH_DATA_QUERY } from "./actiontype";

const initState = {};

const searchreducer = (state = initState, { type, payload }) => {
  switch (type) {
    case SEARCH_DATA: {
      return {
        ...state,
        todos: payload,
      };
    }
    case SEARCH_DATA_QUERY: {
      return {
        ...state,
        todos2: payload,
      };
    }
    default:
      return state;
  }
};

export { searchreducer };
