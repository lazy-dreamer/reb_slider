import React from "react";
import s from "./property_general.module.scss";
import {diffInDays} from "@/services/diffInDays";
import {getTodayIsoMidnight} from "@/services/getTodayIsoMidnight";

interface Props {
  className?: string,
  listed_date:string, 
  found_date: string, 
  price:number, 
  market_value:number, 
  close_date:string | null
}

export const PropertyGeneral:React.FC<Props> = ({className='', listed_date, found_date, price, market_value, close_date}) => {
  const foundDays = diffInDays(found_date, listed_date)
  let daysClose;
  if (close_date === null) {
    daysClose= 0;
  } else {
    const now = getTodayIsoMidnight()
    daysClose = diffInDays( now, close_date)
  }
  return <div className={`${className} ${s.general}`}>
    <div className={s.general_item}>
      <span className={s.title}>Found in {foundDays} {foundDays == 1 ? 'day' : 'days'}</span>
    </div>
    
    {price && <div className={s.general_item}>
      <span className={s.title}>${price.toLocaleString("en-US")}</span>
      <span className={s.subtitle}>Purchase price</span>
    </div>}
    
    {market_value && <div className={s.general_item}>
      <span className={s.title}>${market_value.toLocaleString("en-US")}</span>
      <span className={s.subtitle}>Market value</span>
    </div>}
    
    <div className={s.general_item}>
      <span className={s.title}>{daysClose}</span>
      <span className={s.subtitle}>{daysClose == 1 ? 'Day' : 'Days'} close</span>
    </div>
  </div>;
}