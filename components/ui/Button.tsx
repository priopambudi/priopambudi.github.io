import React from "react";

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className="py-1 px-3 border rounded-md text-sm cursor-default bg-primary text-secondary hover:bg-primary/80 transition-all">
      {children}
    </button>
  );
};

export default Button;
