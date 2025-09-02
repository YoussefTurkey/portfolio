"use client";
// importing React components
// import Image from "next/image";
// importing Theme file
// import { useTheme } from "@/app/theme/ThemeProvider";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

export default function Logo() {
  const { language } = useLanguage();

  // const { theme } = useTheme();
  // const logoSrc =
  //   theme === "dark" ? "/images/persona-dark.webp" : "/images/persona.webp";

  return (
    // <Image
    //   src={logoSrc}
    //   width={500}
    //   height={500}
    //   alt="Youssef Turkey"
    //   loading="lazy"
    //   className="m-auto w-70 md:w-100"
    // />
    <section className="my-10 flex items-center justify-center flex-col">
      <div className={`flex items-center gap-2 mb-10 ${language === 'en' ? 'md:mb-20' : 'md:mb-0'} group`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#83d65c] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#83d65c]"></span>
        </span>

        <p className="capitalize font-bold text-[#b2b2b2] group-hover:text-[hsl(var(--foreground))] transition-all z-10">
          {language === 'en' ? 'available to work' : 'مستعد للعمل'}
        </p>
      </div>

      <div className="flex items-center flex-col">
        <h1 className={`text-[60px] ${language === 'en' ? 'lg:text-[150px]' : 'lg:text-[100px]'} tracking-tight ${language === 'en' ? 'leading-5' : 'leading-20'} font-black uppercase`}>
          {language === 'en' ? 'Youssef' : 'يـــوسف'}
        </h1>
        <h2 className={`text-[60px] ${language === 'en' ? 'lg:text-[150px]' : 'lg:text-[100px]'} tracking-tight font-black uppercase bg-gradient-to-t from-[#b2b2b2] to-[hsl(var(--foreground))] bg-clip-text text-transparent`}>
          {language === 'en' ? 'Turkey' : 'تـــــركي'}
        </h2>
      </div>

      <p className={` tracking-widest font-normal uppercase text-[#b2b2b2] ${language === 'en' ? 'lg:text-5xl md:-mt-5': 'lg:text-4xl md:mt-5'}`}>
        {language === 'en' ? 'Frontend Engineer' : 'مهندس تطوير واجهات المواقع'}
      </p>
      <p className={` tracking-widest font-normal uppercase text-[#b2b2b2] ${language === 'en' ? 'lg:text-3xl md:mt-0': 'lg:text-2xl md:mt-5'}`}>
        React.js / Next.js
      </p>
    </section>
  );
}
