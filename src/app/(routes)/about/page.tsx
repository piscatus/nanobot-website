import Wrapper from "@/components/Wrapper";
import Card from "@/components/pages/features/Card";

import { meta } from "@/app/sitemap";
import type { Metadata } from "next";

const header = {
  title: "About Us - Nanobot",
  description:
    "Contains information about the Nanobot team and their contributions.",
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

const team = [
  {
    name: "site developer",
    refpage: "https://github.com/uxuz",
    title: "uxuz",
    description: "aka snox, made the new site design",
    pfp: "https://github.com/uxuz.png",
  },
  {
    name: "current maintainer",
    refpage: "https://github.com/piscatus",
    title: "Hermes",
    description:
      "is the maintainer of the bot and website, the one holding it all together",
    pfp: "https://github.com/piscatus.png",
  },
  {
    name: "founding developer",
    refpage: "https://github.com/tanosshi",
    title: "tanos",
    description:
      "is the developer of the base bot code, the one who started it all",
    pfp: "https://github.com/tanosshi.png",
  },
];

export default function About() {
  return (
    <Wrapper>
      <main className="container">
        <section className="min-h-screen grid place-items-center py-16 md:-mt-16">
          <div className="grid gap-12">
            <div className="grid gap-4">
              <h1 className="font-extrabold text-4xl tracking-[-0.06em] md:tracking-tight md:text-5xl">
                a small group{" "}
                <span className="text-primary animate-color">
                  that made something big
                </span>
                .
              </h1>
              <p className="text-white text-opacity-70">
                the team that wants to simplify the concept of crypto
              </p>
            </div>
            <CardSection className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" />
          </div>
        </section>
        <Spacer />
      </main>
    </Wrapper>
  );
}

function CardSection({ className }: { className: string }) {
  return (
    <section style={{ transform: "scale(1.1)" }} className={className}>
      {team.map((feature, index) => (
        <Card
          command={feature.name}
          title={
            <span className="flex items-center gap-2">
              {feature.title}
            </span>
          }
          id={index}
          key={feature.name}
          pfp={feature.pfp}
          href={feature.refpage}
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

// should be unused for now im gonna try using cards instead
function Quotation({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex gap-6 lg:gap-6 ${className}`}>
      <div className="h-full w-2 rounded-lg bg-primary"></div>
      <div>{children}</div>
    </div>
  );
}
