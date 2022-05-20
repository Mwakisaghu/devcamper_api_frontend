import {
  GET__BOOTCAMPS,
  CREATE_BOOTCAMP,
  DELETE_BOOTCAMP,
} from '../../actions/types';

const initialState = {
  bootcamps: [],
  error: null,
};

/* eslint-disable */
export default (state = initialState, action) => {
  switch (action.type) {
    case GET__BOOTCAMPS:
      return {
        ...state,
        bootcamps: action.payload,
      };
    case CREATE_BOOTCAMP:
      return {
        ...state,
        bootcamps: [...state.bootcamps, action.payload],
      };
    case DELETE_BOOTCAMP:
      console.log({ state });
      const filteredBootcamps = state.bootcamps.data.filter(
        (bootcamp) => bootcamp._id !== action.payload
      );
      console.log({
        filteredBootcamps,
        bootcamps: state.bootcamps,
        payload: action.payload,
      });
      return {
        ...state,
        bootcamps: { data: filteredBootcamps },
      };
    default:
      return state;
  }
};
