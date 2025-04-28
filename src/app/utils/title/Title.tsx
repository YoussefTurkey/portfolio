"use client";
// importing React components
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children } : TitleProps) => {

  return (
    <div>
      <h1 className="text-[hsl(var(--secondary))] text-[55px] font-bold text-center">
        {children}
      </h1>
    </div>
  );
};

export default Title;
