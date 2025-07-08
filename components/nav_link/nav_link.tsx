"use client";
import React from "react";
import s from './nav_link.module.scss';
import Link from "next/link";
import { usePathname } from "next/navigation";
import {INavLi} from "@/components/nav_list/nav_list";

interface Props {
  link: INavLi;
}

export const NavLink: React.FC<Props> = ({ link }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link.href}
      className={`${s.nav_link} ${pathname === link.href ? "active" : ""}`}
    >
      {link.name}
    </Link>
  );
};
