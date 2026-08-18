import { notFound } from "next/navigation";
import { NEWSLETTER_ISSUES, getIssue } from "@/lib/newsletter";
import { getDbNewsletterIssue } from "@/lib/cms";
import NewsletterView from "@/components/NewsletterView";

/* DB issues (added via /admin) render on demand; built-in issues are
   prerendered. dynamicParams stays true so a slug that only exists in
   Supabase still resolves. */
export const revalidate = 300;

export function generateStaticParams() {
  return NEWSLETTER_ISSUES.map((i) => ({ issue: i.id }));
}

async function resolve(issue) {
  return (await getDbNewsletterIssue(issue)) ?? getIssue(issue);
}

export async function generateMetadata({ params }) {
  const { issue } = await params;
  const it = await resolve(issue);
  if (!it) return {};
  return {
    title: `KIP Monthly ${it.vol} — K-Innovation Partners`,
    description: it.title,
  };
}

export default async function Page({ params }) {
  const { issue } = await params;
  const it = await resolve(issue);
  if (!it) notFound();
  return <NewsletterView issue={it} />;
}
