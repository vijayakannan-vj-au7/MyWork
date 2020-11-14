import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MasterCard from "../components/MasterCard";
import { getStockData } from "../redux/actions/stockAction";

//
const Stock = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.stockRoot);
  console.log(store.stock);

  //
  useEffect(() => {
    dispatch(getStockData());
  }, []);

  return (
    <div>
      <MasterCard msData={store.stock} />
    </div>
  );
};

export default Stock;
