import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "How Can Getting a Massage Benefit Me?",
  description:
    "Massage therapy has been used across cultures for centuries. Learn about different massage techniques and their benefits.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("how-can-getting-a-massage-benefit-me")!} />;
}
