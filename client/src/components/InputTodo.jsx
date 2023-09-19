import React, { useState } from "react";
import EditTodo from "./EditTodo";

export default function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center pt-20 text-8xl text-orange-950 font-extrabold">
        {" "}
        My Todo List
      </h1>
      <form
        className="pt-20 ml-44 pl-44 mr-44 pr-44 mb-5  "
        onSubmit={onSubmitForm}
      >
        <div className="flex w-full items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            aria-label="Full name"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={onSubmitForm}
            type="button"
          >
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
}
