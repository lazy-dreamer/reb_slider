import React from "react";
import {IPropertyReview} from "@/app/page";
import s from "./property_slide.module.scss";
import {PropertyGeneral} from "@/components/property_general";
import {PropertyFeatures} from "@/components/property_features";
import {PropertySellerInfo} from "@/components/property_seller_info";

interface Props {
  className?: string,
  data: IPropertyReview
}

export const PropertySlide:React.FC<Props> = ({className='', data}) => {
  const {listed_date, found_date, price, market_value, close_date, relation_label, beds, baths, building_size, land_size, land_unit, address_full, representatives} = data;
  return <div className={`${className} ${s.slide}`}>
    <div className={`${s.slide_top} bg_img`} style={{ backgroundImage: `url(${data.thumbnail.webp_url})` }}>
      <PropertyGeneral listed_date={listed_date} found_date={found_date} price={price} market_value={market_value} close_date={close_date} />
      <div className={s.slide_descr}>
        <p className={s.relation_label}>{relation_label}</p>
        <PropertyFeatures beds={beds} baths={baths} building_size={building_size} land_size={land_size} land_unit={land_unit} address_full={address_full} />
      </div>
    </div>
    <div className={s.slide_bottom}>
      {representatives && <PropertySellerInfo data={representatives[0]} />}
    </div>
  </div>;
} 