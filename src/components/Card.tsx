import React, { ReactNode } from "react";


interface CardProps {
  width: string;
  height: string;
  variant: "outlined" | "primary";
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  variant,
  children,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === "outlined" ? "2px solid pink" : "none",
        backgroundColor: variant === "primary" ? "lightpink" : "none",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
