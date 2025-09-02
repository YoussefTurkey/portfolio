"use client";
// importing React components
import Image from "next/image";
import Link from "next/link";
// importing Theme file
import { useTheme } from "@/app/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "dark" ? "/images/svgs/logo-dark.svg" : "/images/svgs/logo.svg";

  return (
    <Link href={'/'} prefetch={false}>
      <Image
        src={logoSrc}
        width={150}
        height={150}
        alt="YouTurkey11"
        loading="lazy"
        className="w-20 md:w-35"
      />
    </Link>
  );
}
