import { bill, cent } from "../constant/amount";
import * as R from "ramda";

const convertDigit = (value, digit) => {
  return `${value
    .toString()
    .split("")
    .reverse()
    .join("")
    .charAt(digit)}`;
};

const checkBill = value => {
  let txt = "";
  let data = "";
  let calDigi = 0;
  const arrObj = Object.keys(bill);
  let digitTen = parseInt(
    `${convertDigit(value, 1)}${convertDigit(value, 0)}`,
    10
  );
  arrObj.forEach((obj, index) => {
    if (index === 0) {
      if (value >= bill[obj]) {
        data = `${parseInt(value / bill[obj], 10)} ${bill[obj]} dollar bill`;
        txt = txt ? `${txt}, ${data}` : `${data}`;
      }
    } else {
      if (digitTen >= bill[obj]) {
        calDigi = parseInt(digitTen / bill[obj]);
        data = `${calDigi} ${bill[obj]} dollar bill`;
        txt = txt ? `${txt}, ${data}` : `${data}`;
        digitTen = digitTen - bill[obj] * calDigi;
      }
    }
  });
  return txt;
};

const checkCent = value => {
  let txt = "";
  let data = "";
  let calDigi = 0;
  let digi = value;
  const arrObj = Object.keys(cent);
  arrObj.forEach(obj => {
    if (digi >= cent[obj]) {
      calDigi = parseInt(digi / cent[obj], 10);
      data = `${calDigi} ${obj}`;
      txt = txt ? `${txt}, ${data}` : `${data}`;
      digi = digi - cent[obj] * calDigi;
    }
  });
  return txt;
};

const calculate = value => {
  const arrValue = value.split(".");
  let amount;
  if (arrValue.length > 1) {
    const digit = checkBill(parseInt(arrValue[0], 10));
    const decimal = checkCent(parseInt(arrValue[1], 10));
    amount = digit ? `Your change is ${digit}, ${decimal}` : `Your change is ${decimal}`;
  } else {
    amount = `Your change is ${checkBill(parseInt(arrValue[0], 10))}`;
  }
  return amount;
};

export default calculate;

