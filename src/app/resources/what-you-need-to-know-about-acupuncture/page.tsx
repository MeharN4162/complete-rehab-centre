import type { Metadata } from "next";
import { getArticleBySlug } from "@/data/articles";
import ArticleTemplate from "@/components/shared/ArticleTemplate";

export const metadata: Metadata = {
  title: "What You Need To Know About Acupuncture",
  description:
    "Understand how acupuncture works, what to expect during a session, and which conditions it may help with.",
};

export default function Page() {
  return <ArticleTemplate article={getArticleBySlug("what-you-need-to-know-about-acupuncture")!} />;
}
