import React from "react";
import { Icons } from "./ui/icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DATA } from "@/data/resume";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-background/30 z-40">
      <div className="px-6 max-w-2xl mx-auto py-5 flex justify-between items-center backdrop-blur">
        <h2 className="font-bold text-2xl">rio.</h2>
        <Dialog>
          <DialogTrigger>🎨</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center mb-2">
                Choose your favourite theme
              </DialogTitle>
              <DialogDescription>
                <div className="flex items-center justify-center gap-4">
                  {DATA.themes.map((theme, indx) => (
                    <div key={indx} className="w-max">
                      <p className="text-center mb-3">{theme.title}</p>
                      <div className="border w-max h-max flex p-4 rounded-xl items-center justify-center cursor-pointer -space-x-2">
                        {theme.colors.map((clr, indx) => (
                          <div
                            key={indx}
                            className={`bg-[#${clr}] w-6 h-6 rounded-full`}
                            // style={{
                            //   transform: `translateX(-${2 * indx * 2}px)`,
                            // }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navbar;
