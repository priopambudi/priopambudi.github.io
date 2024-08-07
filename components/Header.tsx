import Image from "next/image";
import React from "react";

import me from "@/public/me.jpg";

const Header = () => {
  return (
    <header
      id="hero"
      className="flex flex-col-reverse md:flex-row justify-between w-full items-center gap-4"
    >
      <div className="header-desc">
        <h1 className="font-bold w-full text-center md:text-left text-3xl sm:text-5xl xl:text-6xl inline-block tracking-tight mb-4">
          Hello, I`m Rio 🙌
        </h1>
        <p className="inline-block text-xl max-w-[550px] w-full text-center md:text-left">
          Software Engineer specialized in Frontend Development. I also love to
          explore new things outside of Frontend. Active make video content on{" "}
          <a href="#" className="font-semibold underline">
            my instagram.
          </a>
        </p>
      </div>
      <div className="header-img">
        <div className="img-wrapper flex items-center justify-center shrink-0 overflow-hidden size-32 rounded-full">
          <Image src={me} alt="Prio Pambudi" className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
