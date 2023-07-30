import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { FiCopy } from "react-icons/fi";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-20">
      <h1 className="text-center text-4xl font-bold">
        The best way to start a{" "}
        <span className="text-[#33BBFF]">full-stack,</span>{" "}
        <span className="text-[#6666FF]">typesafe</span>{" "}
        <span className="text-[#BB33FF]">Next.js</span> app
      </h1>
      <div className="flex gap-4">
        <Link
          href="#"
          className="flex items-center gap-1 rounded-full bg-primary-50 py-2 pl-4 pr-2 font-semibold text-primary-900 hover:bg-primary-200"
        >
          Documentation
          <MdOutlineKeyboardArrowRight size={25} />
        </Link>
        <Link
          href="https://github.com/t3-oss/create-t3-app"
          target="_blank"
          className="flex items-center gap-1 rounded-full bg-primary-50/10 px-4 py-2 font-semibold hover:bg-primary-50/30"
        >
          GitHub
          <BiLinkExternal size={16} />
        </Link>
      </div>
      <div className="flex cursor-pointer items-center gap-2 rounded-lg border border-primary-100/30 bg-primary-100/10 p-3 hover:bg-primary-100/20">
        <pre>npm create t3-app@latest</pre>
        <FiCopy size={24} />
      </div>
    </section>
  );
}
