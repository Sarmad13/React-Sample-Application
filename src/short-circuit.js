import React, { useState } from "react";
import PropTypes from "prop-types";

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);
  // const firstname = text || 'sarmad';
  // const lastname = text && 'saeed';

  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      ></button>
      <h1>{isError && <div> Error...</div>}</h1>
    </div>
  );
};

export default ShortCircuit;
