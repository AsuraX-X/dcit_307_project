import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { ALL_STYLES_QUERY } from "@/sanity/queries";
import { ALL_STYLES_QUERY_RESULT } from "@/sanity.types";
import StylesClient from "./StylesClient";

const Styles = async () => {
  let styles: (ALL_STYLES_QUERY_RESULT[number] & { imageUrl: string })[] = [];
  let failed = false;

  try {
    const data = await client.fetch<ALL_STYLES_QUERY_RESULT>(ALL_STYLES_QUERY);

    styles = data.map((s) => ({
      ...s,
      imageUrl: s.image ? urlFor(s.image).auto("format").url() : "",
    }));
  } catch {
    failed = true;
  }

  return <StylesClient styles={styles} failed={failed} />;
};

export default Styles;
