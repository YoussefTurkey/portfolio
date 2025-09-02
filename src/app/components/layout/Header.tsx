// importing React components
import dynamic from "next/dynamic";
// importing Components
const ToggleBtn = dynamic(() => import("@/app/theme/ThemeToggle"));
const LangBtn = dynamic(() => import('@/app/lang/LanguageToggle'))
const Logo = dynamic(() => import("@/app/components/ui/Logo"));

const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto py-10 px-10 md:px-20 xl:px-0">
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
