"use client";
// importing React component
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// importing Components
const Persona = dynamic(() => import("@/app/components/images/Persona"));
const Buttons = dynamic(() => import("@/app/utils/button/Buttons"));
const Title = dynamic(() => import("@/app/utils/title/Title"));
const SubTitle = dynamic(() => import("@/app/utils/title/SubTitle"));
// using Translation
import { useLanguage } from "@/app/components/lang/LanguageProvider";
// importing React-icons
import { BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";

const LandPage = () => {
  const { language } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // clients imgs
  interface TClinets {
    images: { id: number; img: string }[];
  }
  const clientsImg: TClinets = {
    images: [
      { id: 1, img: "/images/characters/man-1.webp" },
      { id: 2, img: "/images/characters/man-2.webp" },
      { id: 3, img: "/images/characters/man-3.webp" },
      { id: 4, img: "/images/characters/man-4.webp" },
      { id: 5, img: "/images/characters/man-5.webp" },
      { id: 6, img: "/images/characters/man-6.webp" },
      { id: 7, img: "/images/characters/woman-1.webp" },
      { id: 8, img: "/images/characters/woman-2.webp" },
      { id: 9, img: "/images/characters/woman-3.webp" },
    ],
  };

  // summary
  interface TSummary {
    en: string;
    ar: string;
  }
  const summary: TSummary = {
    en: `Creative and detail-oriented Frontend Developer with over 2 years of
    experience in building modern, responsive web applications.
    Proficient in JavaScript, Next.js, SCSS, and WordPress (Elementor,
    WooCommerce) as part of a versatile tech stack. Passionate about
    UI/UX and delivering tailored digital experiences that drive
    engagement and performance.`,
    ar: `مطور واجهات أمامية (Frontend Developer) مبدع ودقيق في التفاصيل، يمتلك خبرة تزيد عن سنتين في بناء تطبيقات ويب حديثة ومتجاوبة. ماهر في JavaScript وNext.js وSCSS وWordPress (بما في ذلك Elementor وWooCommerce) ضمن مجموعة تقنية متنوعة. شغوف بتجربة المستخدم وتصميم واجهات الاستخدام (UI/UX)، ويسعى لتقديم تجارب رقمية مخصصة تعزز التفاعل والأداء.`,
  };

  // social links
  interface TSocialLinks {
    lnks: {
      id: number;
      tag: React.ReactNode;
      href: string;
    }[];
  }
  const links: TSocialLinks = {
    lnks: [
      {
        id: 1,
        tag: <BsLinkedin className="text-[#0078D4] text-[43px]" />,
        href: "https://www.linkedin.com/in/youturkey11/",
      },
      {
        id: 2,
        tag: <ImBehance2 className="text-[#053eff] text-[43px]" />,
        href: "https://www.behance.net/YouTurkey11",
      },
      {
        id: 3,
        tag: <FaSquareWhatsapp className="text-[#40C351] text-5xl" />,
        href: "https://wa.me/201273451052",
      },
      {
        id: 4,
        tag: (
          <FaGithubSquare className="bg-[hsl(var(--background))] text-5xl" />
        ),
        href: "https://github.com/YoussefTurkey",
      },
    ],
  };

  // Tools & Skills
  interface TTools {
    tool: { id: number; img: string; name: string }[];
  }
  const tools: TTools = {
    tool: [
      { id: 1, img: "/images/Tools & Skills/HTML5.webp", name: "HTML5" },
      { id: 2, img: "/images/Tools & Skills/CSS3.webp", name: "CSS3" },
      {
        id: 3,
        img: "/images/Tools & Skills/JavaScript.webp",
        name: "JavaScript",
      },
      {
        id: 16,
        img: "/images/Tools & Skills/TypeScript.webp",
        name: "TypeScript",
      },
      { id: 4, img: "/images/Tools & Skills/VueJS.webp", name: "Vue.js" },
      { id: 5, img: "/images/Tools & Skills/ReactJS.webp", name: "React.js" },
      { id: 6, img: "/images/Tools & Skills/NextJS.webp", name: "Next.js" },
      {
        id: 7,
        img: "/images/Tools & Skills/Vector.webp",
        name: "Bootstrap CSS",
      },
      {
        id: 8,
        img: "/images/Tools & Skills/Vector (1).webp",
        name: "Tailwind CSS",
      },
      { id: 9, img: "/images/Tools & Skills/Vector (2).webp", name: "jQuery" },
      { id: 10, img: "/images/Tools & Skills/Redux.webp", name: "Redux" },
      { id: 11, img: "/images/Tools & Skills/Git.webp", name: "Git" },
      { id: 12, img: "/images/Tools & Skills/GitHub.webp", name: "GitHub" },
      { id: 13, img: "/images/Tools & Skills/yarn.webp", name: "Yarn" },
      { id: 14, img: "/images/Tools & Skills/npm.webp", name: "npm" },
      {
        id: 15,
        img: "/images/Tools & Skills/Illustrator.webp",
        name: "Illustrator",
      },
      {
        id: 17,
        img: "/images/Tools & Skills/Photoshop.webp",
        name: "Photoshop",
      },
      {
        id: 18,
        img: "/images/Tools & Skills/Vector (3).webp",
        name: "CorelDraw",
      },
    ],
  };

  return (
    <main className="container mx-auto py-10">
      <section>
        <div>
          <Persona />
        </div>

        <div>
          <div>
            <p className="text-[hsl(var(--secondary))] text-3xl font-bold">
              110+
            </p>
            <span className="text-lg">
              {language === "en" ? "Happy Clients" : "عملاء سعداء"}
            </span>
          </div>

          <div className="flex items-center my-5 ml-[20px]">
            {clientsImg.images.slice(0, 5).map((img, i) => (
              <Image
                key={i}
                src={img.img}
                width={50}
                height={50}
                alt={"client"}
                loading="lazy"
                className="rounded-full ml-[-20px]"
              />
            ))}
            <button className="w-14 h-14 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center ml-[-20px]">
              <span className="text-4xl font-bold mt-[-10px]">+</span>
            </button>
          </div>

          <Buttons href={"/"}>
            {language === "en" ? "Portfolio" : "المشاريع"}
          </Buttons>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div>
          <SubTitle>
            {language === "en" ? "Get to Know Me" : "تعرف عليّ"}
          </SubTitle>
          <Title>{language === "en" ? "Biography" : "نبذة شخصية"}</Title>
          <p
            className={`${
              language === "en" ? "text-left" : "text-right"
            } leading-loose tracking-normal max-w-[600px] mx-auto text-justify text-xl pt-3`}
          >
            {language === "en" ? summary.en : summary.ar}
          </p>
        </div>

        <div className="my-5 flex items-center gap-6">
          {links.lnks.map((l, i) => (
            <Link key={i} href={l.href} target="_blank" role="button">
              <span>{l.tag}</span>
            </Link>
          ))}
        </div>

        <Buttons href={"/"}>
          {language === "en" ? "My Resume" : "السيرة الذاتية"}
        </Buttons>
      </section>

      <section className="flex flex-col items-center justify-center mt-40">
        <div>
          <SubTitle>
            {language === "en" ? "ًWhat I Have?" : "ماذا أُتقن؟"}
          </SubTitle>
          <Title>
            {language === "en" ? "Tools & Skills" : "أدوات ومهارات"}
          </Title>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-30 my-10">
          {tools.tool.map((img, i) => (
            <div
              key={i}
              className={`border-[1px] border-[hsl(var(--third))] rounded-2xl flex flex-col items-center justify-between p-10`}
            >
              <Image
                src={img.img}
                width={100}
                height={100}
                alt="HTML5"
                loading="lazy"
                className="w-15"
              />
              <p className="font-bold text-[hsl(var(--forth))] text-lg text-center py-5 w-100">
                {img.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-40">
        <div>
          <SubTitle>
            {language === "en" ? "My Lastest Projects" : "أخر مشاريعي"}
          </SubTitle>
          <Title>{language === "en" ? "Portfolio" : "سابقة الأعمال"}</Title>
        </div>

        <div
          className="flex flex-col bg-[#3F3F3F] rounded-3xl w-full h-135 p-5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered && (
            <div
              className={`flex flex-col items-start transition-all duration-300
          ${
            isHovered ? "visibility" : "hidden"
          }`}
            >
              <p className="flex items-center text-white">
                <span
                  className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                >
                  <FaTag />
                </span>
                <span>
                  {language === "en"
                    ? "Web Development"
                    : "تطوير المواقع الإلكترونية"}
                </span>
              </p>

              <h3 className="flex flex-col text-2xl py-1 text-white">
                {language === "en" ? "Spiderman Website" : "موقع Spiderman"}
              </h3>
            </div>
          )}

          <Image
            src={"/images/projects/project-1.webp"}
            width={500}
            height={500}
            alt="spider-man"
            loading="lazy"
            className="py-5 m-auto"
          />

          {isHovered && (
            <div
              className={`flex items-center justify-end gap-x-5 transition-all duration-300
          ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
            >
              <Link href={"/"} className="text-2xl text-white">
                <FaGithub />
              </Link>
              <Link href={"/"} className="text-2xl text-white">
                <FiExternalLink />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default LandPage;
