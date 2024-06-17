import { projects } from '@/data';
import React from 'react';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa6';
import { CardBody, CardContainer, CardItem } from './ui/3dCard';
import Image from 'next/image';
import Link from 'next/link';

const RecentProjects = () => {
  return (
    <section id="projects" className="py-12">
      <h1 className="heading">
        {' '}
        A small selection of <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center py-4 gap-x-10 gap-y-10 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[30rem] h-[30rem] lg:min-h-[33rem] flex items-center justify-center sm:w-[500px] w-[100vw]"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={img}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                          style={{ transform: `translateX(-${5 * index * 2}px)` }}
                        >
                          <img src={icon} alt={icon} className="p-2" />
                        </div>
                      ))}
                    </div>
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={link}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Live site
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;

{
  /* <PinContainer title={link} href={link}>
    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
        <img src="/bg.png" alt="bg-img" />
      </div>
      <img src={img} alt={title} className="z-10 absolute bottom-0" />
    </div>
    <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">{title}</h1>
    <p className="text-sm lg:text-base font-light lg:font-normal line-clamp-2 my-2">{des}</p>

    <div className="flex items-center justify-between mt-7 mb-3">
      <div className="flex items-center">
        {iconLists.map((icon, index) => (
          <div
            key={icon}
            className="border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
            style={{ transform: `translateX(-${5 * index * 2}px)` }}
          >
            <img src={icon} alt={icon} className="p-2" />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <p className="flex lg:text-base md:text-xs text-sm text-purple">Check Live Site</p>
        <FaLocationArrow className="ms-3" color="#CBACF9" />
      </div>
    </div>
  </PinContainer> */
}
