import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
  return (
    <div className="flex w-80 items-center rounded-lg border border-primary-100/20 bg-primary-300/10 px-3 py-2 hover:border-primary-400/60">
      <AiOutlineSearch size={25} />
      <span className="text-sm">Search</span>
      <div className="ml-auto rounded border border-white px-[0.3rem] text-sm">
        /
      </div>
    </div>
  );
}
