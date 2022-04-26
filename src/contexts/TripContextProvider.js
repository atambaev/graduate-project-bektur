import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { notify, notifyError } from "../components/Toastify/Toastify";
import { ACTIONS, API, TRIPS_LIMIT } from "../helpers/consts";

export const tripContext = createContext();

export const useTripContext = () => {
  return useContext(tripContext);
};

const INIT_STATE = {
  trips: [],
  forEditVal: null,
  pageTotalCount: 1,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_TRIPS:
      return {
        ...state,
        trips: action.payload.data,
        pageTotalCount: Math.ceil(
          action.payload.headers["x-total-count"] / TRIPS_LIMIT
        ),
      };
    case ACTIONS.GET_ONE_TRIP:
      return { ...state, forEditVal: action.payload };
    default:
      return state;
  }
}

const TripContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();
  const getTrips = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: ACTIONS.GET_TRIPS,
        payload: res,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const addTrip = async (newTrip) => {
    try {
      let res = await axios.post(API, newTrip);
      notify("success", `Trip ${newTrip.title} was succesfully added`);
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };

  const deleteTrip = async (trip) => {
    try {
      let res = await axios.delete(`${API}/${trip.id}`);
      notify("success", `Trip ${trip.title} was deleted`);
      getTrips();
    } catch (err) {
      notifyError(err);
    }
  };

  const getOneTrip = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_TRIP,
        payload: data,
      });
    } catch (err) {
      notifyError(err);
    }
  };

  const saveEditedTrip = async (editedTrip) => {
    try {
      let res = await axios.patch(`${API}/${editedTrip.id}`, editedTrip);
      notify("info", `Trip ${editedTrip.title} was successfully updated`);
      getTrips();
      navigate("/admin");
    } catch (err) {
      notifyError(err);
    }
  };

  return (
    <tripContext.Provider
      value={{
        trips: state.trips,
        forEditVal: state.forEditVal,
        pageTotalCount: state.pageTotalCount,
        addTrip,
        getTrips,
        deleteTrip,
        getOneTrip,
        saveEditedTrip,
      }}
    >
      {children}
    </tripContext.Provider>
  );
};

export default TripContextProvider;
