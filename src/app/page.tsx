// importing React components
import dynamic from "next/dynamic";
// importing pages files
const LandPage = dynamic(() => import("@/app/(pages)/landpage/page"));
const Sidebar = dynamic(() => import("@/app/utils/sidebar/Sidebar"));

const Main = () => {
  return (
    <>
      <Sidebar/>
      <main>
        <LandPage />
      </main>
    </>
  );
};

export default Main;
