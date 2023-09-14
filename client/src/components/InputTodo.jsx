import React, { useState } from "react";

export default function InputTodo() {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form className="w-full" onSubmit={onSubmitForm}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Todo"
            aria-label="Your Todo"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded pr-5"
            type="button"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
