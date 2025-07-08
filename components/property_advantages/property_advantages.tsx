import React from "react";
import s from "./property_advantages.module.scss";

interface Props {
  className?: string,
  features: {
    icon: string,
    title: string
  }[]
}

export const PropertyAdvantages:React.FC<Props> = ({className='', features}) => {
  return <ul className={`${className} ${s.advantages_list}`}>
    {features.map((feature, index) => (
      <li key={index} className={s.advantage_item}>
        <img src={feature.icon} alt={feature.title} className={s.ico} />
        <span className={s.text}>{feature.title}</span>
      </li>
    ))}
  </ul>;
}