import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../images/icon-search.svg";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { FilledInput } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const onChange = (event) => {
    setTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(term);
    }
  };

  return (
    <FormControl sx={{ width: "100%" }} variant="filled">
      <FilledInput
        id="filled-adornment"
        type="text"
        onChange={onChange}
        onKeyDown={handleKeyDown}
        value={term}
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon
              aria-label="toggle visibility"
              onClick={() => onSearch(term)}
              edge="end"
            />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
