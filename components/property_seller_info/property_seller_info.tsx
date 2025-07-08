import React from "react";
import s from "./property_seller_info.module.scss";
import {RateList} from "@/components/rate_list";

interface Props {
  className?: string,
  data: {
    id: number,
    first_name: string,
    last_name: string,
    image: {
      url: string,
      webp_url: string
    },
    role: string,
    rating: number
  }
}

export const PropertySellerInfo:React.FC<Props> = ({className='', data}) => {
  const {first_name, last_name, image, role, rating} = data;
  return <div className={`${className} ${s.block}`}>
    <div className={s.seller}>
      <div className={`${s.seller_img} bg_img`} style={{ backgroundImage: `url(${image.webp_url})` }} />
      <div className={s.seller_info}>
        <div className={s.seller_name}>{`${first_name} ${last_name}`}</div>
        <div className={s.seller_position}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
            <path fill="#fff"
                  d="M4.125 5.25a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm11.933 3.435-6.75-6.75A1.49 1.49 0 0 0 8.25 1.5H3c-.833 0-1.5.667-1.5 1.5v5.25c0 .412.165.787.442 1.057l6.743 6.75c.277.27.652.443 1.065.443.412 0 .787-.172 1.057-.442l5.25-5.25c.278-.27.443-.646.443-1.058 0-.42-.172-.795-.442-1.065Z"/>
          </svg>
          <span>{role}</span>
        </div>
      </div>
    </div>
    <div className={s.seller_rate}>
      <strong>{rating}</strong>
      <RateList rate={rating}/>
    </div>
  </div>;
}