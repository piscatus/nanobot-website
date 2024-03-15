export function Document({ children }: { children: React.ReactNode }) {
  return <div className="container py-8 max-w-5xl lg:py-16">{children}</div>;
}

export function Headline({ children }: { children: React.ReactNode }) {
  return <h1 className="text-2xl font-extrabold text-center">{children}</h1>;
}

export function Subheadline({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold pb-2">{children}</h2>;
}

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="pt-6">{children}</section>;
}

export function Block({ children }: { children: React.ReactNode }) {
  return <p className="text-justify text-white text-opacity-90">{children}</p>;
}

// Default Email address, unless modified
export function Email({
  address = "nanogiveaway@outlook.com",
}: {
  address?: string;
}) {
  return (
    <a href={`mailto:${address}`} className="text-primary">
      {address}
    </a>
  );
}
