import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useTripContext } from "../../../contexts/TripContextProvider";

const Edit = () => {
  const navigate = useNavigate();
  const { forEditVal, getOneTrip, saveEditedTrip } = useTripContext();
  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton>
      <Form
        saveValues={saveEditedTrip}
        compForEdit={true}
        forEditVal={forEditVal}
        getOneTrip={getOneTrip}
      />
    </div>
  );
};

export default Edit;
