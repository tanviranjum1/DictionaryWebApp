import React from "react";

const NotFound = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", textAlign: "center" }}
    >
      <span role="img" aria-label="Not Found" style={{ fontSize: "32px" }}>
        &#x1F6AB;{" "}
      </span>
      <h1>No Definitions Found</h1>
      <p>
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
