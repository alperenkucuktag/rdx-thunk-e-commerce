import { ActionTypes } from "../Actions/ActionType";

const initialState = {
  basket: [],
  Total: 0,
};
const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_BASKET:
      /*
      ! Elemanını sırasını bulma (findİndex metodu)

      */
      const index = state.basket.findIndex((i) => i.id === payload.id);
      // Eğer  indeks varsa
      if (index >= 0) {
        const cloneBasket = [...state.basket];
        cloneBasket[index].amount++;
        return {
          ...state,
          basket: cloneBasket,
        };
      }
      // Eğer Sepette eleman yoksa
      else {
        /*
         *burda statetimizdeki basket ile action IN payloadından gelen basketi birleştirmesini sağlıyoruz
         */
        const newArray = state.basket.concat({ ...payload, amount: 1 });

        return {
          ...state,
          basket: newArray,
          Total: state.Total + payload.price,
        };
      }

    default:
      return state;
  }
};

export default basketReducer;
