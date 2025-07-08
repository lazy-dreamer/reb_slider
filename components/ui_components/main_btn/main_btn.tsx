import React from "react";
import Link from "next/link";
import s from "./main_btn.module.scss";

interface Props {
  className?: string,
  text: string,
  href: string
}

export const MainBtn:React.FC<Props> = ({className='', text, href}) => {
  return <Link href={href} className={`${s.main_btn} ${className} `}>{text}</Link>;
}