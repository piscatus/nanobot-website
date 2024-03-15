import Link from "next/link";
import React from "react";

export default function LinkButton({
  href,
  classname,
  children,
}: {
  href: string;
  classname: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-4 rounded-lg flex justify-center items-center text-black font-semibold transition duration-300 active:scale-95 ${classname}`}
    >
      {children}
    </Link>
  );
}
