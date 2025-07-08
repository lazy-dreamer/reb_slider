import React from "react";
import s from "./main_heading.module.scss";
import {Title} from "@/components/ui_components/title";

interface Props {
  className?: string,
  title: string,
  subtitle: string,
  isWhite?: boolean
}

export const MainHeading:React.FC<Props> = ({className='', title, subtitle, isWhite=false}) => {
  return <div className={`${className} ${s.heading}`}>
    <Title text={title} isWhite={isWhite} />
    <p>{subtitle}</p>
  </div>;
}