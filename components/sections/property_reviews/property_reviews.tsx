import React from "react";
import {ISectionData} from "@/app/page";
import {MainContainer} from "../../ui_components/container";
import s from "./property_reviews.module.scss";
import {MainHeading} from "@/components/ui_components/main_heading";
import {PropertyAdvantages} from "../../property_advantages";
import {MainBtn} from "@/components/ui_components/main_btn";
import {PropertySlider} from "@/components/property_slider";

interface Props {
  className?: string,
  data: ISectionData
} 

export const PropertyReviews:React.FC<Props> = ({className='', data}) => {
  const {sectionBg, sectionTitle, subtitle, features, cta_btn, data: property_reviews} = data;
  return <section className={`${className} bg_img dark_bg`} style={{ backgroundImage: `url(${sectionBg})` }}>
    <MainContainer>
      <div className={s.pr_sides}>
        <div className={s.content_side}>
          <MainHeading  title={sectionTitle} subtitle={subtitle} isWhite={true}/>
          <PropertyAdvantages features={features}/>
          <MainBtn text={cta_btn.text} href={cta_btn.href} className={s.btn}/>
        </div>
        <div className={s.sliders_side}>
          <PropertySlider slides={property_reviews} />
        </div>
      </div>
    </MainContainer>
  </section>;
} 