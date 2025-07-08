import {MainPage} from "@/components/pages/main_page";
import {Metadata} from "next";
import {fetchData} from "@/services/fetchData";

export const metadata: Metadata = {
  title: "Real Estate Bees",
};

export interface IPropertyReview {
  id: number,
  title: string | null,
  price: number,
  market_value: number,
  building_size: number,
  land_size: number,
  land_unit: string,
  beds: number,
  baths: number,
  address_full: string,
  slug: string,
  thumbnail: {
    url: string,
    webp_url: string
  },
  cap_rate: number | null,
  potential_profit: number | null,
  estimated_payment: number,
  relation_label: string,
  multifamily_units: number | null,
  buildings_count: number | null,
  listed_date: string,
  found_date: string,
  close_date: string,
  representatives: {
    id: number,
    first_name: string,
    last_name: string,
    image: {
      url: string,
      webp_url: string
    },
    role: string,
    rating: number
  }[]
}

export interface ISectionData {
  sectionBg: string,
  sectionTitle: string,
  titleLink: string[],
  subtitle: string,
  features: {
    icon: string,
    title: string
  }[],
  cta_btn: {
    text: string,
    href: string
  },
  data: IPropertyReview[]
}

export default async function Home() {
  const screenData = await fetchData("property-reviews");
  
  return (
    <>
      <MainPage data={screenData} />
    </>
  );
}
