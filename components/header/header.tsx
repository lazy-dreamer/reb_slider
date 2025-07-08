import React from "react";
import s from "./header.module.scss";
import {MainLogo} from "@/components/main_logo";
import {fetchData} from "@/services/fetchData";
import {NavList} from "@/components/nav_list";
import {MainBtn} from "@/components/ui_components/main_btn";
import {HeaderAuth} from "@/components/header_auth";

interface Props {
  className?: string
}

export const Header:React.FC<Props> = async ({className=''}) => {
  const {logo, nav_list, header_cta, header_auth} = await fetchData("header");
  
  return <header className={`${className} ${s.header}`}>
    <div className={s.header_container}>
      <MainLogo logo={logo} />
      <div className={s.header_right_container}>
        <NavList navList={nav_list} />
        <div className={s.header_right}>
          <MainBtn text={header_cta.text} href={header_cta.href} className={s.header_cta} />
          <HeaderAuth authData={header_auth} />
        </div>
      </div> 
    </div>
  </header>;
}