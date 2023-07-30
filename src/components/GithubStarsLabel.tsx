import { AiFillStar } from "react-icons/ai";

export function GithubStarsLabel() {
  return (
    <div className="relative flex items-center gap-1 rounded-lg border border-primary-100/20 bg-primary-300/10 px-2 py-1 hover:border-primary-400/60">
      <AiFillStar size={20} />
      19K
      <div className="absolute -right-2 h-0 w-0 border-b-[7px] border-l-[7.5px] border-t-[7px] border-b-transparent border-l-primary-100/30 border-t-transparent"></div>
    </div>
  );
}
