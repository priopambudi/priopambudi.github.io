import React from "react";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="py-1 px-3 border rounded-md text-sm cursor-default hover:bg-foreground hover:text-secondary transition-all">
      {children}
    </button>
  );
};

export default Button;
