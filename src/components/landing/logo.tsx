import Image from "next/image";

import { cn } from "@/lib/utils";

const logos = {
  header: {
    src: "/images/logo-mark.png",
    alt: "purplelens",
    width: 68,
    height: 51,
    wordmark: "purplelens",
  },
  footer: {
    src: "/images/logo-footer.png",
    alt: "purplelens",
    width: 225,
    height: 51,
    wordmark: null,
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
      className={cn("inline-flex h-9 items-center gap-2.5", className)}
    >
      {logo.wordmark ? (
        <>
          <Image
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className="h-7 w-auto"
            priority
            aria-hidden
          />
          <span className="hidden text-[15px] font-medium tracking-tight text-foreground min-[380px]:inline">
            {logo.wordmark}
          </span>
        </>
      ) : (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width}
          height={logo.height}
          className="h-8 w-auto max-w-[min(100%,14rem)]"
        />
      )}
    </a>
  );
}
