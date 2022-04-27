import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Filter = ({ type, setType, setPage, handleReset }) => {
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Batken">Batken</MenuItem>
            <MenuItem value="Chüy">Chüy</MenuItem>
            <MenuItem value="Jalal-Abad">Jalal-Abad</MenuItem>
            <MenuItem value="Naryn">Naryn</MenuItem>
            <MenuItem value="Osh">Osh</MenuItem>
            <MenuItem value="Talas">Talas</MenuItem>
            <MenuItem value="Ysyk-Köl">Ysyk-Köl</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <br />
    </>
  );
};

const sevenregions = [
  { title: "All" },
  { title: "Batken", type: "batken" },
  { title: "Chüy" },
  { title: "Jalal-Abad" },
  { title: "Naryn" },
  { title: "Osh" },
  { title: "Talas" },
  { title: "Ysyk-Köl" },
];

export default Filter;
