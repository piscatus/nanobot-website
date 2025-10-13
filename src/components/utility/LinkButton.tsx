import Link from "next/link";
import React from "react";

export default function LinkButton({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`rounded-lg flex justify-center items-center text-black font-semibold transition duration-300 active:scale-95 ${className}`}
    >
      {children}
    </Link>
  );
}
