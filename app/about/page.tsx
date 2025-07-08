import {Title} from "@/components/ui_components/title";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Real Estate Bees - About",
};

export default async function Home() {
  return (
    <>
      <div className="page_table">
        <div className="page_cell">
          <Title text="About page" />
        </div>
      </div>
    </>
  );
}
