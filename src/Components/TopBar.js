import React from "react";
import Switch from "@mui/material/Switch";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ReactComponent as Book } from "../images/logo.svg";
import { ReactComponent as Moon } from "../images/icon-moon.svg";
import { ReactComponent as Window } from "../images/icon-arrow-down.svg";

import "./TopBar.css";

const Topbar = ({ font, handleFont, mode, handleMode }) => {
  return (
    <div className="top">
      <Book />
      <div className="right-part">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={font}
            label="Font"
            onChange={handleFont}
            IconComponent={() => <Window />}
          >
            <MenuItem value={"sans"}>Sans Serif</MenuItem>
            <MenuItem value={"serif"}>Serif</MenuItem>
            <MenuItem value={"mono"}>Mono</MenuItem>
          </Select>
        </FormControl>
        <Switch
          checked={mode}
          onChange={handleMode}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Moon />
      </div>
    </div>
  );
};

export default Topbar;
