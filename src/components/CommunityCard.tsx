import Link from "next/link";
import { Paragraph } from "~/components/Paragraph";

export interface ICommnunityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function CommnunityCard(props: ICommnunityCard) {
  return (
    <Link
      className="group flex h-full cursor-pointer flex-col items-center justify-center gap-4 overflow-hidden rounded-md border border-primary-100/30 bg-primary-300/10 px-3 py-5 text-center hover:border-primary-100/50 hover:bg-primary-300/20"
      href={props.href}
      aria-label={props.title}
    >
      {props.icon}
      <h3 className="text-xl font-extrabold">{props.title}</h3>
      <Paragraph className="text-center leading-none text-primary-100/90 sm:text-base">
        {props.description}
      </Paragraph>
    </Link>
  );
}
