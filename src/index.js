import { createStorecreateStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
};

const countStore = createStorecreateStore(countModifier);

console.log(countStore.getState());
