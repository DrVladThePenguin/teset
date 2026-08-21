import Image from "next/image";

import { cn } from "@/lib/utils";

const logos = {
  header: {
    src: "/images/logo-header.png",
    alt: "AI Velocity",
    width: 225,
    height: 51,
  },
  footer: {
    src: "/images/logo-footer.png",
    alt: "purplelens",
    width: 225,
    height: 51,
  },
} as const;

export function Logo({
  className,
  variant = "header",
}: {
  className?: string;
  variant?: keyof typeof logos;
}) {
  const logo = logos[variant];

  return (
    <a
      href="/"
      aria-label="PurpleLens.ai home"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-8 w-auto"
        priority={variant === "header"}
      />
    </a>
  );
}
