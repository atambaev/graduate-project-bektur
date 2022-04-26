import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { FAV } from "../helpers/consts";
import { useAuth } from "./AuthContextProvider";

const favContext = createContext();

export const useFav = () => {
  return useContext(favContext);
};

const INIT_STATE = {
  fav: JSON.parse(localStorage.getItem("fav")),
  favLength: 0,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case FAV.GET_FAV_LENGTH:
      return {
        ...state,
        favLength: action.payload,
      };
    case FAV.GET_FAV: {
      return {
        ...state,
        fav: action.payload,
      };
    }
    default:
      return state;
  }
}

const FavContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  function createFavFromLS() {
    let fav = JSON.parse(localStorage.getItem("fav"));
    if (!fav) {
      fav = {
        trips: [],
        totalPrice: 0,
      };
      localStorage.setItem("fav", JSON.stringify(fav));
    }
    return fav;
  }

  //   todo ADD && DELETE

  const addDelFav = (trip) => {
    if (currentUser.isLogged) {
      let fav = createFavFromLS();
      let newTrip = {
        item: trip,
        count: 1,
        subPrice: trip.price,
      };

      let checkTripInFav = fav.trips.some((obj) => {
        return obj.item.id === trip.id;
      });

      if (checkTripInFav) {
        fav.trips = fav.trips.filter((obj) => {
          return obj.item.id !== trip.id;
        });
      } else {
        fav.trips.push(newTrip);
      }

      localStorage.setItem("fav", JSON.stringify(fav));
      getFavLength();

      dispatch({
        type: FAV.GET_FAV,
        payload: fav,
      });
    } else {
      navigate("/login");
    }
  };

  const getFavLength = () => {
    let fav = createFavFromLS();
    dispatch({
      type: FAV.GET_FAV_LENGTH,
      payload: fav.trips.length,
    });
  };

  const isTripInFav = (id) => {
    let fav = createFavFromLS();
    let exist = fav.trips.some((obj) => {
      return obj.item.id === id;
    });
    return exist;
  };

  const getFav = () => {
    let fav = createFavFromLS();
    dispatch({
      type: FAV.GET_FAV,
      payload: fav,
    });
  };

  const changeTripCount = (newCount, id) => {
    let fav = createFavFromLS();
    fav.trips = fav.trips.map((elem) => {
      if (elem.item.id === id) {
        elem.count = newCount;
      }
      return elem;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
  };

  const deleteTripInFav = (id) => {
    let fav = createFavFromLS();
    fav.trips = fav.trips.filter((elem) => {
      return elem.item.id !== id;
    });
    localStorage.setItem("fav", JSON.stringify(fav));
    getFav();
    getFavLength();
  };

  return (
    <favContext.Provider
      value={{
        favLength: state.favLength,
        fav: state.fav,
        addDelFav,
        getFavLength,
        isTripInFav,
        getFav,
        changeTripCount,
        deleteTripInFav,
      }}
    >
      {children}
    </favContext.Provider>
  );
};

export default FavContextProvider;
