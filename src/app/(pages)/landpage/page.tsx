"use client";
// importing React component
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
// importing Components
const Persona = dynamic(() => import("@/app/components/images/Persona"));
const Buttons = dynamic(() => import("@/app/utils/button/Buttons"));
const Title = dynamic(()=> import('@/app/utils/title/Title'))
const SubTitle = dynamic(()=> import('@/app/utils/title/SubTitle'))
// using Translation
import { useLanguage } from "@/app/components/lang/LanguageProvider";
// importing React-icons
import { BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

const LandPage = () => {
  const { language } = useLanguage();

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

          <div className="flex items-center my-5">
            <Image
              src={"/images/client1.webp"}
              width={50}
              height={50}
              alt={"client"}
              loading="lazy"
              className="rounded-full"
            />
            <Image
              src={"/images/client2.webp"}
              width={50}
              height={50}
              alt={"client"}
              loading="lazy"
              className="rounded-full ml-[-20px]"
            />
            <Image
              src={"/images/client3.webp"}
              width={50}
              height={50}
              alt={"client"}
              loading="lazy"
              className="rounded-full ml-[-20px]"
            />
            <Image
              src={"/images/client4.webp"}
              width={50}
              height={50}
              alt={"client"}
              loading="lazy"
              className="rounded-full ml-[-20px]"
            />
            <button className="w-14 h-14 bg-[hsl(var(--primary))] rounded-full flex items-center justify-center ml-[-20px]">
              <span className="text-4xl font-bold mt-[-10px]">+</span>
            </button>
          </div>

          <Buttons>{language === "en" ? "Portfolio" : "المشاريع"}</Buttons>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <div>
          <SubTitle>{language === "en" ? "Get to Know Me" : "تعرف عليّ"}</SubTitle>
          <Title>{language === "en" ? "Biography" : "نبذة شخصية"}</Title>
          <p
            className={`${
              language === "en" ? "text-left" : "text-right"
            } leading-9 w-120 text-xl pt-3`}
          >
            {language === "en"
              ? `Creative and detail-oriented Frontend Developer with over 2 years of
            experience in building modern, responsive web applications.
            Proficient in JavaScript, Next.js, SCSS, and WordPress (Elementor,
            WooCommerce) as part of a versatile tech stack. Passionate about
            UI/UX and delivering tailored digital experiences that drive
            engagement and performance.`
              : `مطور واجهات أمامية (Frontend Developer) مبدع ودقيق في التفاصيل، يمتلك خبرة تزيد عن سنتين في بناء تطبيقات ويب حديثة ومتجاوبة. ماهر في JavaScript وNext.js وSCSS وWordPress (بما في ذلك Elementor وWooCommerce) ضمن مجموعة تقنية متنوعة. شغوف بتجربة المستخدم وتصميم واجهات الاستخدام (UI/UX)، ويسعى لتقديم تجارب رقمية مخصصة تعزز التفاعل والأداء.`}
          </p>
        </div>

        <div className="my-5 flex items-center gap-6">
          <Link
            href={"https://www.linkedin.com/in/youturkey11/"}
            target="_blank"
            role="button"
          >
            <span>
              <BsLinkedin className="text-[#0078D4] text-[43px]" />
            </span>
          </Link>

          <Link
            href={"https://www.behance.net/YouTurkey11"}
            target="_blank"
            role="button"
          >
            <span>
              <ImBehance2 className="text-[#053eff] text-[43px]" />
            </span>
          </Link>

          <Link
            href={"https://wa.me/201273451052"}
            target="_blank"
            role="button"
          >
            <span>
              <FaSquareWhatsapp className="text-[#40C351] text-5xl" />
            </span>
          </Link>

          <Link
            href={"https://github.com/YoussefTurkey"}
            target="_blank"
            role="button"
          >
            <span>
              <FaGithubSquare className="bg-[hsl(var(--background))] text-5xl" />
            </span>
          </Link>
        </div>

        <Buttons>{language === "en" ? "My Resume" : "السيرة الذاتية"}</Buttons>
      </section>
    </main>
  );
};

export default LandPage;
