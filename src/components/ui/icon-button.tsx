import { cn } from "@/lib/utils";
import React, { Children, MouseEventHandler } from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement;
}
const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className,
      )}
    >
      {icon}
    </button>
  );
};

export default IconButton;
