"use client";
// importing React components
import Link from "next/link";
import { ReactNode } from "react";
// importing React-icons
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
// using Translation
import { useLanguage } from "@/app/components/lang/LanguageProvider";

interface ButtonsProps {
  children: ReactNode;
}

const Buttons = ({ children }: ButtonsProps) => {
  const { language } = useLanguage();

  return (
    <div>
      <Link
        href={"/"}
        role="button"
        className={`border-1 border-[hsl(var(--secondary))] hover:text-white ${
          language === "en"
            ? "hover:shadow-[inset_13rem_0_0_0]"
            : "hover:shadow-[inset_-13rem_0_0_0]"
        } hover:shadow-[hsl(var(--secondary))] duration-[400ms,700ms] transition-[color,box-shadow] flex items-center w-fit rounded-full`}
      >
        <span className="text-2xl py-3 px-6">{children}</span>
        <span className="text-2xl rounded-full bg-[hsl(var(--secondary))] p-4 text-white">
          {language === "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
        </span>
      </Link>
    </div>
  );
};

export default Buttons;
