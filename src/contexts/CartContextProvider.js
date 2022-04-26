import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { CART } from "../helpers/consts";
import { calcTotalPrice, calSubPrice } from "../helpers/functions";
import { useAuth } from "./AuthContextProvider";

const cartContext = createContext();

export const useCart = () => {
  return useContext(cartContext);
};

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
  cartLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case CART.GET_CART_LENGTH:
      return {
        ...state,
        cartLength: action.payload,
      };
    case CART.GET_CART: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function createCartFromLS() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        trips: [],
        totalPrice: 0,
      };
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  }

  // todo ADD && DELETE

  const addDelCart = (trip) => {
    if (currentUser.isLogged) {
      let cart = createCartFromLS();
      let newTrip = {
        item: trip,
        count: 1,
        subPrice: trip.price,
      };

      let checkTripInCart = cart.trips.some((obj) => {
        return obj.item.id === trip.id;
      });
      if (checkTripInCart) {
        cart.trips = cart.trips.filter((obj) => {
          return obj.item.id !== trip.id;
        });
      } else {
        cart.trips.push(newTrip);
      }

      cart.totalPrice = calcTotalPrice(cart.trips);
      localStorage.setItem("cart", JSON.stringify(cart));
      getCartLength();

      dispatch({
        type: CART.GET_CART,
        payload: cart,
      });
    } else {
      navigate("/login");
    }
  };

  const getCartLength = () => {
    let cart = createCartFromLS();
    dispatch({
      type: CART.GET_CART_LENGTH,
      payload: cart.trips.length,
    });
  };

  const isTripInCart = (id) => {
    let cart = createCartFromLS();
    let exist = cart.trips.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const getCart = () => {
    let cart = createCartFromLS();
    dispatch({
      type: CART.GET_CART,
      payload: cart,
    });
  };

  const changeTripCount = (newCount, id) => {
    let cart = createCartFromLS();
    cart.trips = cart.trips.map((elem) => {
      if (elem.item.id === id) {
        elem.count = newCount;
        elem.subPrice = calSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.trips);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  };

  const deleteTripInCart = (id) => {
    let cart = createCartFromLS();
    cart.trips = cart.trips.filter((elem) => {
      return elem.item.id !== id;
    });
    cart.totalPrice = calcTotalPrice(cart.trips);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    getCartLength();
  };

  return (
    <cartContext.Provider
      value={{
        cartLength: state.cartLength,
        cart: state.cart,
        addDelCart,
        getCartLength,
        isTripInCart,
        getCart,
        changeTripCount,
        deleteTripInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
