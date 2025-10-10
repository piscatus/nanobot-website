import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Nanobot - Join the community!",
  description: "Take part in the Nanobot community on Discord!",
};

export default function Join() {
  redirect("https://discord.gg/WAJNPzxkAr");
}
