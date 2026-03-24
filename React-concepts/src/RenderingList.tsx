import React from "react";

type product = {
  id: number;
  title: string;
  isFruit: boolean;
};
const products: product[] = [
  { title: "cup", isFruit: true, id: 1 },
  { title: "Pencil", isFruit: false, id: 2 },
  { title: "Pen", isFruit: false, id: 3 },
];

const RenderingList = () => {
  return (
    <ul>
      {products.map((items) => (
        <li
          key={items.id}
          style={{
            color: items.isFruit ? "magenta" : "darkgreen",
          }}
        >
          {items.title}
        </li>
      ))}
    </ul>
  );
};

export default RenderingList;
