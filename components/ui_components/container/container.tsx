import React from "react";
import s from "./container.module.scss";

interface Props {
  className?: string;
}

export const MainContainer: React.FC<React.PropsWithChildren<Props>> = ({
  className = "",
  children,
}) => {
  return <div className={`${s.screen_content} ${className} `}>{children}</div>;
};
