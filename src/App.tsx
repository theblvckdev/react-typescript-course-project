import React from "react";
import FormInput from "./components/form_input";
import TodoContainer from "./components/todo_container";

const App = () => {
  return (
    <>
      <main className="bg-gray-100 h-screen w-screen block py-10">
        <div className="max-w-lg md:mx-auto bg-white w-full md:p-10 p-5 mx-3 rounded-md shadow-md">
          <FormInput />

          <TodoContainer />
        </div>
      </main>
    </>
  );
};

export default App;
