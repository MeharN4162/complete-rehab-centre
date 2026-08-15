import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "Everything You Need to Know About Chiropractic Care",
  description:
    "Chiropractic is a drug-free approach to healthcare focused on the spine and nervous system. Learn when to seek chiropractic care and its benefits.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("everything-you-need-to-know-about-chiropractic-care")!} />;
}
