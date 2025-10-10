import Wrapper from "@/components/Wrapper";

import type { Metadata } from "next";

// Minimal metadata structure as it can't be indexed by webcrawlers
const header = {
  title: "Page Not Found [404] - Nanobot",
  description: "Page Not Found [404].",
};

export const metadata: Metadata = {
  title: header.title,
  description: header.description,
};

export default function NotFound() {
  return (
    <Wrapper>
      <main className="container py-16">
        <section className="grid gap-4">
          <h1 className="font-extrabold text-4xl tracking-tighter text-balance md:tracking-tight md:text-5xl">
            <Quotation>“</Quotation>404, page not found.<Quotation>”</Quotation>
          </h1>
        </section>
      </main>
    </Wrapper>
  );
}

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
