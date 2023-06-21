import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import DisplayResult from "./DisplayResult";
import NotFound from "./NotFound";

const GenerateResult = () => {
  const [results, setResult] = useState({});
  const [error, setError] = useState(null);

  const onSearch = (term) => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;

    axios
      .get(url)
      .then((response) => {
        setResult(response.data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error occurred:", error);
        if (error.response && error.response.status === 404) {
          setError("Not found");
        } else {
          setError("An error occurred");
        }
        setResult([]);
      });
  };

  return (
    <>
      <SearchBar onSearch={onSearch} />
      {error ? (
        <NotFound />
      ) : results.length > 0 ? (
        <DisplayResult results={results} />
      ) : (
        <p>Loading..</p>
      )}
    </>
  );
};

export default GenerateResult;
