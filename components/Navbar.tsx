import React from "react";
import { Icons } from "./ui/icons";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-background/30 z-40">
      <div className="px-6 max-w-2xl mx-auto py-5 flex justify-between items-center backdrop-blur">
        <h2 className="font-bold text-2xl">rio.</h2>
        <button>🎨</button>
      </div>

      {/* <div
        id="modal"
        className="h-screen fixed top-0 right-0 bottom-0 left-0 bg-background/30 backdrop-blur z-50 flex items-center justify-center"
      >
        <div className="max-w-3xl bg-background/80 p-5 rounded-lg border">
          <p className="text-primary">Choose your favourite theme</p>
          <div className="flex items-center gap-3 mt-5 justify-center">
            <button className="p-4 rounded-md border flex flex-col items-center gap-2 min-w-20 bg-background hover:bg-background">
              <p className="text-sm">Light</p>
              <Icons.sun />
            </button>
            <button className="p-4 rounded-md border flex flex-col items-center gap-2  min-w-20">
              <p className="text-sm">Dark</p>
              <Icons.moon />
            </button>
          </div>
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
