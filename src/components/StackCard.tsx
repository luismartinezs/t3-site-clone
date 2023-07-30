import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { Paragraph } from "~/components/Paragraph";

export interface StackItem {
  logo?: React.ReactNode | string;
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
      <div className="flex items-center gap-4 bg-primary-100/20 px-6 py-3 group-hover:bg-primary-100/30">
        {props.logo && typeof props.logo === "string" ? (
          <Image
            src={props.logo}
            width={30}
            height={30}
            alt={`${props.title} logo`}
          />
        ) : (
          props.logo
        )}
        <Link
          className="text-lg font-semibold text-primary-200 text-primary-300"
          href={props.href}
          target="_blank"
        >
          {props.title}
        </Link>
      </div>
      <div className="p-6">
        <Paragraph className="text-sm text-primary-100">
          {props.description}
        </Paragraph>
      </div>
    </div>
  );
}
