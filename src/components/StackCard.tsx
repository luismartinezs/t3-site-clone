import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Paragraph } from "~/components/Paragraph";

export interface StackItem {
  logo: string;
  title: string;
  description: string;
  href: string;
}

export function StackCard(props: StackItem) {
  const router = useRouter();

  function handleNavigate() {
    router.push(props.href).catch((err) => console.error(err));
  }

  return (
    <div
      className="group cursor-pointer overflow-hidden rounded-md border border-primary-100/30 hover:border-primary-100/50"
      onClick={() => handleNavigate()}
    >
      <div className="bg-primary-100/20 px-6 py-4 group-hover:bg-primary-100/30">
        {props.logo && (
          <Image src={props.logo} alt={props.title} width={100} height={100} />
        )}
        <Link
          className="text-lg text-primary-200"
          href={props.href}
          target="_blank"
        >
          {props.title}
        </Link>
      </div>
      <div className="p-6">
        <Paragraph>{props.description}</Paragraph>
      </div>
    </div>
  );
}
