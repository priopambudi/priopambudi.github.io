import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto flex flex-col min-h-[100dvh] space-y-10">
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
      <Projects />
    </main>
  );
}
