import { Paragraph } from "~/components/Paragraph";
import { BsDiscord } from "react-icons/bs";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import {
  type ICommnunityCard,
  CommnunityCard,
} from "~/components/CommunityCard";

const communityCards: ICommnunityCard[] = [
  {
    title: "Discord",
    description:
      "Join our Discord server to chat with other developers and get help with your projects.",
    icon: <BsDiscord size={55} className="text-[#5562EA]" />,
    href: "https://t3.gg/discord", // replace with your server link
  },
  {
    title: "GitHub",
    description:
      "Contribute to the project by submitting issues and pull requests on our GitHub repository.",
    icon: <AiFillGithub size={65} />,
    href: "https://github.com/t3-oss/create-t3-app", // replace with your repo link
  },
  {
    title: "Twitter",
    description: "Join us on Twitter for shitposts.",
    icon: <AiOutlineTwitter size={65} className="text-[#1DA1F2]" />,
    href: "https://twitter.com/t3dotgg", // replace with your Twitter handle
  },
];

export function CommunitySection() {
  return (
    <section id="community" className="mx-auto max-w-7xl py-10 md:text-center">
      <h2 className="text-3xl font-bold md:text-5xl">Community</h2>
      <div className="flex md:justify-center">
        <Paragraph className="mt-6 md:text-xl">
          Join our community to get help, share your projects, and even
          contribute to the project!
        </Paragraph>
      </div>
      <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch">
        {communityCards.map((card) => (
          <li key={card.href} className="flex-1">
            <CommnunityCard {...card} />
          </li>
        ))}
      </ul>
    </section>
  );
}
