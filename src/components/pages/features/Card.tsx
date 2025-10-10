"use client";

import Icon from "@/components/pages/features/Icon";
import { motion } from "framer-motion";

export default function Card({
  command,
  title,
  className = "",
  id = 0,
  children,
  pfp,
  href,
}: {
  command: string;
  title: React.ReactNode;
  className?: string;
  id?: number;
  children: React.ReactNode;
  pfp?: string;
  href?: string;
}) {
  let color;
  switch (id % 3) {
    case -1:
      color = "animate-colorbg";
      break;
    case 0:
      color = "bg-primary";
      break;
    case 1:
      color = "bg-secondary";
      break;
    default:
      color = "bg-tertiary";
  }

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: id / 40 + 0.05,
        duration: 0.18,
        type: "spring",
        stiffness: 320,
        damping: 28,
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
        backgroundColor: "rgba(80,180,255,0.08)",
      }}
      whileTap={{ scale: 1.03 }}
      className={`grid gap-2 text-white text-opacity-70 transition-all duration-200 rounded-xl ${
        href ? "cursor-pointer" : ""
      } ${className}`}
      style={{
        willChange: "transform, box-shadow, background-color",
        padding: "1.5rem",
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className={`rounded-lg aspect-square w-12 grid place-content-center overflow-hidden ${color}`}
        >
          {pfp ? (
            <img
              src={pfp}
              alt={title + " profile"}
              className="w-full h-full object-cover"
            />
          ) : (
            <Icon name={command} />
          )}
        </div>
        <h2 className="text-white font-extrabold text-xl flex items-center">
          {title}
        </h2>
      </div>
      <p>{children}</p>
      <code className="border border-white border-opacity-10 h-7 px-2 rounded-lg text-sm flex items-center w-fit">
        {command}
      </code>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        {content}
      </a>
    );
  }
  return content;
}
