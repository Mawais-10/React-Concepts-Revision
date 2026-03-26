import React from "react";

type sq = {
  value: string | null;
  onsqureClick: () => void;
};

// function handleClick(value: number) {
//   alert(value);
// }
const Squre = ({ value, onsqureClick }: sq) => {
  // const [value, setValue] = React.useState(null);
  return (
    <button className="square" onClick={onsqureClick}>
      {value}
    </button>
  );
};

export default Squre;
