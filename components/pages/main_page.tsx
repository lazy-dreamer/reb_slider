import React from "react";
import {PropertyReviews} from "@/components/sections/property_reviews";
import {ISectionData} from "@/app/page";

interface Props {
  className?: string,
  data: ISectionData
}

export const MainPage:React.FC<Props> = ({className='', data}) => {
  return <div className={`${className}`}>
    <PropertyReviews data={data} />
  </div>;
}