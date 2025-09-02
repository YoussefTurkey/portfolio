"use client";
// importing React component
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// importing Components
const Persona = dynamic(() => import("@/app/components/ui/Persona"));
const Buttons = dynamic(() => import("@/app/utils/button/Buttons"));
const Title = dynamic(() => import("@/app/utils/title/Title"));
const SubTitle = dynamic(() => import("@/app/utils/title/SubTitle"));
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";
// importing React-icons
import { BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { AiFillBehanceCircle } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

const LandPage = () => {
  const { language } = useLanguage();
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isHoveredThree, setIsHoveredThree] = useState(false);
  const [isHoveredFour, setIsHoveredFour] = useState(false);
  const [isHoveredFive, setIsHoveredFive] = useState(false);
  const [isHoveredSix, setIsHoveredSix] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showGraphic, setShowGrapgic] = useState(true);
  const [showWeb, setShowWeb] = useState(false);

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
      { id: 15, img: "/images/Tools & Skills/sass.webp", name: "sass" },
      { id: 16, img: "/images/Tools & Skills/Axios.webp", name: "Axios" },
      { id: 17, img: "/images/Tools & Skills/strapi.webp", name: "strapi" },
      {
        id: 18,
        img: "/images/Tools & Skills/wordpress.webp",
        name: "wordpress",
      },
      {
        id: 19,
        img: "/images/Tools & Skills/woocommerce.webp",
        name: "woocommerce",
      },
      {
        id: 20,
        img: "/images/Tools & Skills/elementor.webp",
        name: "elementor",
      },
      { id: 21, img: "/images/Tools & Skills/figma.webp", name: "figma" },
      { id: 22, img: "/images/Tools & Skills/php.webp", name: "php" },
      { id: 23, img: "/images/Tools & Skills/python.webp", name: "python" },
      { id: 24, img: "/images/Tools & Skills/C++.webp", name: "C++" },
      { id: 25, img: "/images/Tools & Skills/comfyui.webp", name: "comfyui" },
      {
        id: 26,
        img: "/images/Tools & Skills/Illustrator.webp",
        name: "Illustrator",
      },
      {
        id: 27,
        img: "/images/Tools & Skills/Photoshop.webp",
        name: "Photoshop",
      },
      {
        id: 28,
        img: "/images/Tools & Skills/Vector (3).webp",
        name: "CorelDraw",
      },
    ],
  };

  // Portfolios
  interface TPortfolio {
    proj: {
      id: number;
      subTitle: string;
      title: string;
      img: string;
      style: string;
      behance?: {
        link: string;
        icon: React.ReactNode;
      };
      github?: {
        link: string;
        icon: React.ReactNode;
      };
      preview?: {
        link: string;
        icon: React.ReactNode;
      };
    }[];
  }
  const portfolioGraphic: TPortfolio = {
    proj: [
      {
        id: 1,
        subTitle: language === "en" ? "Graphic Design" : "التصميم الجرافيكي",
        title: language === "en" ? "Senforra" : "سنفُرّة",
        img: "/images/projects/project-1.webp",
        style: "bg-[#3F3F3F]",
        behance: {
          link: "https://www.behance.net/gallery/217496887/Senforra-Every-Sip-a-Story",
          icon: <AiFillBehanceCircle />,
        },
      },
      {
        id: 2,
        subTitle: language === "en" ? "Graphic Design" : "التصميم الجرافيكي",
        title: "كل ما هو تركي جميل",
        img: "/images/projects/project-2.webp",
        style: "bg-[#7FBFFF]",
        behance: {
          link: "https://www.behance.net/gallery/208797491/_",
          icon: <AiFillBehanceCircle />,
        },
      },
      {
        id: 3,
        subTitle: language === "en" ? "Graphic Design" : "التصميم الجرافيكي",
        title: "Logofolio 2024",
        img: "/images/projects/project-3.webp",
        style: "bg-[#3E5463]",
        behance: {
          link: "https://www.behance.net/gallery/209786459/Logofolio-2024",
          icon: <AiFillBehanceCircle />,
        },
      },
    ],
  };
  const projGraphic = portfolioGraphic.proj;

  const portfolioWeb: TPortfolio = {
    proj: [
      {
        id: 1,
        subTitle: language === "en" ? "Web Development" : "الموقع الإلكتروني",
        title: language === "en" ? "Resume" : "السيرة الذاتية",
        img: "/images/projects/project-4.webp",
        style: "bg-[#3F3F3F]",
        preview: {
          link: "https://youturkey11.com",
          icon: <FiExternalLink />,
        },
      },
      {
        id: 2,
        subTitle: language === "en" ? "Web Development" : "الموقع الإلكتروني",
        title: "Spot75",
        img: "/images/projects/project-5.webp",
        style: "bg-[#7FBFFF]",
        preview: {
          link: "https://spot75.com",
          icon: <FiExternalLink />,
        },
      },
      {
        id: 3,
        subTitle: language === "en" ? "Web Development" : "الموقع الإلكتروني",
        title: language === "en" ? "Qorra" : "قُرّاءْ",
        img: "/images/projects/project-6.webp",
        style: "bg-[#3E5463]",
        github: {
          link: "https://github.com/YoussefTurkey/qorra",
          icon: <FaGithub />,
        },
        preview: {
          link: "https://qorra.vercel.app/",
          icon: <FiExternalLink />,
        },
      },
    ],
  };
  const projWeb = portfolioWeb.proj;

  // Contacts
  interface IContact {
    id: number;
    img: React.ReactNode;
    title: string;
    data: string;
    link?: string;
  }
  const contact: IContact[] = [
    {
      id: 1,
      img: <SiWhatsapp />,
      title: language === "en" ? "Whatsapp Me" : "تواصلي معي",
      data: language === "en" ? "(+20) 127 345 1025" : "1025 345 127 (+20)",
      link: "https://wa.me/201273451052",
    },
    {
      id: 2,
      img: <FaRegEnvelope />,
      title: language === "en" ? "Email Me" : "تواصلي معي",
      data: "youssef.turkey@youturkey11.com",
      link: "mailto:youssef.turkey@youturkey11.com",
    },
    {
      id: 3,
      img: <FiPhoneCall />,
      title: language === "en" ? "Whatsapp Me" : "اتصل بي",
      data: language === "en" ? "(+20) 115 410 2459" : "2459 410 115 (+20)",
    },
  ];

  // Blog
  interface IBlog {
    id: number;
    img: string;
    title: string;
    time: string;
    tag: string;
    link: string;
  }
  const blog: IBlog[] = [
    {
      id: 1,
      img: "/images/posts/post-01.webp",
      title:
        language === "en"
          ? "Graphic Design Trends 2024"
          : "ترندات التصميم الجرافيكي 2024",
      time: language === "en" ? "13 May 2024" : "13 مايو 2024",
      tag: language === "en" ? "Graphic Design" : "التصميم الجرافيكي",
      link: "",
    },
    {
      id: 2,
      img: "/images/posts/post-02.webp",
      title: language === "en" ? "Web Development" : "تطوير المواقع الإلكتروني",
      time: language === "en" ? "10 May 2024" : "10 مايو 2024",
      tag: language === "en" ? "Web Development" : "تطوير المواقع الإلكتروني",
      link: "",
    },
    {
      id: 3,
      img: "/images/posts/post-03.webp",
      title: language === "en" ? "Branding" : "البراندينج",
      time: language === "en" ? "08 May 2024" : "08 مايو 2024",
      tag: language === "en" ? "Graphic Design" : "التصميم الجرافيكي",
      link: "",
    },
  ];

  return (
    <main className="container mx-auto py-10">
      <section>
        <div>
          <Persona />
        </div>

        <div
          className={
            "py-20 md:py-10 px-20 xl:px-0 flex flex-col items-center md:items-start"
          }
        >
          <div>
            <p
              className={`${
                language === "en" ? "md:text-left" : "md:text-right"
              } text-center text-[hsl(var(--secondary))] text-2xl md:text-3xl font-bold`}
            >
              110+
            </p>
            <span className="text-md md:text-xl">
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
                className="rounded-full ml-[-17px] md:ml-[-20px] w-10 md:w-12"
              />
            ))}
            <button className="w-11 h-11 md:w-14 md:h-14 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center ml-[-17px] md:ml-[-20px]">
              <span className="text-3xl md:text-4xl font-bold mt-[-10px]">
                +
              </span>
            </button>
          </div>

          <Buttons href={"/"}>
            {language === "en" ? "Portfolio" : "المشاريع"}
          </Buttons>
        </div>
      </section>

      <section
        className="flex flex-col items-center justify-center"
        id="summary"
      >
        <div>
          <SubTitle>
            {language === "en" ? "Get to Know Me" : "تعرف عليّ"}
          </SubTitle>
          <Title>{language === "en" ? "Biography" : "نبذة شخصية"}</Title>
          <p
            className={`${
              language === "en" ? "md:text-left" : "md:text-right"
            } leading-loose tracking-normal w-fit md:w-full md:max-w-[500px] lg:max-w-[600px] mx-auto text-xl px-10 md:px-0 pt-3`}
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

      <section
        className="flex flex-col items-center justify-center mt-20 md:mt-40"
        id="skills"
      >
        <div>
          <SubTitle>
            {language === "en" ? "What I Have?" : "ماذا أُتقن؟"}
          </SubTitle>
          <Title>
            {language === "en" ? "Tools & Skills" : "أدوات ومهارات"}
          </Title>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-10 px-5 md:px-30 my-10">
          {!showSkills &&
            tools.tool.slice(0, 10).map((img, i) => (
              <div
                key={i}
                className={`border-[1px] border-[hsl(var(--third))] hover:border-[hsl(var(--secondary))] transition-all rounded-2xl flex flex-col items-center justify-between p-5 md:p-10`}
              >
                <Image
                  src={img.img}
                  width={100}
                  height={100}
                  alt={img.name}
                  loading="lazy"
                  className="w-10 md:w-12 lg:w-15 xl:w-20"
                />
                <p className="font-bold text-[hsl(var(--forth))] text-sm md:text-lg text-center py-5 capitalize">
                  {img.name}
                </p>
              </div>
            ))}
          {showSkills &&
            tools.tool.map((img, i) => (
              <div
                key={i}
                className={`border-[1px] border-[hsl(var(--third))] hover:border-[hsl(var(--secondary))] transition-all rounded-2xl flex flex-col items-center justify-between p-5 md:p-10`}
              >
                <Image
                  src={img.img}
                  width={100}
                  height={100}
                  alt={img.name}
                  loading="lazy"
                  className="w-10 md:w-12 lg:w-15 xl:w-20"
                />
                <p className="font-bold text-[hsl(var(--forth))] text-sm md:text-lg text-center py-5 capitalize">
                  {img.name}
                </p>
              </div>
            ))}
        </div>

        <button
          onClick={() => {
            setShowSkills(!showSkills);
            const buttonElement = document.getElementById("skills_Btn");
            if (buttonElement) {
              buttonElement.style.display = "none";
            }
          }}
          id="skills_Btn"
          className={`border-1 border-[hsl(var(--secondary))] hover:text-white ${
            language === "en"
              ? "hover:shadow-[inset_13rem_0_0_0]"
              : "hover:shadow-[inset_-13rem_0_0_0]"
          } hover:shadow-[hsl(var(--secondary))] duration-[400ms,400ms] transition-[color,box-shadow] flex items-center w-fit rounded-full py-3 px-10 font-bold cursor-pointer`}
        >
          {language === "en" ? "Show More" : "للمزيد"}
        </button>
      </section>

      <section
        className="flex flex-col items-center justify-center mt-20 md:mt-40 px-5 md:px-30"
        id="projects"
      >
        <div>
          <SubTitle>
            {language === "en" ? "My Lastest Projects" : "أخر مشاريعي"}
          </SubTitle>
          <Title>{language === "en" ? "Portfolio" : "سابقة الأعمال"}</Title>
        </div>

        <div className="flex items-center md:flex-row flex-col gap-5 py-5">
          <button
            onClick={() => {
              if(!showGraphic) setShowGrapgic(!showGraphic);
              setShowWeb(false);
            }}
            className={`border-1 border-[hsl(var(--secondary))] hover:text-white ${
              language === "en"
                ? "hover:shadow-[inset_13rem_0_0_0]"
                : "hover:shadow-[inset_-13rem_0_0_0]"
            } hover:shadow-[hsl(var(--secondary))] duration-[400ms,400ms] transition-[color,box-shadow] flex items-center w-fit rounded-full py-3 px-10 font-bold cursor-pointer`}
          >
            {language === "en" ? "Graphic Design" : "التصميم الجرافيكي"}
          </button>

          <button
            onClick={() => {
              if(!showWeb) setShowWeb(!showWeb);
              setShowGrapgic(false);
            }}
            className={`border-1 border-[hsl(var(--secondary))] hover:text-white ${
              language === "en"
                ? "hover:shadow-[inset_13rem_0_0_0]"
                : "hover:shadow-[inset_-13rem_0_0_0]"
            } hover:shadow-[hsl(var(--secondary))] duration-[400ms,400ms] transition-[color,box-shadow] flex items-center w-fit rounded-full py-3 px-10 font-bold cursor-pointer`}
          >
            {language === "en" ? "Web Development" : "المواقع الإلكتروني"}
          </button>
        </div>

        {showGraphic && (
          <div className="w-full">
            {/* project one */}
            <div
              className={`flex flex-col ${projGraphic[0].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredOne(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredOne(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredOne ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projGraphic[0].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projGraphic[0].title}
                </h3>
              </div>

              <Image
                src={projGraphic[0].img}
                width={500}
                height={500}
                alt={projGraphic[0].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredOne ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredOne ? "visible" : "invisible"}`}
              >
                {projGraphic[0].behance && (
                  <Link
                    href={projGraphic[0].behance.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projGraphic[0].behance.icon}
                  </Link>
                )}
              </div>
            </div>

            {/* project two */}
            <div
              className={`flex flex-col ${projGraphic[1].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredTwo(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredTwo(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredTwo ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projGraphic[1].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projGraphic[1].title}
                </h3>
              </div>

              <Image
                src={projGraphic[1].img}
                width={500}
                height={500}
                alt={projGraphic[1].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredTwo ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredTwo ? "visible" : "invisible"}`}
              >
                {projGraphic[1].behance && (
                  <Link
                    href={projGraphic[1].behance.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projGraphic[1].behance.icon}
                  </Link>
                )}
              </div>
            </div>

            {/* project Three */}
            <div
              className={`flex flex-col ${projGraphic[2].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredThree(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredThree(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredThree ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projGraphic[2].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projGraphic[2].title}
                </h3>
              </div>

              <Image
                src={projGraphic[2].img}
                width={500}
                height={500}
                alt={projGraphic[2].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredThree ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredThree ? "visible" : "invisible"}`}
              >
                {projGraphic[2].behance && (
                  <Link
                    href={projGraphic[2].behance.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projGraphic[2].behance.icon}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        {showWeb && (
          <div className="w-full">
            {/* project one */}
            <div
              className={`flex flex-col ${projWeb[0].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredFour(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredFour(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredFour ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projWeb[0].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projWeb[0].title}
                </h3>
              </div>

              <Image
                src={projWeb[0].img}
                width={500}
                height={500}
                alt={projWeb[0].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredFour ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredFour ? "visible" : "invisible"}`}
              >
                {projWeb[0].github && (
                  <Link
                    href={projWeb[0].github.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[0].github.icon}
                  </Link>
                )}
                {projWeb[0].preview && (
                  <Link
                    href={projWeb[0].preview.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[0].preview.icon}
                  </Link>
                )}
              </div>
            </div>

            {/* project two */}
            <div
              className={`flex flex-col ${projWeb[1].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredFive(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredFive(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredFive ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projWeb[1].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projWeb[1].title}
                </h3>
              </div>

              <Image
                src={projWeb[1].img}
                width={500}
                height={500}
                alt={projWeb[1].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredFive ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredFive ? "visible" : "invisible"}`}
              >
                {projWeb[1].github && (
                  <Link
                    href={projWeb[1].github.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[1].github.icon}
                  </Link>
                )}
                {projWeb[1].preview && (
                  <Link
                    href={projWeb[1].preview.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[1].preview.icon}
                  </Link>
                )}
              </div>
            </div>

            {/* project three */}
            <div
              className={`flex flex-col ${projWeb[2].style} rounded-3xl w-full h-135 py-5 px-10 my-5`}
              onMouseEnter={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredSix(true);
                }
              }}
              onMouseLeave={() => {
                if (typeof window !== "undefined") {
                  setIsHoveredSix(false);
                }
              }}
            >
              <div
                className={`flex flex-col items-center md:items-start transition-all duration-300
            ${isHoveredSix ? "visible" : "invisible"}`}
              >
                <p className="flex items-center text-white">
                  <span
                    className={`${language === "en" ? "pr-2" : "pl-2"} text-sm`}
                  >
                    <FaTag />
                  </span>
                  <span>{projWeb[2].subTitle}</span>
                </p>

                <h3 className="flex flex-col text-2xl font-bold py-1 text-white">
                  {projWeb[2].title}
                </h3>
              </div>

              <Image
                src={projWeb[2].img}
                width={500}
                height={500}
                alt={projWeb[2].title}
                loading="lazy"
                className={`py-5 m-auto ${
                  isHoveredSix ? "scale-105" : "scale-100"
                } transition-all`}
              />

              <div
                className={`flex items-center justify-center md:justify-end gap-x-5 transition-all duration-300
            ${isHoveredSix ? "visible" : "invisible"}`}
              >
                {projWeb[2].github && (
                  <Link
                    href={projWeb[2].github.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[2].github.icon}
                  </Link>
                )}
                {projWeb[2].preview && (
                  <Link
                    href={projWeb[2].preview.link}
                    target="_blank"
                    className="text-3xl text-white"
                  >
                    {projWeb[2].preview.icon}
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}

        <Buttons href={"/"}>
          {language === "en" ? "View Projects" : "عرض المشاريع"}
        </Buttons>
      </section>

      <section
        className="flex flex-col items-center justify-center mt-20 md:mt-40 px-5 md:px-30"
        id="contact"
      >
        <div>
          <SubTitle>{language === "en" ? "Let's Talk!" : "راسلني"}</SubTitle>
          <Title>{language === "en" ? "Contacts" : "قنوات التواصل"}</Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
          {contact.map((cont) => (
            <Link
              key={cont.id}
              href={cont.link ? cont.link : ""}
              target={cont.link ? "_blank" : "_self"}
              className={
                "cursor-pointer border-1 border-[hsl(var(--third))] hover:border-[hsl(var(--secondary))] rounded-lg py-10 px-5 flex flex-col items-center transition-all"
              }
            >
              <div className="p-3 bg-[hsl(var(--secondary))] text-white text-5xl rounded-lg w-fit">
                {cont.img}
              </div>
              <h4 className="font-bold text-[hsl(var(--forth))] text-sm md:text-lg text-center py-2 capitalize">
                {cont.title}
              </h4>
              <p className="text-[hsl(var(--forth))] text-sm md:text-lg text-center">
                {cont.data}
              </p>
            </Link>
          ))}
        </div>

        <div className="my-5 flex items-center gap-6">
          {links.lnks.map((l, i) => (
            <Link key={i} href={l.href} target="_blank" role="button">
              <span>{l.tag}</span>
            </Link>
          ))}
        </div>

        <Buttons href={"/contact"}>
          {language === "en" ? "Message Me" : "راسلني"}
        </Buttons>
      </section>

      <section
        className="flex flex-col items-center justify-center mt-20 md:mt-40 px-5 md:px-30"
        id="blog"
      >
        <div>
          <SubTitle>
            {language === "en" ? "My Recent Posts" : "آخر منشوراتي"}
          </SubTitle>
          <Title>{language === "en" ? "Blog" : "مدونة"}</Title>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-5">
          {blog.map((blog) => (
            <Link
              href={blog.link}
              key={blog.id}
              className="bg-[hsl(var(--primary))] pb-5 rounded-xl group"
            >
              <div className="relative border-b-5 border-[hsl(var(--secondary))]">
                <Image
                  src={blog.img}
                  width={500}
                  height={500}
                  alt={blog.title}
                  loading="lazy"
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <div className="absolute inset-0 group-hover:bg-gradient-to-t from-[hsl(var(--secondary))] to-transparent pointer-events-none transition-opacity duration-200 opacity-0 group-hover:opacity-100"></div>
              </div>
              <h4 className="font-bold text-lg md:text-xl xl:text-2xl p-5 group-hover:text-[hsl(var(--secondary))] transition-all">
                {blog.title}
              </h4>
              <p className="flex items-center gap-2 px-5 py-1">
                <span className="text-[hsl(var(--secondary))]">
                  <FaRegCalendarAlt />
                </span>{" "}
                <span>{blog.time}</span>
              </p>
              <p className="flex items-center gap-2 px-5 py-1">
                <span className="text-[hsl(var(--secondary))]">
                  <FaTag />
                </span>{" "}
                <span>{blog.tag}</span>
              </p>
            </Link>
          ))}
        </div>

        <Buttons href={"/"}>
          {language === "en" ? "View Blogs" : "عرض المقالات"}
        </Buttons>
      </section>
    </main>
  );
};

export default LandPage;
