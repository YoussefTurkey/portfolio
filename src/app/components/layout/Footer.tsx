'use client'
// importing React Components
import dynamic from "next/dynamic";
const Logo = dynamic(() => import("@/app/components/ui/Logo"));
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#1d1d1d] py-10 my-5 container mx-auto flex flex-col justify-center items-center rounded-xl w-[80%] md:w-[65%] lg:w-[75%] xl:w-[60%]">
      <Logo />
      <p className="text-white pt-5 text-center text-[8px] md:text-sm">
        {language === "en" ? (
          <span>
            2025 © YouTurkey11 -UI by M.Almasry- | All rights Reserved.
          </span>
        ) : (
          <span>
            2025 © YouTurkey11 التصميم بواسطة محمد المصري | كل الحقوق محفوظة.
          </span>
        )}
      </p>
    </footer>
  );
};

export default Footer;
