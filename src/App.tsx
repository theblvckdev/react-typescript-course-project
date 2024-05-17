import React from "react";
import Banner from "./components/banner";
import TodoContainer from "./components/todo_container";

const App = () => {
  return (
    <>
      <main className="bg-gray-100 h-screen">
        <Banner />
        <TodoContainer />
      </main>
    </>
  );
};

export default App;
