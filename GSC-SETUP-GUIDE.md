# Google Search Console Setup Guide — Nolan Ventures Portfolio

**Time:** ~15 minutes total (3 min per site)
**Why:** 100+ indexed pages across 5 sites with SEO blog posts, structured data, OG images, canonical URLs, and sitemaps — none of it surfaces properly until GSC is verified.

---

## Sites to Verify

| # | Site | Domain | Sitemap URL |
|---|------|--------|-------------|
| 1 | CraneCheck | cranecheck.com | https://cranecheck.com/sitemap.xml |
| 2 | ShieldAI | tryshieldai.com | https://tryshieldai.com/sitemap.xml |
| 3 | WeldCert | weldcert.io | https://weldcert.io/sitemap.xml |
| 4 | ClaimScribe | claimscribe.ai | https://claimscribe.ai/sitemap.xml |
| 5 | FireLog | firelog.pro | https://firelog.pro/sitemap.xml |
| 6 | FenceCalc | thefencecalc.com | https://thefencecalc.com/sitemap.xml |

---

## Step-by-Step

### 1. Go to Google Search Console
→ https://search.google.com/search-console

### 2. Add Each Property
- Click **"Add Property"** (top-left dropdown)
- Choose **"URL prefix"** method
- Enter: `https://cranecheck.com` (repeat for each domain)

### 3. Verify Ownership (Recommended: DNS TXT Record)
- GSC will give you a TXT record like: `google-site-verification=xxxxxxxxxxxx`
- Go to your DNS provider (likely Vercel Domains or your registrar)
- Add a TXT record to the root domain
- Click **Verify** in GSC

**Alternative (faster):** If domains are on Vercel:
- Use the **HTML tag** method instead
- Add `<meta name="google-site-verification" content="xxxx" />` to each site's root layout
- I can push this for all 5 non-LIVE sites if you give me the verification codes

### 4. Submit Sitemaps
After verification, for each property:
- Go to **Sitemaps** (left sidebar)
- Enter: `sitemap.xml`
- Click **Submit**

### 5. Request Indexing (Optional but Speeds Things Up)
- Go to **URL Inspection** (top search bar)
- Paste the homepage URL
- Click **"Request Indexing"**
- Repeat for 2-3 high-priority pages (e.g., /pricing, /blog, /features)
- Google limits ~10 manual requests/day per property

---

## What You'll See After Setup

Within 1-2 weeks:
- **Coverage report** — which pages are indexed, which have errors
- **Performance report** — search queries, clicks, impressions, CTR
- **Enhancements** — structured data validation (SoftwareApplication, Article, FAQ, BreadcrumbList schemas we've added)
- **Core Web Vitals** — real user performance data

---

## Current SEO Infrastructure (Already Deployed)

All 5 non-LIVE sites have:
- ✅ Dynamic XML sitemaps (auto-include all pages + blog posts)
- ✅ robots.txt allowing all crawlers + sitemap reference
- ✅ Canonical URLs on all 105+ pages
- ✅ Schema.org structured data (SoftwareApplication + Organization + FAQPage)
- ✅ Article + BreadcrumbList schema on all blog posts
- ✅ Dynamic Open Graph images for social sharing
- ✅ Complete meta descriptions + titles on every page

**FenceCalc** has GitHub Issues #6-#9 filed for the same work (LIVE product — needs Nolan to push).

---

## Priority Order

1. **CraneCheck** — 34 pages, highest content volume
2. **ClaimScribe** — 27 pages, 17 blog posts
3. **WeldCert** — 19 pages, 15 blog posts
4. **ShieldAI** — 14 pages, 6+ blog posts
5. **FireLog** — 11 pages, growing
6. **FenceCalc** — after implementing Issues #6-#9
