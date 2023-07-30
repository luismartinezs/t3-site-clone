import { Paragraph } from "~/components/Paragraph";
import { StackCard, type StackItem } from "~/components/StackCard";
import { SiNextdotjs, SiPrisma, SiTrpc } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

const stack: StackItem[] = [
  {
    logo: <SiNextdotjs size={30} />,
    title: "Next.js",
    description: `Next.js offers a lightly opinionated, heavily optimized approach to creating applications using React. It's the industry standard and we're proud to build on top of it :)`,
    href: "https://nextjs.org/",
  },
  {
    logo: <SiPrisma size={30} />,
    title: "Prisma",
    description: `Prisma is the best way to work with databases in TypeScript. It provides a simple, type-safe API to query your database, and it can be used with most SQL dialects (and Mongo too!).`,
    href: "https://www.prisma.io/",
  },
  {
    logo: <BiLogoTypescript size={30} />,
    title: "TypeScript",
    description: `We firmly believe TypeScript will help you be a better web developer. Whether you're new to JS or a seasoned pro, the "strictness" of TypeScript leads to smoother building.`,
    href: "https://www.typescriptlang.org/",
  },
  {
    logo: <BiLogoTailwindCss size={30} />,
    title: "Tailwind CSS",
    description: `Tailwind CSS is a utility-first CSS framework that helps you build beautiful, responsive designs without any extra configuration. It’s built with utility-first principles, and is completely customizable and extendable.`,
    href: "https://tailwindcss.com/",
  },
  {
    logo: <SiTrpc size={30} />,
    title: "tRPC",
    description: `If your frontend and backend are TypeScript, it's really hard to beat the DX of tRPC. Kinda like GraphQL but without the work - seriously this lib is magic.`,
    href: "https://trpc.io/",
  },
  {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
    title: "NextAuth.js",
    description: `When you need flexible, secure, and scalable auth, NextAuth.js is top notch. It ties into your existing database and provides a simple API to manage users and sessions.`,
    href: "https://next-auth.js.org/",
  },
];

export function StackSection() {
  return (
    <section id="stack" className="mx-auto my-20 max-w-7xl md:text-center">
      <h2>
        <div className="text-xl font-semibold text-primary-300 md:text-2xl">
          The best of the full stack TypeScript ecosystem...
        </div>
        <div className="mt-4 text-3xl font-bold md:text-5xl">
          ...but ONLY the parts you need
        </div>
      </h2>
      <div className="flex w-full justify-start text-center md:justify-center">
        <Paragraph className="mr-0 mt-4 text-lg">
          Take what you want and nothing more!
        </Paragraph>
      </div>
      <ul className="mt-8 grid grid-cols-1 place-items-stretch gap-10 text-left md:grid-cols-2 md:gap-x-6 lg:grid-cols-3">
        {stack.map((item) => (
          <li key={item.href} className="h-full">
            <StackCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
