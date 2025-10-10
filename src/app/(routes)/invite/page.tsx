import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Nanobot - Invite Nanobot to your Discord Server!",
  description: "Invite Nanobot to your Discord Server! [Temp]",
};

export default function Invite() {
  redirect(
    "https://discord.com/oauth2/authorize?client_id=967844118715854908&permissions=8&scope=applications.commands%20bot"
  );
}
