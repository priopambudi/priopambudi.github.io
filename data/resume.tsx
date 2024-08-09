import { Icons } from "@/components/ui/icons";

export const DATA = {
  work: [
    {
      company: "Photomatics",
      href: "#",
      location: "Jakarta",
      title: "Software Engineer",
      logoUrl: "/photomatics.png",
      start: "April 2024",
      end: null,
      description: "description",
    },
    {
      company: "VCGamers",
      href: "#",
      location: "Remote",
      title: "Sr. Frontend Specialist",
      logoUrl: "/vc.jpeg",
      start: "January 2022",
      end: "March 2024",
      description: "description",
    },
    {
      company: "Wakaspace",
      href: "#",
      location: "Remote",
      title: "Frontend Developer",
      logoUrl: "/wakaspace.jpg",
      start: "Oct 2021",
      end: "Dec 2021",
      description: "description",
    },
  ],
  education: [
    {
      school: "Pacmann",
      href: "https://pacmann.io/",
      degree: "AI Engineer Student",
      logoUrl: "/pacmann.jpeg",
      start: "2024",
      end: null,
    },
    {
      school: "Diponegoro University",
      href: "https://www.undip.ac.id/",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/undip.jpeg",
      start: "2017",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Photomatics (Dashboard)",
      href: "https://photomatics.id",
      dates: "April 2024 - Present",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Laravel",
        "Nginx",
        "MySQL",
        "Bootstrap",
        "Flutter",
        "Hive",
        "Ubuntu",
      ],
      links: [
        {
          type: "Website",
          href: "https://photomatics.id",
          icon: <Icons.globe />,
        },
      ],
      image: "/pht.png",
      video: "",
    },
    {
      title: "VCGamers (Marketplace)",
      href: "https://vcgamers.com",
      dates: "Jan 2022 - March 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store),",
      technologies: [
        "Next.js",
        "Typescript",
        "Recoil",
        "TailwindCSS",
        "Nuxt",
        "VueX",
      ],
      links: [
        {
          type: "Website",
          href: "https://vcgamers.com",
          icon: <Icons.globe />,
        },
      ],
      image: "/vc.png",
      video: "",
    },
  ],
  themes: [
    {
      title: "Default",
      colors: ["255 255 255", "255 130 37", "180 62 63", "23 59 69"],
    },
    {
      title: "Dark",
      colors: ["240 240 240", "67 66 66", "34 34 34", "34 163 158"],
    },
    {
      title: "Retro",
      colors: ["1 32 79", "2 131 145", "230 220 172", "238 174 110"],
    },
    {
      title: "Playfull",
      colors: ["239 131 67", "241 223 198", "23 155 174", "65 88 166"],
    },
  ],
} as const;
