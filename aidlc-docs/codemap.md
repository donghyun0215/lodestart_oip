# Codemap — lodestart_oip

Read this first, then open only the files the task touches. Regenerate with
`python3 scripts/codemap.py .` after adding routes, tables, or env vars.

- Generated at: 65ae2da 2026-08-18 v17: one-step newsletter workflow — auto email HTML at /insights/monthly/[issue]/email (links absolute from request origin), admin row link, guide updated, manual export removed
- Files mapped: 53 · code LOC: 11,836
- Scripts: `dev`, `build`, `start`, `lint`
- Deps: next, react, react-dom

## API endpoints
- app/api/admin/[table]/route.js · GET, POST, PATCH, DELETE
- app/api/intake/route.js · POST
- app/insights/monthly/[issue]/email/route.js · GET

## Environment variables
- `ADMIN_PASSWORD`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`

## Biggest files (open these surgically — grep for the symbol, don't cat)
- lib/data.js — 3964 LOC
- lib/i18n.js — 787 LOC
- app/admin/page.js — 397 LOC
- app/open-innovation/page.js — 269 LOC
- components/ChallengeCard.js — 268 LOC
- components/ThemeCard.js — 244 LOC
- app/page.js — 243 LOC
- components/StartupView.js — 240 LOC
- components/NewsletterView.js — 202 LOC
- components/SwimmySection.js — 188 LOC
- scripts/codemap.py — 165 LOC
- app/startups/page.js — 165 LOC

## Exports by file
- **app/api/admin/[table]/route.js** (97): DELETE, GET, PATCH, POST
- **app/api/intake/route.js** (46): POST
- **app/events/page.js** (18): revalidate
- **app/insights/monthly/[issue]/email/route.js** (127): GET, dynamic
- **app/insights/monthly/[issue]/page.js** (34): generateMetadata, generateStaticParams, revalidate
- **app/insights/page.js** (19): revalidate
- **app/layout.js** (32): metadata
- **app/open-innovation/[slug]/page.js** (18): generateMetadata, generateStaticParams
- **app/startups/[slug]/page.js** (18): generateMetadata, generateStaticParams
- **components/Bits.js** (40): Banner, NumCard, RuleTitle
- **components/LanguageProvider.js** (65): LangToggle, LanguageProvider, useLang
- **lib/cms.js** (108): cmsConfigured, getDbEvents, getDbInsights, getDbNewsletterIssue, getDbNewsletterIssues
- **lib/data.js** (3964): CHALLENGES, CHALLENGE_PLATFORMS, CHALLENGE_SECTORS, CHALLENGE_STATUS, FLOW, INSIGHTS, ORGS, ORG_TYPES, PARTNERS, PROGRAMMES, PROGRAMME_BY_COMPANY, SECTORS, SERVICES, STARTUPS, STARTUP_THEMES, TRUSTED_BY
- **lib/i18n.js** (787): STRINGS, pick
- **lib/newsletter.js** (89): NEWSLETTER_ISSUES, getIssue
- **scripts/codemap.py** (165): rel_files, loc, read, scan, tree, main

## Tree (depth 3)
```
README.md
SUBSTACK_SETUP.md
SUPABASE_SETUP.md
app/
  admin/
    page.js
  api/
    admin/
    intake/
  contact/
    page.js
  events/
    page.js
  globals.css
  insights/
    monthly/
    page.js
  layout.js
  newsletter/
    page.js
  open-innovation/
    [slug]/
    page.js
  outreach/
    page.js
  page.js
  services/
    page.js
  startups/
    [slug]/
    page.js
components/
  Bits.js
  CallChart.js
  ChallengeCard.js
  CompanyCard.js
  EventsView.js
  Footer.js
  InsightsView.js
  LanguageProvider.js
  Logo.js
  Marquee.js
  Nav.js
  NewsletterView.js
  OrgCard.js
  OrgRow.js
  OrgView.js
  ProgrammeCard.js
  Reveal.js
  StartupRow.js
  StartupView.js
  SwimmySection.js
  SwimmyWater.js
  TeamMember.js
  ThemeCard.js
eslint.config.mjs
jsconfig.json
lib/
  cms.js
  data.js
  i18n.js
  newsletter.js
next.config.mjs
package.json
scripts/
  codemap.py
```
