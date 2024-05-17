import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  interface Todo {
    id: number;
    title: string;
    date: number;
    completed: boolean;
  }

  const [todoTitle, setTodoTitle] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const d = new Date();
  const time = d.getTime();

  const createNewTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: Date.now(),
      title: todoTitle,
      date: time,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    // save todo in localstorage
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    setTodoTitle("");

    toast.success("Your to-do has been created!");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
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

      <section className="h-[40vh] w-full bg-indigo-600 flex items-center justify-center flex-col lg:px-0 md:px-5 px-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl text-white font-bold font-rubik">
          My To-do App
        </h1>

        <form
          onSubmit={createNewTodo}
          className="mt-3 flex md:flex-row flex-col gap-3 items-center"
        >
          <div className="w-full shadow bg-white rounded-md">
            <input
              className="md:w-[400px] w-[350px] box-border bg-transparent outline-none p-2 font-rubik"
              required
              onChange={(e) => setTodoTitle(e.target.value)}
              placeholder="Todo title"
            />
          </div>

          <button className="p-2 duration-300 ease-in hover:bg-gray-100 bg-white text-indigo-600 outline-none font-rubik w-full rounded-md shadow">
            Add todo
          </button>
        </form>
      </section>
    </>
  );
};

export default Banner;
