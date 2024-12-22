// import React from "react";

export const Header = () => {
  return (
    <header className="w-full items-center justify-center py-5 pt-10">
      <div className="w-full flex items-center justify-between">
        <div className="">
          <h3 className="text-3xl font-bold">
            Collins<span className="text-4xl">.</span>
          </h3>
        </div>

        <div className="flex items-center text-xl">
          {/* <a className="hover:text-gray-500" href="">
            About
          </a>
          <a className="mx-5 hover:text-gray-500" href="">
            Portfolio
          </a>
          <a className="hover:text-gray-500" href="">
            Contact
          </a> */}
        </div>
      </div>
    </header>
  );
};
