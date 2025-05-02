import React from "react";
import profile from "/profile-new.png";
import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-[90vh] bg-[#f2f2f2] flex items-center">
        <div className="container mx-auto xl:px-36">
          <div className="flex items-center justify-between">
            <div>
              <Reveal>
                <h1 className="text-black text-[8rem] font-bold leading-[0.9em]">
                  Software <br />
                  Engineer <br />& AI Driver
                </h1>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mt-7 text-xl">
                  A place to share, write, and have fun!
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <img
                src={profile}
                alt="Prio Pambudi"
                className="rounded-2xl w-[20rem]"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
