"use client";
// importing React components
import { ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}

const Title = ({children} : SubTitleProps) => {

  return (
    <div>
      <p className="font-bold text-md md:text-xl text-center">
        {children}
      </p>
    </div>
  );
};

export default Title;
