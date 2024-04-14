import axios from "axios";
import { ActionTypes } from "./ActionType";

export const addToBasket = (product) => {
  return {
    type: ActionTypes.ADD_TO_BASKET,
    payload: product,
  };
};
//Asenkron İşlem

/*
*Thunk sayesinde action dispatch edilmeden önce 
*APİ ÇAĞRISI YAPAR
*gELEN VERİYE GÖRE TETİKLEME İŞLEMİ YAPAR

*/
export const getProduct = () => (dispatch) => {
  axios.defaults.baseURL = "https://fakestoreapi.com";
  axios
    .get("/products")
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_PRODUCTS,

        payload: res.data,
      })
    )
    .catch((error) => dispatch({}));
};
