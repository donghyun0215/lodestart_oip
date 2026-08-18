import InsightsView from "@/components/InsightsView";
import { INSIGHTS } from "@/lib/data";
import { NEWSLETTER_ISSUES } from "@/lib/newsletter";
import { getDbInsights, getDbNewsletterIssues } from "@/lib/cms";

export const revalidate = 300; // pick up admin edits within ~5 minutes

export default async function InsightsPage() {
  const [remote, dbIssues] = await Promise.all([
    getDbInsights(),
    getDbNewsletterIssues(),
  ]);
  return (
    <InsightsView
      posts={remote ?? INSIGHTS}
      issues={dbIssues ?? NEWSLETTER_ISSUES}
    />
  );
}
