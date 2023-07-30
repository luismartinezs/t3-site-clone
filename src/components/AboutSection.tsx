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
        ? What will your project be called? (my-t3-app)&nbsp;
        <span className="text-blue-400">my-t3-app</span>
      </span>
      <br />
    </>
  );
};

export function AboutSection() {
  return (
    <section id="about" className="prose-invert my-10 lg:prose-xl">
      <h2 className="text-3xl font-bold">Typesafe From The Start</h2>
      <Paragraph className="mt-6">
        We made create-t3-app to do one thing: Streamline the setup of typesafe
        Next.js apps WITHOUT compromising modularity.
      </Paragraph>
      <Paragraph className="mt-4">
        After countless projects and many years on this tech, we have lots of
        opinions and insights. We&apos;ve done our best to encode them into this
        CLI.
      </Paragraph>
      <Paragraph className="mt-4">
        This is NOT an all-inclusive template. We expect you to bring your own
        libraries. Check out our other recommendations for things like state
        management and deployment.
      </Paragraph>
      <div className="mt-6">
        <Console>
          <ConsoleCode />
        </Console>
      </div>
    </section>
  );
}
