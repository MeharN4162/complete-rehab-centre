import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "Why You May Need Physiotherapy",
  description:
    "Physiotherapy isn't just for athletes. Learn the tell-tale signs that indicate you may benefit from physiotherapy treatment.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("why-you-may-need-physiotherapy")!} />;
}
