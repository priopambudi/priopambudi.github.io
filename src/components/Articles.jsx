import React from "react";
import Reveal from "./Reveal";
import data from "../data.json";

const Articles = () => {
  return (
    <section id="hero">
      <div className="container mx-auto xl:px-36 py-20">
        <Reveal>
          <h2 className="font-bold text-3xl">Latest Articles</h2>
        </Reveal>
        <div className="grid grid-cols-3 gap-6 mt-9">
          {data.articles.map((article, index) => (
            <Reveal key={article} delay={(index + 1) * 0.25} width="100%">
              <a href="#" className="w-full d-block">
                <div className="img-wrap h-[250px] overflow-hidden w-full rounded-tl-[1rem] rounded-tr-[1rem] flex">
                  <img
                    src={article.img}
                    alt="Prio Pambudi"
                    className="object-cover w-full"
                  />
                </div>
                <div className="bg-[#f2f2f2] px-6 py-6 rounded-bl-[1rem] rounded-br-[1rem]">
                  <h3 className="text-2xl font-bold mb-1 min-h-[64px] line-clamp-2 w-full max-w-full">
                    {article.title}
                  </h3>
                  <p className="text-ls mt-3 line-clamp-2 w-full max-w-full">
                    {article.description}
                  </p>
                  <p className="bg-[#f2f2f2] rounded-sm w-max text-xs mt-3">
                    {article.date}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
