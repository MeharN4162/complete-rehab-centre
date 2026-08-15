import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "Surprising Health Benefits of Massage",
  description:
    "Massage therapy isn't just for relaxation. Learn about its surprising benefits for circulation, mood, chronic pain relief and immune function.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("surprising-health-benefits-of-massage")!} />;
}
