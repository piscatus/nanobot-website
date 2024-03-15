"use client";

import Icon from "@/components/pages/features/Icon";
import { motion } from "framer-motion";

export default function Card({
  command,
  title,
  className = "",
  id = 0,
  children,
}: {
  command: string;
  title: string;
  className?: string;
  id?: number;
  children: React.ReactNode;
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: id / 10 + 0.3,
      }}
      className={`grid gap-2 text-white text-opacity-70 ${className}`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`rounded-lg aspect-square w-12 grid place-content-center ${color}`}
        >
          <Icon name={command} />
        </div>
        <h2 className="text-white font-extrabold text-xl">{title}</h2>
      </div>
      <p>{children}</p>
      <code className="border border-white border-opacity-10 h-7 px-2 rounded-lg text-sm flex items-center w-fit">
        {command}
      </code>
    </motion.div>
  );
}
