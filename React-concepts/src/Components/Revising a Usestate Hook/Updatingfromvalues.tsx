import React, { useState } from "react";

const Updatingfromvalues = () => {
  const [form, setform] = useState({
    name: "awaos",
    email: "awais@gmail.com",
    password: "abc",
  });
  return (
    <div>
      <form action="">
        <label>
          Name:{" "}
          <input
            value={form.name}
            onChange={(w) => {
              setform({
                ...form,
                name: w.target.value,
              });
            }}
          />
        </label>
        <label>
          email:{" "}
          <input
            value={form.email}
            onChange={(w) => {
              setform({
                ...form,
                email: w.target.value,
              });
            }}
          />
        </label>
        <label>
          password:{" "}
          <input
            value={form.password}
            onChange={(w) => {
              setform({
                ...form,
                password: w.target.value,
              });
            }}
          />
        </label>
      </form>

      <p>
        {form.name}
        {""}
        {form.email}
        {""}
        {form.password}
        {""}
      </p>
    </div>
  );
};

export default Updatingfromvalues;
