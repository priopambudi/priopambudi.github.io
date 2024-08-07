import Header from "@/components/Header";
import About from "@/components/About";
import Work from "@/components/Work";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
    </main>
  );
}
