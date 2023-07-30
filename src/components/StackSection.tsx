import { Paragraph } from "~/components/Paragraph";
import { StackCard, type StackItem } from "~/components/StackCard";

const stack: StackItem[] = [
  {
    logo: "",
    title: "Next.js",
    description: `Next.js offers a lightly opinionated, heavily optimized approach to creating applications using React. It's the industry standard and we're proud to build on top of it :)`,
    href: "https://nextjs.org/",
  },
  {
    logo: "",
    title: "Prisma",
    description: `Prisma is the best way to work with databases in TypeScript. It provides a simple, type-safe API to query your database, and it can be used with most SQL dialects (and Mongo too!).`,
    href: "https://www.prisma.io/",
  },
  {
    logo: "",
    title: "TypeScript",
    description: `We firmly believe TypeScript will help you be a better web developer. Whether you're new to JS or a seasoned pro, the "strictness" of TypeScript leads to smoother building.`,
    href: "https://www.typescriptlang.org/",
  },
  {
    logo: "",
    title: "Tailwind CSS",
    description: `Tailwind CSS is a utility-first CSS framework that helps you build beautiful, responsive designs without any extra configuration. It’s built with utility-first principles, and is completely customizable and extendable.`,
    href: "https://tailwindcss.com/",
  },
  {
    logo: "",
    title: "tRPC",
    description: `If your frontend and backend are TypeScript, it's really hard to beat the DX of tRPC. Kinda like GraphQL but without the work - seriously this lib is magic.`,
    href: "https://trpc.io/",
  },
  {
    logo: "",
    title: "NextAuth.js",
    description: `When you need flexible, secure, and scalable auth, NextAuth.js is top notch. It ties into your existing database and provides a simple API to manage users and sessions.`,
    href: "https://next-auth.js.org/",
  },
];

export function StackSection() {
  return (
    <section id="stack" className="my-14">
      <h2>
        <div className="text-xl font-semibold text-primary-300">
          The best of the full stack TypeScript ecosystem...
        </div>
        <div className="mt-4 text-3xl font-bold">
          ...but ONLY the parts you need
        </div>
      </h2>
      <Paragraph className="mt-4">
        Take what you want and nothing more!
      </Paragraph>
      <ul className="mt-8 flex flex-col gap-8">
        {stack.map((item) => (
          <li key={item.href}>
            <StackCard {...item} />
          </li>
        ))}
      </ul>
    </section>
  );
}
