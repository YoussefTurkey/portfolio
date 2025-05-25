"use client";
// importing React component
import dynamic from "next/dynamic";
import Link from "next/link";
// importing Components
const Title = dynamic(() => import("@/app/utils/title/Title"));
const SubTitle = dynamic(() => import("@/app/utils/title/SubTitle"));
// const Buttons = dynamic(() => import("@/app/utils/button/Buttons"));
// using Translation
import { useLanguage } from "@/app/components/lang/LanguageProvider";
// importing React-Icons
import { SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
// importing Form libs
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

type FormData = {
  username: string;
  email: string;
  role: string;
  message: string;
};

const Contact = () => {
  const { language } = useLanguage();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    return emailjs
      .send(
        "service_11mdweo",
        "template_9nr5mrl",
        {
          from_name: data.username,
          from_email: data.email,
          role: data.role,
          message: data.message,
        },
        "rfywE3f7GMHbkkjXR"
      )
      .then(() => {
        alert(language === "en" ? "Message sent!" : "تم إرسال الرسالة!");
        reset();
      })
      .catch(() => {
        alert(language === "en" ? "Failed to send!" : "فشل الإرسال!");
      });
  };

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

  return (
    <main className="flex flex-col items-center justify-center container mx-auto py-10 px-5 md:px-30">
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

      <div className="my-20 w-70 md:w-150 lg:w-200">
        <Title>{language === "en" ? "Message Me" : "تواصل معي"}</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            <input
              type="text"
              {...register("username", { required: true })}
              name="username"
              placeholder={language === "en" ? "User Name" : "اسم المستخدم"}
              className="rounded-full border-1 border-[hsl(var(--third))] bg-[hsl(var(--third))] focus:border-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-6 py-2 outline-none transition-all duration-100"
            />
            <input
              type="email"
              {...register("email", { required: true })}
              name="email"
              placeholder={
                language === "en" ? "example@gmail.com" : "بريدك الإلكتروني"
              }
              className="rounded-full border-1 border-[hsl(var(--third))] bg-[hsl(var(--third))] focus:border-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-6 py-2 outline-none transition-all duration-100"
            />
          </div>

          <input
            type="text"
            {...register("role", { required: true })}
            name="role"
            placeholder={language === "en" ? "Your Role" : "وظيفتك"}
            className="rounded-full border-1 border-[hsl(var(--third))] bg-[hsl(var(--third))] focus:border-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-6 py-2 w-full outline-none transition-all duration-100"
          />

          <textarea
            {...register("message", { required: true })}
            name="message"
            rows={10}
            placeholder={language === "en" ? "Your Message..." : "رسالتك..."}
            className="rounded-4xl border-1 border-[hsl(var(--third))] bg-[hsl(var(--third))] focus:border-[hsl(var(--secondary))] text-[hsl(var(--foreground))] px-6 py-5 w-full outline-none transition-all duration-100 my-5"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className={`border-1 border-[hsl(var(--secondary))] hover:text-white cursor-pointer ${
              language === "en"
                ? "hover:shadow-[inset_13rem_0_0_0]"
                : "hover:shadow-[inset_-13rem_0_0_0]"
            } hover:shadow-[hsl(var(--secondary))] duration-[400ms,700ms] transition-[color,box-shadow] flex items-center w-fit rounded-full mx-auto`}
          >
            <span className="text-xl md:text-2xl py-3 px-6">
              {language === "en" ? "Send Message" : "أرسل لي"}
            </span>
            <span className="text-xl md:text-2xl rounded-full bg-[hsl(var(--secondary))] p-4 text-white">
              {language === 'en' ? <IoSend /> : <IoSend className="rotate-180" />}
            </span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
