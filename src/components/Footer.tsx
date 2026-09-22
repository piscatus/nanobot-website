import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container text-sm">
      <div className="border-t border-white border-opacity-10 flex justify-between py-6">
        <div className="grid gap-2">
          <span className="flex items-end">
            © 2023 - 2026 Nanobot - All rights reserved.
          </span>
          <div className="text-gray flex gap-3">
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`transition-colors duration-300 nontouch:hover:text-primary ${className}`}
    >
      {children}
    </Link>
  );
}
