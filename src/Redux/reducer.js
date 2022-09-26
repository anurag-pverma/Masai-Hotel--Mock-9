import { FILTER_ROOMS, GET_ROOMS, SORT_ROOMS } from "./actions";

const initState = {
  rooms: [],
};

export const Reducer = (store = initState, action) => {
  switch (action.type) {
    case GET_ROOMS:
      return { ...store, rooms: action.payload };

    case FILTER_ROOMS:
      return { ...store, rooms: action.payload };

    case SORT_ROOMS:
      return { ...store, rooms: action.payload };
    default:
      return store;
  }
};
