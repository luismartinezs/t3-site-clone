import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-12 md:gap-5 xl:mb-32 xl:mt-16">
      <h1 className="text-center text-4xl font-bold md:text-6xl xl:text-8xl">
        <span className="whitespace-nowrap">The best way to start a</span>
        <br />
        <span className="whitespace-nowrap">
          <span className="text-[#33BBFF]">full-stack,</span>{" "}
          <span className="text-[#6666FF]">typesafe</span>{" "}
        </span>
        <br />
        <span className="whitespace-nowrap text-[#BB33FF]">Next.js</span> app
      </h1>
      <div className="flex gap-4 text-sm md:text-base">
        <Link
          href="#"
          className="flex items-center gap-1 rounded-full bg-primary-200 py-1 pl-3 pr-1 font-semibold text-primary-900 hover:bg-primary-200"
        >
          Documentation
          <MdOutlineKeyboardArrowRight size={23} />
        </Link>
        <Link
          href="https://github.com/t3-oss/create-t3-app"
          target="_blank"
          className="flex items-center gap-1 rounded-full bg-primary-100/10 px-4 py-2  font-semibold hover:bg-primary-50/30"
        >
          GitHub
          <BiLinkExternal size={15} />
        </Link>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary-100/30 bg-primary-200/10 px-3 py-2 text-sm hover:bg-primary-200/20 md:px-4 md:py-4 md:text-base xl:text-xl">
        <pre>npm create t3-app@latest</pre>
        <FiCopy size={24} />
      </div>
    </section>
  );
}
