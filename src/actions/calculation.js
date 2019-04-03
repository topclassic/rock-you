// example fetch data

import axios from "axios";
import { GET_CALCULATION } from "../constants/actionType";

export const fetchCalculation = value => async dispatch => {
  try {
    dispatch({ type: GET_CALCULATION.REQUEST });
    const { data } = await axios({});
    dispatch({ type: GET_CALCULATION.SUCCESS, data });
  } catch (error) {
    dispatch({ type: GET_CALCULATION.ERROR });
  }
};
