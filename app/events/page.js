import EventsView from "@/components/EventsView";
import { getDbEvents } from "@/lib/cms";

/* Tammy-confirmed fallback — shown whenever the CMS is not configured
   or unreachable, so the page can never go blank. */
const FALLBACK = [
  { tag: "Demo Day", tag_ko: "데모데이", title: "K-FinTech × Singapore", title_ko: "K-핀테크 × 싱가포르", when: "Q1 · Singapore", when_ko: "1분기 · 싱가포르" },
  { tag: "Roundtable", tag_ko: "라운드테이블", title: "Regulators & Founders", title_ko: "규제기관 × 창업자", when: "Q2 · Seoul", when_ko: "2분기 · 서울" },
  { tag: "Showcase", tag_ko: "쇼케이스", title: "Deep Tech Korea", title_ko: "딥테크 코리아", when: "Q3 · Singapore", when_ko: "3분기 · 싱가포르" },
  { tag: "Summit", tag_ko: "서밋", title: "K-Startup Global Day", title_ko: "K-스타트업 글로벌 데이", when: "Q4 · Singapore", when_ko: "4분기 · 싱가포르" },
];

export const revalidate = 300; // pick up Notion edits within ~5 minutes

export default async function EventsPage() {
  const remote = await getDbEvents();
  return <EventsView events={remote ?? FALLBACK} />;
}
