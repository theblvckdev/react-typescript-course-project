import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneOutline, IoTrashBinOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoContainer: React.FC = () => {
  interface Todo {
    id: number;
    title: string;
    time: number;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error("Error parsing todos from localStorage:", error);
      }
    }
  }, []);

  const handleDelete = (time: number) => {
    const updatedTodos = todos.filter((todo) => todo.time !== time);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    toast.info("Your to-do has been deleted!");
  };

  const handleMarkDone = (time: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.time === time) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("Your to-do has been marked as done!");
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
      <div
        className={`${
          todos.length === 0 ? null : "mt-5"
        } flex flex-col gap-y-3`}
      >
        {todos.map((todo) => (
          <div
            key={todo.time}
            className={
              todo.completed
                ? "p-3 bg-lime-100 font-rubik ring-1 ring-lime-300 rounded-md"
                : "p-3 bg-gray-50 font-rubik ring-1 ring-gray-300 rounded-md"
            }
          >
            <div className="flex items-center">
              <div className="mr-auto">
                <h1 className="text-gray-900 text-xl font-semibold">
                  {todo.title}
                </h1>
                <div className="text-gray-400 text-sm">
                  Created: {new Date(todo.time).toLocaleString()}
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => handleDelete(todo.time)}
                  className="outline-none text-red-500 text-base cursor-pointer p-1.5 ring-1 ring-red-500 rounded-md"
                >
                  <IoTrashBinOutline />
                </button>

                <button
                  onClick={() => handleMarkDone(todo.time)}
                  className="outline-none text-green-500 text-base cursor-pointer p-1.5 ring-1 ring-green-500 rounded-md"
                >
                  <IoCheckmarkDoneOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoContainer;
