import React from "react";

type ButtonProps = {
  value: number;
  onClick: (val: number) => void;
};

const MyButton = ({ value, onClick }: ButtonProps) => {
  return <button onClick={() => onClick(value)}>{value}</button>;
};

export default MyButton;
