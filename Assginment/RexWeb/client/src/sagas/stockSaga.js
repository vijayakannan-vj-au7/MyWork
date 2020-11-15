import { call, put, takeEvery } from "redux-saga/effects";
import { setStockData } from "../redux/actions/stockAction";

function getApi() {
  return fetch("https://mystockplace.herokuapp.com/api/getstock", {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((e) => e);
}

function* getStockData(action) {
  try {
    const stock = yield call(getApi);
    yield put(setStockData(stock));
  } catch (err) {
    console.log(err);
  }
}

export function* waitForGetStockData() {
  yield takeEvery("GET_STOCK_DATA", getStockData);
}
