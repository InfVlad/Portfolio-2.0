import JavaScript from "~/assets/skills-icons/javascript.svg";
import TypeScript from "~/assets/skills-icons/typescript.svg";
import Python from "~/assets/skills-icons/python.svg";
import ReactJs from "~/assets/skills-icons/react.svg";
import NextJs from "~/assets/skills-icons/nextjs.svg";
import Astro from "~/assets/skills-icons/astro.svg";
import TailwindCss from "~/assets/skills-icons/tailwind.svg";
import NodeJs from "~/assets/skills-icons/node.svg";
import tRPC from "~/assets/skills-icons/trpc.svg";
import Prisma from "~/assets/skills-icons/prisma.svg";
import PostgreSQL from "~/assets/skills-icons/psql.svg";

interface Skill {
  title: string;
  image: string;
}

export const skillsList: Skill[] = [
  {
    title: "JavaScript",
    image: JavaScript.src,
  },
  {
    title: "TypeScript",
    image: TypeScript.src,
  },
  {
    title: "Python",
    image: Python.src,
  },
  {
    title: "ReactJs",
    image: ReactJs.src,
  },
  {
    title: "NextJs",
    image: NextJs.src,
  },
  {
    title: "Astro",
    image: Astro.src,
  },
  {
    title: "TailwindCss",
    image: TailwindCss.src,
  },
  {
    title: "NodeJs",
    image: NodeJs.src,
  },
  {
    title: "tRPC",
    image: tRPC.src,
  },
  {
    title: "Prisma",
    image: Prisma.src,
  },
  {
    title: "PostgreSQL",
    image: PostgreSQL.src,
  },
];
