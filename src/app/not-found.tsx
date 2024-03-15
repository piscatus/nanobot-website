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
      <main>
        <section className="container">
          <div>NotFound</div>
        </section>
      </main>
    </Wrapper>
  );
}
