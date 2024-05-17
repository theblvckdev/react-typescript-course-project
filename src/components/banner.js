import React from "react";

const Banner = () => {
  return (
    <>
      <section className="h-[50vh] w-full bg-indigo-600 flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white font-bold font-rubik">
          My Todo App
        </h1>

        <form className="mt-3 flex gap-3 items-center">
          <div className="w-full shadow bg-white rounded-md">
            <input
              className="w-[400px] box-border bg-transparent outline-none p-2 font-rubik"
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
