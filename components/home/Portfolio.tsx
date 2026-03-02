import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { THREE_RANDOM_STYLES_QUERY } from "@/sanity/queries";
import { Style } from "@/sanity.types";
import PortfolioCards from "./PortfolioCards";
import PortfolioError from "./PortfolioError";
import Link from "next/link";

const Portfolio = async () => {
  let cards: { _id: string; name: string; imageUrl: string }[] = [];
  let failed = false;

  try {
    const styles = await client.fetch<Pick<Style, "_id" | "name" | "image">[]>(
      THREE_RANDOM_STYLES_QUERY,
    );
    cards = styles.map((s) => ({
      _id: s._id,
      name: s.name ?? "",
      imageUrl: urlFor(s.image!).auto("format").url(),
    }));
  } catch {
    failed = true;
  }

  return (
    <div className="bg-secondary px-12 uppercase tracking-widest text-center py-36">
      <p className="uppercase tracking-[0.15rem] mb-2 text-black/60 font-medium">
        Portfolio
      </p>
      <h1 className="text-4xl mb-12">Featured Styles</h1>
      {failed ? (
        <PortfolioError />
      ) : (
        <>
          <PortfolioCards cards={cards} />
          <Link href={"/styles"}>
            <button className="btn border-primary text-primary border mt-16 hover:bg-primary hover:text-white">
              View all styles
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Portfolio;
