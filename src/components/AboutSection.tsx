import Link from "next/link";
import { Console } from "~/components/Console";
import { Paragraph } from "~/components/Paragraph";

const ConsoleCode = () => {
  return (
    <>
      <span>npm create t3-app@latest</span>
      <br />
      <div className="leading-1 translate-y-[-0.2rem] bg-gradient-to-r from-blue-400 via-green-300 to-pink-600 bg-clip-text font-mono text-[7px] text-transparent sm:text-sm md:translate-y-[-0.4rem]">
        &nbsp;&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;___&nbsp;&nbsp;&nbsp;__&nbsp;_____&nbsp;___&nbsp;&nbsp;&nbsp;_____&nbsp;____&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;___&nbsp;___&nbsp;
        <br />
        &nbsp;&nbsp;&nbsp;/&nbsp;__|&nbsp;_&nbsp;\&nbsp;__|&nbsp;/&nbsp;&nbsp;\_&nbsp;&nbsp;&nbsp;_|&nbsp;__|&nbsp;|_&nbsp;&nbsp;&nbsp;_|__&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;\&nbsp;|&nbsp;_&nbsp;\&nbsp;_&nbsp;\&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;|&nbsp;(__|&nbsp;&nbsp;&nbsp;/&nbsp;_|&nbsp;/&nbsp;/\&nbsp;\|&nbsp;|&nbsp;|&nbsp;_|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;|&nbsp;&nbsp;|_&nbsp;\&nbsp;&nbsp;/&nbsp;/\&nbsp;\|&nbsp;&nbsp;_/&nbsp;&nbsp;_/&nbsp;
        <br />
        &nbsp;&nbsp;&nbsp;\___|_|_\___|_/¯¯\_\_|&nbsp;|___|&nbsp;&nbsp;&nbsp;|_|&nbsp;|___/&nbsp;/_/¯¯\_\_|&nbsp;|_|&nbsp;&nbsp;
      </div>
      <span>
        ? What will your project be called? (my-t3-app){" "}
        <span className="text-blue-400">my-t3-app</span>
      </span>
      <br />
      <span>
        ? Will you be using JavaScript or TypeScript?{" "}
        <span className="text-blue-400">TypeScript</span>
      </span>
      <br />
      <span className="text-green-500">Good choice! Using TypeScript!</span>
      <br />
      <span>
        ? Which packages would you like to enable?{" "}
        <span className="text-blue-400">nextAuth, prisma, tailwind, trpc</span>
      </span>
      <br />
      <span>
        ? Initialize a new git repository? (Y/n){" "}
        <span className="text-blue-400">No</span>
      </span>
      <br />
      <span className="text-green-500">
        Sounds good! You can come back and run git init later.
      </span>
      <br />
      <span>
        ? Would you like us to run npm install? (Y/n){" "}
        <span className="text-blue-400">Yes</span>
      </span>
      <br />
      <span className="text-green-500">
        Alright. We&apos;ll install the dependencies for you!
      </span>
    </>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="prose-invert my-10 lg:prose-xl">
      <h2 className="text-3xl font-bold">Typesafe From The Start</h2>
      <Paragraph className="mt-8">
        We made create-t3-app to do one thing: Streamline the setup of typesafe
        Next.js apps WITHOUT compromising modularity.
      </Paragraph>
      <Paragraph className="mt-6">
        After countless projects and many years on this tech, we have lots of
        opinions and insights. We&apos;ve done our best to encode them into this
        CLI.
      </Paragraph>
      <Paragraph className="mt-6">
        This is NOT an all-inclusive template.{" "}
        <strong className="text-primary-300">
          We expect you to bring your own libraries.
        </strong>{" "}
        Check out{" "}
        <Link
          href="https://create.t3.gg/en/other-recs"
          className="text-blue-500 no-underline hover:underline"
        >
          our other recommendations
        </Link>{" "}
        for things like state management and deployment.
      </Paragraph>
      <div className="mt-8">
        <Console>
          <ConsoleCode />
        </Console>
      </div>
    </section>
  );
}
