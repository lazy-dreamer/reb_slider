import React from "react";
import s from "./title.module.scss";

type TitleSize = "xxs" | "xs" | "sm" | "md" | "lg" | "xl";

interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
  isWhite?: boolean;
}

export const Title: React.FC<Props> = ({
  text,
  size = "lg",
  className = "",
  isWhite = false,
}) => {
  const mapTagBySize = {
    xxs: "h6",
    xs: "h5",
    sm: "h4",
    md: "h3",
    lg: "h2",
    xl: "h1",
  } as const;

  const mapClassNameBySize = {
    xxs: "title_h6",
    xs: "title_h5",
    sm: "title_h4",
    md: "title_h3",
    lg: "title_h2",
    xl: "title_h1",
  } as const;
  const icoTag = '';

  // return React.createElement(
  //   mapTagBySize[size],
  //   { className: `${s.title} ${s[mapClassNameBySize[size]]} ${className} ${isWhite && 'text_white'}` },
  //   [text],
  // );
  return <h2 className={`${s.title} ${s[mapClassNameBySize[size]]} ${className} ${isWhite && 'text_white'}`}>{text}<img
    src="/title_ico.svg" alt="title_icon"/></h2>
  
  
};

// <Title size='xl' text='Title' className='custom_class'/>
