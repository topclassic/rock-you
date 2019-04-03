import * as R from "ramda";

export const validateNumber = (_, value, callback) => {
  if (value && R.isEmpty(R.match(/^\d*(\.\d{1,2})?$/g, value))) {
    callback("Invalid format Ex. 100.99, 100, .99");
  }
  callback();
};