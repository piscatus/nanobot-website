import Wrapper from "@/components/Wrapper";
import Card from "@/components/pages/features/Card";

import { meta } from "@/app/sitemap";
import type { Metadata } from "next";

const header = {
  title: "Features - Nanobot",
  description: "Get an overview of the Nanobot's features.",
  image: "/",
};

export const metadata: Metadata = {
  title: header.title,
  description: header.description,
  metadataBase: new URL(meta.domain),
  openGraph: {
    siteName: "Nanobot",
    title: header.title,
    description: header.description,
    url: meta.domain,
    type: "website",
    images: header.image,
  },
  twitter: {
    title: header.title,
    description: header.description,
    card: "summary_large_image",
    images: header.image,
  },
};

const features = [
  {
    name: "/drop",
    title: "Airdrop",
    description:
      "Leave surprise Nano drops for hundreds of users in any channel!",
  },
  {
    name: "/fish",
    title: "Fishing",
    description:
      "Go fishing for Nano sea creatures in any server with available reserves!",
  },
  {
    name: "/gift",
    title: "Gifting",
    description:
      "Give Nano to friends and family conveniently through Discord without fees!",
  },
  {
    name: "/rain",
    title: "Raining",
    description: "Spread Nano to dozens of users within any active channel!",
  },
  {
    name: "/receive",
    title: "Deposit",
    description:
      "Deposit funds into your wallet from any other address on the Nano network!",
  },
  {
    name: "/send",
    title: "Withdraw",
    description:
      "Transfer funds from your wallet to an on-chain address, any time!",
  },
];

const MiscFeatures = [
  {
    name: "/help",
    title: "Help & Documentation",
    description:
      "Documentation is built-in. Never leave Discord and get everything done within your comfort zone.",
  },
  {
    name: "/guide",
    title: "Fishing guide",
    description:
      "Read the detailed guide on how to fish for sea creatures to earn some Nano.",
  },
  {
    name: "/audit",
    title: "Audit Log for Nanobot",
    description: "Find out the overall statistics of the Nano Discord bot.",
  },
  {
    name: "/leaderboard",
    title: "Leaderboard",
    description:
      "Get an overview of the most fished creature in the Discord server.",
  },
];

export default function Features() {
  return (
    <Wrapper>
      <main className="container">
        <section className="min-h-screen grid place-items-center py-16 md:-mt-16">
          <div className="grid gap-12">
            <div className="grid gap-4">
              <h1 className="font-extrabold text-4xl tracking-[-0.06em] md:tracking-tight md:text-5xl">
                Features that{" "}
                <span className="text-primary animate-color">
                  speak for themselves
                </span>
                .
              </h1>
              <p className="text-white text-opacity-70">
                We don't need to convice you to use Nanobot, it will convice you
                by itself.
              </p>
            </div>
            <CardSection className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
        <Spacer />
        <section className="grid gap-12 py-16 md:py-32">
          <div className="grid gap-3">
            <h2 className="font-extrabold text-2xl tracking-tighter md:tracking-tight md:text-3xl">
              Configuring a Discord bot shouldn't be rocket science.
            </h2>
            <p className="text-white text-opacity-70">
              In fact, everyone should be able to set it up easily and fast,
              like the nature of Nano itself.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {MiscFeatures.map((feature, index) => (
              <Card
                className="max-w-md"
                command={feature.name}
                title={feature.title}
                id={index}
                key={feature.name}
              >
                {feature.description}
              </Card>
            ))}
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

function CardSection({ className }: { className: string }) {
  return (
    <section className={className}>
      {features.map((feature, index) => (
        <Card
          command={feature.name}
          title={feature.title}
          id={index}
          key={feature.name}
        >
          {feature.description}
        </Card>
      ))}
    </section>
  );
}

function Spacer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex border-t border-white border-opacity-10 ${className}`}
    ></div>
  );
}
