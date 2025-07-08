import React from "react";
import Link from "next/link";
import s from "./main_logo.module.scss";

interface Props {
  className?: string,
  logo: string
}

export const MainLogo:React.FC<Props> = ({className=``, logo}) => {
  return <Link href={'/'} className={`${className} ${s.main_logo}`}>
    <img src={logo} alt={'logo'} />
  </Link>;
}