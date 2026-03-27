import React from "react";

const Hook = () => {
  const [string, setstring] = React.useState("Hello");
  return (
    <div>
      <input
        value={string}
        onChange={(e) => {
          setstring(e.target.value);
        }}
      />

      {string}
      <button
        onClick={() => {
          setstring("hello");
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Hook;
