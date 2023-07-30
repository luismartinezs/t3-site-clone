import { AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

import { T3Logo } from "~/components/T3Logo";

export function Header() {
  return (
    <header className="container flex items-center gap-4 bg-transparent px-4 py-4">
      <div className="w-14">
        <T3Logo />
      </div>
      <div className="ml-auto">
        <AiFillGithub size={40} />
      </div>
      <FiMenu size={40} />
    </header>
  );
}
