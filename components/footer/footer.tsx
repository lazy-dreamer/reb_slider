import React from "react";
import Image from "next/image";
import s from "./footer.module.scss";

interface Props {
  className?: string
}

export const Footer:React.FC<Props> = ({className=''}) => {
  return <footer className={`${className} ${s.foorter}`}>
    <img className={s.footer_image} src="/footer.jpg" alt="footer"/>
  </footer>;
}