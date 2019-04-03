import { GET_CALCULATION } from "../constants/actionType";

const INITIAL_STATE = {
  data: {},
  isSumbitLoading: false,
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CALCULATION.REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_CALCULATION.SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case GET_CALCULATION.FAILURE:
      return {
        ...state,
        isLoading: false,
        data: {}
      };

    default:
      return state;
  }
};
