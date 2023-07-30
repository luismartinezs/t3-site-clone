import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import { T3Logo } from "~/components/T3Logo";

export function Header() {
  return (
    <header className="container flex items-center gap-4 bg-transparent px-4 py-4">
      <div className="w-12">
        <T3Logo />
      </div>
      <div className="ml-auto">
        <Link href="https://github.com/t3-oss/create-t3-app" target="_blank">
          <AiFillGithub size={35} />
        </Link>
      </div>
      <FiMenu size={37} />
    </header>
  );
}
