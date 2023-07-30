import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { GithubStarsLabel } from "~/components/GithubStarsLabel";
import { SearchBar } from "~/components/SearchBar";

import { T3Logo } from "~/components/T3Logo";

export function Header() {
  return (
    <header className="mx-auto flex max-w-6xl items-center gap-4 bg-transparent px-4 py-4">
      <Link className="w-12" href="/">
        <T3Logo />
      </Link>
      <nav className="ml-8 hidden md:block">
        <ul className="flex gap-4">
          <li>
            <Link href="#">Docs</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
        </ul>
      </nav>
      <Link
        href="https://github.com/t3-oss/create-t3-app"
        target="_blank"
        className="ml-auto flex gap-3"
      >
        <div className="hidden md:block">
          <GithubStarsLabel />
        </div>
        <AiFillGithub size={35} />
      </Link>
      <FiMenu className="md:hidden" size={37} />
      <div className="hidden md:block">
        <SearchBar />
      </div>
    </header>
  );
}
