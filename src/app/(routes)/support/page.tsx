import Wrapper from "@/components/Wrapper";
import Link from "next/link";

import { meta } from "@/app/sitemap";
import type { Metadata } from "next";

const header = {
  title: "Support - Nanobot",
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

export default function Support() {
  return (
    <Wrapper>
      <main className="container">
        <section className="py-16">
          <h1 className="font-extrabold text-4xl tracking-tighter leading-10 md:tracking-tight md:text-5xl">
            Support that{" "}
            <span className="text-primary animate-color">
              doesn't take ages
            </span>
            .
          </h1>
        </section>
      </main>
    </Wrapper>
  );
}

/*
        <section className="min-h-screen grid items-center md:-mt-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <h1 className="font-extrabold text-4xl tracking-tighter md:tracking-tight md:text-5xl">
              Asking for help shouldn't take days or weeks.
            </h1>
          </div>
          <div className="">Content [WIP]</div>
        </section>
*/
