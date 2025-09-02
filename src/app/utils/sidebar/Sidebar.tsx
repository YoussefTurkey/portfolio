"use client";
// importing React components
import Link from "next/link";
// importing React-icons
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { BsEmojiSunglasses } from "react-icons/bs";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
// using Translation
import { useLanguage } from "@/app/lang/LanguageProvider";

const Sidebar = () => {
  const { language } = useLanguage();

  // sidebar icons buttons
  interface TSidebarIcon {
    btn: {
      id: number;
      href: string;
      icon: React.ReactNode;
    }[];
  }
  const sidebarIcon: TSidebarIcon = {
    btn: [
      { id: 1, href: "#", icon: <TiHome /> },
      { id: 1, href: "#summary", icon: <FaUser /> },
      { id: 1, href: "#skills", icon: <BsEmojiSunglasses /> },
      { id: 1, href: "#projects", icon: <MdOutlineWorkOutline /> },
      { id: 1, href: "#contact", icon: <AiFillMessage /> },
      { id: 1, href: "#blog", icon: <IoBook /> },
    ],
  };

  return (
    <section className="container mx-auto px-0 relative">
      <div
        className={`hidden md:block md:fixed top-50 ${language === "en" ? "md:right-22 lg:right-20 xl:right-45" : "md:left-22 lg:left-20 xl:left-45"}`}
      >
        {sidebarIcon.btn.map((btn, i) => (
          <Link
            key={i}
            href={btn.href}
            role="button"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--secondary))] focus:bg-[hsl(var(--secondary))] focus:text-white hover:text-white rounded-full w-10 h-10 flex justify-center items-center cursor-pointer transition-all
  transition-all mb-5"
          >
            {btn.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
