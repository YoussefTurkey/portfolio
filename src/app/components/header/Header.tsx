// importing React components
import dynamic from "next/dynamic";
// importing Components
const ToggleBtn = dynamic(() => import("@/app/components/theme/ThemeToggle"));
const LangBtn = dynamic(() => import('@/app/components/lang/LanguageToggle'))
const Logo = dynamic(() => import("@/app/components/images/Logo"));

const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto py-10">
      {/* Language toggle btn */}
      <LangBtn />

      {/* logo */}
      <Logo />

      {/* Dark/Light toggle btrn */}
      <ToggleBtn />
    </header>
  );
};

export default Header;
