import React from "react";
import { useSelector } from "react-redux";
import Basketİtem from "../components/Basketİtem";

const Basket = () => {
  const state = useSelector((store) => store.basketReducer);
  console.log("sepet", state);
  return (
    <div className='row align-items-center p-4'>
      <div className='col-md-9'>
        {/* Eğer ürün yoksa */}
        {state.basket.length === 0 && <p>Henüz Ürün Eklenmedi</p>}
        {state.basket.map((basketProduct) => (
          <Basketİtem key={basketProduct.id} basketProduct={basketProduct} />
        ))}
      </div>
      <div className='col-md-3 bg-warning p-5 rounded'>
        <h5>Toplam Fiyat : {state.Total} </h5>
        <button className='btn btn-success'>Alışverişi Tamamla</button>
      </div>
    </div>
  );
};

export default Basket;
