// saga.js
import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
// import { incrementByAmount } from "../features/counter/counterSlice";
// import { sagaActions } from "./sagaActions";

// function uses axios to fetch data from our api
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const callAPI = async ({
  url,
  method,
  data,
}: {
  url: string;
  method: any;
  data?: any;
}) => {
  return await Axios({
    url,
    method,
    data,
  });
};

const API_METHODS = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
};

export { API_METHODS, callAPI };
