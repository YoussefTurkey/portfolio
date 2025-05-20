"use client";
// importing React components
import Image from "next/image";
// importing Theme file
import { useTheme } from "@/app/components/theme/ThemeProvider";

export default function Logo() {
  const { theme } = useTheme();
  const logoSrc =
    theme === "dark" ? "/images/persona-dark.webp" : "/images/persona.webp";

  return (
    <Image
      src={logoSrc}
      width={500}
      height={500}
      alt="Youssef Turkey"
      loading="lazy"
      className="m-auto w-70 md:w-100"
    />
  );
}
