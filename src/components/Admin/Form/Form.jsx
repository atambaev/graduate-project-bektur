import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initValues = {
  title: "",
  type: "",
  price: "",
  description: "",
  img: "",
};

const Form = ({ saveValues, compForEdit, forEditVal, getOneTrip }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  //   todo EDIT
  useEffect(() => {
    if (compForEdit) {
      getOneTrip(id);
    }
  }, []);

  useEffect(() => {
    if (compForEdit && forEditVal) {
      setInpValues(forEditVal);
    }
  }, [forEditVal]);
  //   todo END OF EDIT

  const handleChange = (e) => {
    let obj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
      price: +inpValues.price,
    };
    saveValues(obj);
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          name="title"
          value={inpValues.title}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          style={{ margin: "2rem 0" }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="type"
            value={inpValues.type}
            label="Type"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Batken"}>Batken</MenuItem>
            <MenuItem value={"Chüy"}>Chüy</MenuItem>
            <MenuItem value={"Jalal-Abad"}>Jalal-Abad</MenuItem>
            <MenuItem value={"Naryn"}>Naryn</MenuItem>
            <MenuItem value={"Osh"}>Osh</MenuItem>
            <MenuItem value={"Talas"}>Talas</MenuItem>
            <MenuItem value={"Ysyk-Köl"}>Ysyk-Köl</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="number"
          name="price"
          value={inpValues.price}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          style={{ margin: "2rem 0" }}
        />
        <TextField
          name="img"
          value={inpValues.img}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Image"
          variant="outlined"
        />
        <TextField
          name="description"
          value={inpValues.description}
          onChange={(e) => handleChange(e)}
          id="outlined-basic"
          label="Description"
          variant="outlined"
          multiline
          rows={3}
          style={{ margin: "2rem 0" }}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
