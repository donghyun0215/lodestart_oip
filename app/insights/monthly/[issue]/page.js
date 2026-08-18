import { notFound } from "next/navigation";
import { NEWSLETTER_ISSUES, getIssue } from "@/lib/newsletter";
import NewsletterView from "@/components/NewsletterView";

export function generateStaticParams() {
  return NEWSLETTER_ISSUES.map((i) => ({ issue: i.id }));
}

export async function generateMetadata({ params }) {
  const { issue } = await params;
  const it = getIssue(issue);
  if (!it) return {};
  return {
    title: `KIP Monthly ${it.vol} — K-Innovation Partners`,
    description: it.title,
  };
}

export default async function Page({ params }) {
  const { issue } = await params;
  const it = getIssue(issue);
  if (!it) notFound();
  return <NewsletterView issue={it} />;
}
