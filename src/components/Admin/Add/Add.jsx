import { IconButton } from "@mui/material";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";
import { useTripContext } from "../../../contexts/TripContextProvider";

const Add = () => {
  const navigate = useNavigate();
  const { addTrip } = useTripContext();
  return (
    <div>
      <p className="back" onClick={() => navigate(-1)}>
        Previous page
      </p>
      {/* <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon fontSize="large" />
      </IconButton> */}
      <h2
        className="page-title"
        style={{
          margin: 0,
        }}
      >
        Add
      </h2>
      <Form saveValues={addTrip} compForEdit={false} />
    </div>
  );
};

export default Add;
