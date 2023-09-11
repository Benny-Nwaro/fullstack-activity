import { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

import "./App.css";

function App() {
  return (
    <>
      {" "}
      <h1 className="text-teal-700/75 text-6xl pt-12 text-center">
        My Todo List
      </h1>
      <div className="mt-20 border-4 border-teal-700 w-100 h-auto rounded-md pr-5 pl-5">
        <InputTodo></InputTodo>
        <ListTodo></ListTodo>
      </div>{" "}
    </>
  );
}

export default App;
