import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormInput: React.FC = () => {
  interface Todo {
    id: number;
    title: string;
    time: number;
    completed: boolean;
  }

  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      time: Date.now(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");

    toast.success("Your to-do has been created!");

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="light"
      />

      <div className="flex items-center">
        <div className="mr-auto">
          <h1 className="text-indigo-600 font-bold text-2xl capitalize font-rubik text-center">
            My to-do app
          </h1>
        </div>

        <div>
          <button
            onClick={() => setOpen(!open)}
            className="w-fit px-2 py-1.5 rounded-md focus:ring-offset-1 duration-300 ease-in hover:ring-offset-1 bg-indigo-600 ring-1 ring-indigo-600 text-white outline-none font-rubik"
          >
            {open ? "Close form" : "Open form"}
          </button>
        </div>
      </div>

      {open && (
        <form onSubmit={addTodo} className="flex flex-col gap-y-3 mt-5">
          <div>
            <label htmlFor="title" className="text-gray-900 font-rubik">
              To-do Title
            </label>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              className="w-full box-border px-2 py-1.5 ring-1 rounded-md ring-gray-300 bg-white outline-none duration-300 ease-in focus:ring-indigo-600 font-rubik"
              required
            />
          </div>

          {/* <div>
            <label htmlFor="desc" className="text-gray-900 font-rubik">
              To-do Description
            </label>
            <textarea
              id="desc"
              className="w-full box-border px-2 py-1.5 rounded-md ring-1 ring-gray-300 bg-white outline-none duration-300 ease-in focus:ring-indigo-600"
              rows={3}
            ></textarea>
          </div> */}

          <div>
            <button className="w-full px-2 py-1.5 rounded-md focus:ring-offset-1 duration-300 ease-in hover:ring-offset-1 bg-indigo-600 ring-1 ring-indigo-600 text-white outline-none font-rubik">
              Create new to-do
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default FormInput;
