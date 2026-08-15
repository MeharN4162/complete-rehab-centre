import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "The Benefits of Physiotherapy",
  description:
    "From better posture to better mobility, discover the key benefits physiotherapy can offer patients of all ages.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("the-benefits-of-physiotherapy")!} />;
}
