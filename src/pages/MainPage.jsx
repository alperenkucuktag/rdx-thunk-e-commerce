import React from "react";
import { useSelector } from "react-redux";
import store from "../Redux/store";
import productReducer from "../Redux/Reducer/productReducer";
import basketReducer from "../Redux/Reducer/basketReducer";
import Loading from "../components/Loading";
import Card from "../components/Card";

const MainPage = () => {
  const { productReducer, basketReducer } = useSelector((store) => ({
    productReducer: store.productReducer,
    basketReducer: store.basketReducer,
  }));
  // console.log(basketReducer);

  return (
    <div>
      {productReducer.isLoading && <Loading />}
      <div className='d-flex flex-wrap gap-5 p-4 justify-content-center'>
        {productReducer.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
