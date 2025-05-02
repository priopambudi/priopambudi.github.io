import React from "react";

const Navbar = () => {
  return (
    <nav id="nav">
      <div className="container mx-auto xl:px-48">
        <div className="wrapper w-full flex items-center justify-between">
          <h1 className="font-bold text-2xl">RIO</h1>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#" className="py-5 px-3 text-center inline-block">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="py-5 px-3 text-center inline-block">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="py-5 px-3 text-center inline-block">
                Blogs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
