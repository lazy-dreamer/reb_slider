import {Title} from "@/components/ui_components/title";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Real Estate Bees - Expert Positioning",
};

export default async function Home() {
  return (
    <>
      <div className="page_table">
        <div className="page_cell">
          <Title text="Expert Positioning page" />
        </div>
      </div>
    </>
  );
}
