import { Paragraph } from "~/components/Paragraph";

export interface ICommnunityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

export function CommnunityCard(props: ICommnunityCard) {
  return (
    <a
      className="group block flex cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-md border border-primary-100/30 bg-primary-300/10 p-5 text-center hover:border-primary-100/50 hover:bg-primary-300/20"
      href={props.href}
      aria-label={props.title}
    >
      {props.icon}
      <h3 className="text-xl font-extrabold">{props.title}</h3>
      <Paragraph className="text-center leading-none">
        {props.description}
      </Paragraph>
    </a>
  );
}
