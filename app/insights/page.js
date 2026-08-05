import InsightsView from "@/components/InsightsView";
import { INSIGHTS } from "@/lib/data";
import { getDbInsights } from "@/lib/cms";

export const revalidate = 300; // pick up admin edits within ~5 minutes

export default async function InsightsPage() {
  const remote = await getDbInsights();
  return <InsightsView posts={remote ?? INSIGHTS} />;
}
