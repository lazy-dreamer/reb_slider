import React from "react";
import s from "./nav_list.module.scss";
import {NavLink} from "@/components/nav_link";

export interface INavLi {
  name: string,
  href: string,
}
interface Props {
  className?: string,
  navList: INavLi[]
}

export const NavList:React.FC<Props> = ({className='', navList}) => {
  return <ul className={`${className} ${s.nav_list}`}>
      {navList.map((item, index) => (
        <li key={item.name + index}>
          <NavLink link={item} />
        </li>
      ))}
  </ul>;
}