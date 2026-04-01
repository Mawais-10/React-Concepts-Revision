import React, { useState } from "react";

function todoslist() {
  const initialtodos = [];

  for (let i = 0; i < 10; i++) {
    initialtodos.push({
      id: i,
      text: `Todo ${i}`,
    });
  }
  return initialtodos;
}
const Initial_function = () => {
  const [todos, setTodos] = useState(todoslist);
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(w) => {
          setText(w.target.value);
        }}
      />
      <button
        onClick={() => {
          setText("");
          setTodos([ { id: todos.length, text },...todos]);
          setText("");
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default Initial_function;
