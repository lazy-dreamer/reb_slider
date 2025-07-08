import React from "react";
import s from "./property_features.module.scss";

interface Props {
  className?: string,
  beds: number,
  baths: number,
  building_size: number,
  land_size: number,
  land_unit: string,
  address_full: string
}

export const PropertyFeatures:React.FC<Props> = ({className='', beds, baths, building_size, land_size, land_unit, address_full}) => {
  return <ul className={`${className} ${s.features_list}`}>
    {beds && <li className={s.feature_item}><img className={s.ico} src="/ico_bed.svg" alt="ico"/><span
      className={s.text}><strong>{beds}</strong></span></li>}
    
    {baths && <li className={s.feature_item}><img className={s.ico} src="/ico_bath.svg" alt="ico"/><span
      className={s.text}><strong>{baths}</strong></span></li>}
    
    {building_size && <li className={s.feature_item}><img className={s.ico} src="/ico_house.svg" alt="ico"/><span
      className={s.text}><strong>{building_size.toLocaleString("en-US")}</strong> {land_unit}</span></li>}
    
    {land_size && <li className={s.feature_item}><img className={s.ico} src="/ico_squere.svg" alt="ico"/><span
      className={s.text}><strong>{land_size.toLocaleString("en-Us")}</strong> {land_unit}</span></li>}
    
    {address_full && <li className={s.feature_item}><img className={s.ico} src="/ico_location.svg" alt="ico"/><span className={s.text}>{address_full}</span></li>}
  </ul>;
}
