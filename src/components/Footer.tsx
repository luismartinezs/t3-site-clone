import Link from "next/link";
import { IoLogoVercel } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="container mx-auto flex items-center justify-center gap-4 bg-transparent px-4 py-14">
      <Link
        className="flex flex-row bg-black"
        href="https://vercel.com/?utm_source=t3-oss&utm_campaign=oss"
        target="_blank"
      >
        <div className="flex items-center border-r border-white/50 px-3 py-3">
          <IoLogoVercel size={18} />
        </div>
        <div className="flex items-center px-3 text-sm">
          Powered by&nbsp;<span className="font-semibold">Vercel</span>
        </div>
      </Link>
    </footer>
  );
}
