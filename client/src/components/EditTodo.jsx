import React, { useState } from "react";
import "./modal.css";

export default function EditTodo({ todo }) {
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  const [description, setDescription] = useState(todo.description);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-transparent hover:bg-blue-500 text--700 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded"
      >
        Edit
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-center">Edit Todo</h2>
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
            ></input>
            <button onClick={toggleModal} className="float-right">
              Close
            </button>
            <button
              onClick={(e) => updateDescription(e)}
              className="float-right pr-5"
            >
              Edit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
