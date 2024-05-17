import React from "react";

const TodoContainer = () => {
  return (
    <>
      <section className="mt-5 max-w-6xl mx-auto lg:px-0 md:px-5 px-3">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold font-rubik text-gray-900 text-center">
          All added to-does
        </h1>

        <div className="md:grid lg:grid-cols-4 md:grid-cols-3 gap-5 md:mt-5 mt-3">
          <div className="bg-white shadow-md rounded-md p-3 ring-1 ring-gray-300">
            <div className="flex items-center gap-3">
              <div>
                <button className="h-[15px] w-[15px] rounded-full outline-none ring-1 ring-gray-400"></button>
              </div>

              <div>
                <h4 className="text-xl font-rubik font-semibold text-gray-900">
                  Todo Title
                </h4>

                <div className="text-gray-400 font-rubik text-sm">
                  Created: 9 minutes ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TodoContainer;
