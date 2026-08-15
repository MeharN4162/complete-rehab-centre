import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "Why Should I go for Acupuncture Treatment?",
  description:
    "Discover the potential benefits of acupuncture treatment, from chronic pain relief to reduced insomnia and anxiety.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("why-should-i-go-for-acupuncture-treatment")!} />;
}
