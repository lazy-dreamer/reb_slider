import React from "react";
import s from "./header_auth.module.scss";
import Link from "next/link";

interface Props {
  className?: string,
  authData: {
    icon: string,
    text: string,
    href: string
  }
}

export const HeaderAuth:React.FC<Props> = ({className='', authData}) => {
  return <Link href={authData.href} className={`${className} ${s.auth_btn}`}>
    <img src={authData.icon} alt={'auth_icon'} className={s.auth_ico} />
    <span>{authData.text}</span>
  </Link>;
}