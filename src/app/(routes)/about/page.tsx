import Wrapper from "@/components/Wrapper";

import { meta } from "@/app/sitemap";
import type { Metadata } from "next";

const header = {
  title: "About Us - Nanobot",
  description: "Will add description at a later time.",
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

export default function About() {
  return (
    <Wrapper>
      <main className="container py-16">
        <section className="grid gap-4">
          <h1 className="font-extrabold text-4xl tracking-[-0.06em] md:tracking-tight md:text-5xl">
            Lorem ipsum.
          </h1>
          <p className="text-white text-opacity-70">
            We're a global team of crypto enthusiasts with a passion to create.
          </p>
        </section>
        <section className="mt-8 hidden gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            aspernatur odio ducimus exercitationem ullam omnis sed, voluptates
            dolorem saepe consequuntur optio sunt aliquam in accusamus aliquid
            voluptas minus libero modi?
          </p>
        </section>
      </main>
    </Wrapper>
  );
}

function QuotationMark({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

function QuotationNew({
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

/*
          <h1 className="font-extrabold text-4xl tracking-tighter text-balance md:tracking-tight md:text-5xl">
            <Quotation>“</Quotation>I wanted to share crypto with friends in fun
            ways and enable others to do the same.<Quotation>”</Quotation>
          </h1>
          <img
            alt="Placeholder"
            className="rounded-lg hidden"
            src="https://picsum.photos/1600/900"
          />
*/
