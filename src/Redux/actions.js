// Action Types
export const GET_ROOMS = "GET_ROOMS";
export const FILTER_ROOMS = "FILTER_ROOMS";
export const SORT_ROOMS = "SORT_ROOMS";

// Action Creators
export const getData = (data) => {
  return {
    type: GET_ROOMS,
    payload: data,
  };
};

export const filterData = (data) => {
  return {
    type: FILTER_ROOMS,
    payload: data,
  };
};

export const sortData = (data) => {
  return {
    type: SORT_ROOMS,
    payload: data,
  };
};
