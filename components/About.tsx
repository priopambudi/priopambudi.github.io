import React from "react";
import Markdown from "react-markdown";

const About = () => {
  return (
    <section id="about">
      <h2 className="text-xl font-bold">About</h2>
      <Markdown>
        Specialized in Frontend Development. I use JavaScript every day in my
        projects and have even solved challenges on Exercism and LeetCode. I
        have 3+ years of hands-on experience in creating captivating web
        applications. Sometimes, I also play around with backend development and
        explore various aspects of web development.
      </Markdown>
    </section>
  );
};

export default About;
