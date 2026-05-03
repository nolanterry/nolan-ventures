# Portfolio Operating System

**For:** Nolan Terry | **Version:** 1.1 | **Last Updated:** 2026-05-02

A decision framework for validating, building, and scaling a vertical SaaS portfolio as a solo operator with AI leverage.

---

## 1. Product Validation Scorecard (Pre-Build)

Score each dimension 1-10. Be honest — this kills bad ideas before they kill your time.

| Dimension | Score | Questions to Answer | Data Sources |
|-----------|-------|--------------------| -------------|
| **Pain Acuteness** | /10 | Is this a painkiller or vitamin? Do they lose money/time/compliance without a solution? Is the pain daily or annual? | Customer interviews, Reddit/forum complaints, industry fines/penalties data |
| **Buyer Accessibility** | /10 | Can you reach 100 prospects in a week? Are they on LinkedIn/email? Do they answer cold outreach? Are there concentrated communities? | LinkedIn Sales Nav count, trade association directories, Facebook group sizes, industry event lists |
| **Willingness to Pay** | /10 | Do they already pay for software? What's their current spend? Is this a line item they understand? Would they pay before seeing the product? | Competitor pricing pages, G2/Capterra reviews mentioning price, interview responses, existing tool spend |
| **Competitive White Space** | /10 | Who else solves this? How well? Are incumbents asleep or just invisible to you? Is the gap real or perceived? | G2 category search, Crunchbase funding data, Google Ads keyword competition, app store searches, trade publication ads |
| **TAM + Expansion Path** | /10 | Can you dominate the wedge market? Is there a clear path from niche → adjacent → platform? Is the wedge small enough to avoid VC competition? | IBISWorld reports, Census Bureau (NAICS codes), trade association membership counts, Crunchbase (check for funded competitors), expansion market sizing |
| **Channel Fit** | /10 | Does a proven, affordable channel exist to reach these buyers? Can you test it in <$500? Is CAC likely <1/3 of first-year ACV? | Facebook Ads audience builder, Google Keyword Planner, LinkedIn audience estimates, cold email test results |
| **Technical Feasibility** | /10 | Can you ship an MVP in <4 weeks with AI assistance? Are there hard integrations (QuickBooks, state APIs)? Do you need domain expertise you lack? | API documentation review, similar product teardowns, tech stack assessment |

### Scoring Rules

| Total Score | Decision |
|-------------|----------|
| **56-70** | Build immediately — strong signal across all dimensions |
| **45-55** | Proceed with caution — validate weak dimensions first |
| **35-44** | Requires pivots — 2+ critical weaknesses need resolution before building |
| **<35** | Kill — fundamental market/channel problems |

### Kill Criteria (Pre-Build)

- Any single dimension scores **≤2** = automatic kill (fatal flaw)
- Pain Acuteness + Willingness to Pay combined **<10** = kill (no one will pay)
- Buyer Accessibility + Channel Fit combined **<8** = kill (can't reach them affordably)
- Competitive White Space **≤3** AND no clear differentiation angle = kill

### TAM + Expansion Path Scoring (Thiel Wedge Model)

**Core principle:** Score the wedge on "can I monopolize this?" and the expansion on "is there a path to $500M+?" A small niche you can own beats a large market where you're one of ten.

| Score | Wedge TAM | Expansion Path | VC Competition | Example |
|-------|-----------|----------------|----------------|---------|
| **10/10** | $20-100M (ownable niche) | Clear path to $500M+ through adjacent verticals | Zero funded competitors | Fence estimating → fence OS → contractor OS |
| **8-9/10** | $50-200M (ownable with effort) | Path to $200-500M through vertical expansion | 1 underfunded competitor | Fire compliance → building compliance → facility management |
| **6-7/10** | $100-500M (harder to dominate) | Adjacent markets exist but expansion is unclear | 1-2 competitors, none dominant | General SMB invoicing (big market but competitive) |
| **4-5/10** | <$15M (ceiling too low, even with expansion) OR $500M+ with funded players | Limited expansion path OR crowded expansion markets | 2-3 funded competitors | Niche tool in dying industry |
| **1-3/10** | Any size but 3+ well-funded competitors already there | Expansion markets dominated by incumbents | VC-saturated | Restaurant POS (Toast, Square, Clover already won) |

**The Thiel Test (Zero to One):**
1. Can you capture 50%+ of the wedge market within 24 months?
2. Is the wedge small enough that no VC-backed company will pursue it?
3. Does winning the wedge give you an unfair advantage in the next market?
4. Can you expand concentrically without rebuilding from scratch?

If yes to all 4 → score 9-10. If yes to 3 → score 7-8. If yes to <2 → score 4 or below.

### Wedge → Platform Expansion Framework

Every product should have a mapped expansion path before building. If you can't draw this path, the TAM ceiling is real.

```
STAGE 1: WEDGE (Months 1-12)
│ Single tool solving one acute pain
│ Goal: Monopolize the niche. 50%+ market share.
│ Revenue: $79-149/mo per customer
│ Example: Fence estimating calculator
│
STAGE 2: WORKFLOW EXPANSION (Months 6-18)
│ Add adjacent features the buyer needs daily
│ Goal: Become the tool they open every morning
│ Revenue: $149-299/mo per customer
│ Example: Add CRM, job scheduling, invoicing to FenceCalc
│
STAGE 3: VERTICAL DOMINATION (Months 12-36)
│ Full operating system for the niche
│ Goal: 70%+ of their business runs on your platform
│ Revenue: $299-499/mo + embedded finance (payments, lending)
│ Example: Complete fence contractor OS with payment processing
│
STAGE 4: ADJACENT EXPANSION (Months 24-48)
│ Fork the playbook into neighboring verticals
│ Goal: Apply proven product + GTM to similar buyers
│ Revenue: Multiply customer base 5-10x
│ Example: Deck contractors, general contractors, landscaping
│
STAGE 5: PLATFORM (Months 36-60+)
│ Horizontal layer across verticals
│ Goal: Network effects kick in — data, marketplace, financing
│ Revenue: $500-1,000+ effective revenue per customer
│ Example: Contractor OS across trades with shared data, lending, insurance
```

**Revenue per customer expansion (FenceCalc example):**

| Stage | Product | Price | Embedded Finance | Effective Revenue/Customer |
|-------|---------|-------|------------------|---------------------------|
| Wedge | Estimating tool | $79/mo | — | $79/mo |
| Workflow | + CRM + scheduling | $149/mo | — | $149/mo |
| Vertical | + invoicing + payments | $199/mo | 2.5% on $15K/mo in jobs = $375/mo | $574/mo |
| Vertical+ | + customer financing | $199/mo | + 4% on $8K/mo financed = $320/mo | $894/mo |
| Platform | + materials ordering + insurance | $249/mo | + supplier kickbacks + insurance commissions | $1,200+/mo |

**The wedge doesn't need to be innovative. It needs to be the door.** Once you own the daily workflow, switching costs compound and you capture 10x the revenue per customer through expansion.

---

## 2. PMF Testing Framework

### Stage 1: Problem Validation (Before Code)

**Timeline:** 2 weeks | **Cost:** $0-200

| Activity | Target | How |
|----------|--------|-----|
| Customer interviews | 10 conversations | Cold LinkedIn DMs, trade association intros, Reddit outreach |
| Pain ranking | Top-3 pains identified | Ask: "What's the most annoying part of your week?" — let them talk |
| WTP signal | 7/10 say "I'd pay for that" | Ask: "If this existed at $X/mo, would you sign up today?" |
| Current workflow | Document how they do it now | Screen shares, photos of paper processes, spreadsheet tours |

**Gate:** 7/10 interviewees confirm the pain is top-3 in their workflow AND express willingness to pay. If <5/10, kill or pivot the problem.

**Red flag:** They say "that'd be nice" instead of "where do I sign up?"

### Stage 2: Solution Validation (MVP/Prototype)

**Timeline:** 2-4 weeks | **Cost:** $200-1,000

| Activity | Target | How |
|----------|--------|-----|
| Landing page test | >5% signup on cold traffic | Carrd/Framer page + $300 in targeted ads |
| Fake door test | >3% click on pricing/CTA | Show pricing page before product exists, measure clicks |
| Waitlist with deposit | >2% put down $50-100 | "Reserve your spot" with refundable deposit |
| Demo video response | >10% reply rate | Send Loom walkthrough to interview contacts, ask "would you use this?" |

**Gate:** >5% conversion on cold traffic (ad click → signup/waitlist). If <2%, the positioning is wrong or the problem isn't acute enough.

**For sales-led (contractors):** Replace landing page conversion with:
- 5/10 interview contacts agree to a paid pilot
- 2+ prospects offer to pay before product is built
- A contractor shares it with another contractor unprompted

### Stage 3: Revenue Validation (Live Product)

**Timeline:** 30-60 days post-launch | **Cost:** Variable

| Metric | Target (Sales-Led) | Target (PLG) |
|--------|--------------------| -------------|
| Activation rate (signup → core action) | >40% | >25% |
| Day 7 retention | >60% | >40% |
| Free → Paid conversion | >10% within 14 days | >2% within 30 days |
| CAC payback | <3 months | <6 months |
| NPS/referral | 1+ organic referral per 10 users | Viral coefficient >0.3 |
| Revenue | $1K MRR within 60 days | $500 MRR within 90 days |

**Gate:** Hitting 3/5 targets = continue. Hitting 1/5 = pivot. Hitting 0/5 after 60 days = kill.

### PLG vs Sales-Led: Which Metrics Matter

**Contractors, tradespeople, compliance officers = Sales-Led.** These buyers:
- Don't browse app stores
- Don't do free trials without a push
- Need someone to show them why it matters
- Buy on trust and relationships
- Respond to peer recommendations and demos

**Use PLG only when:** The buyer is tech-literate, self-serves daily, and the product has viral mechanics (sharing, collaboration, network effects).

---

## 3. Channel-Market Fit Analysis

### Channel Decision Tree

```
WHO IS THE BUYER?
│
├── Trade Contractor (fence, HVAC, roofing, crane)
│   ├── Finds software through: peers, supply house reps, trade shows, Facebook groups
│   ├── PRIMARY: Outbound (cold call > cold email), Facebook groups, supply house partnerships
│   ├── SECONDARY: Google Ads (they search "fence estimate app"), YouTube demos
│   └── AVOID: PLG, content marketing, LinkedIn, Twitter
│
├── Compliance/Safety Officer (fire marshal, inspector)
│   ├── Finds software through: regulations, association newsletters, conferences
│   ├── PRIMARY: Association partnerships, conference booths, regulatory body relationships
│   ├── SECONDARY: Google Ads (compliance-specific terms), cold email
│   └── AVOID: Social media, PLG, broad content marketing
│
├── SMB Owner (general)
│   ├── Finds software through: Google, peer recommendations, accountant/bookkeeper referrals
│   ├── PRIMARY: Google Ads, SEO, referral partnerships (accountants, coaches)
│   ├── SECONDARY: Cold email, Facebook Ads, local networking
│   └── AVOID: LinkedIn (too enterprise), trade shows (too niche)
│
└── Knowledge Worker / Tech-Forward SMB
    ├── Finds software through: Product Hunt, Twitter, newsletters, app stores
    ├── PRIMARY: PLG, content marketing, SEO, community-led growth
    ├── SECONDARY: Paid social, influencer partnerships
    └── AVOID: Cold calling, trade shows
```

### Channel Fit Scoring

| Channel | Best For | CAC Range | Time to Signal | Test Cost |
|---------|----------|-----------|----------------|-----------|
| Cold call/SMS | Contractors, blue collar | $200-500 | 1 week | $0 (time) |
| Cold email | Office-based SMB, compliance | $100-300 | 2 weeks | $100 (tools) |
| Facebook Groups | Trades, local services | $50-200 | 2 weeks | $0 |
| Google Ads | Active searchers, pain-aware | $150-400 | 1 week | $500 |
| Partnerships (supply houses, associations) | Niche verticals | $50-150 | 1-3 months | $0-1K |
| PLG/Viral | Tech-forward, collaborative tools | $20-80 | 1-3 months | $0 |
| SEO/Content | Evergreen demand, searchable problems | $30-100 | 3-6 months | $0 (time) |

### The Contractor Channel Stack (Your Primary Market)

1. **Week 1-2:** 50 cold calls + 200 cold emails/SMS to validate messaging
2. **Week 2-4:** Facebook group presence (answer questions, share free tool)
3. **Week 4-8:** Supply house partnership (co-market through their customer base)
4. **Month 2+:** Google Ads on "[vertical] + software/app/calculator"
5. **Month 3+:** Referral program (existing users → peers)

---

## 4. Competitive Moat Framework

### White Space Assessment Matrix

| Question | If YES | If NO |
|----------|--------|-------|
| Are there 3+ funded competitors? | Space is validated but crowded — need angle | Either too early or too small for VC (good for bootstrap) |
| Do incumbents have >$10M ARR? | They own the market — need wedge strategy | Market is up for grabs |
| Are G2/Capterra reviews >4.2 stars? | Incumbents are good — think twice | Incumbents are vulnerable — attack |
| Is the incumbent's product >5 years old without major updates? | Legacy tech debt = opportunity | They're actively investing — harder to displace |
| Do customers complain about price in reviews? | Pricing wedge exists | They accept the price — compete on product |

### Moat Types for Vertical SaaS

| Moat Type | Description | Time to Build | Strength |
|-----------|-------------|---------------|----------|
| **Workflow Lock-in** | Product becomes embedded in daily operations; switching = retraining staff | 6-12 months of usage | ★★★★★ |
| **Data Network Effects** | More users = better estimates, benchmarks, pricing intelligence | 100+ active users | ★★★★☆ |
| **Embedded Finance** | Process payments/lending through your platform; revenue stacks | 12+ months, transaction volume needed | ★★★★★ |
| **Distribution Advantage** | Partnership with supply house/association = built-in channel | 3-6 months to establish | ★★★☆☆ |
| **Regulatory Compliance** | Product required by law/regulation; switching = compliance risk | Regulatory relationship | ★★★★★ |
| **AI/Data Moat** | Proprietary training data from vertical usage improves product | 6-12 months of data collection | ★★★★☆ |

### Incumbent Vulnerability Test

Score each 1-5:

1. **Product freshness:** When did they last ship a major feature? (>2 years = vulnerable)
2. **Pricing bloat:** Are they charging $300+/mo for what could be $50/mo? (Big gap = vulnerable)
3. **Customer satisfaction:** Average review score <3.5? (Unhappy customers = vulnerable)
4. **Technology debt:** Built on old stack? Mobile-unfriendly? No API? (Old tech = vulnerable)
5. **Market attention:** Are they focused on enterprise while SMB is underserved? (Segment neglect = vulnerable)

**Score 20+/25:** Incumbent is very vulnerable — attack aggressively
**Score 15-19:** Moderate vulnerability — need clear angle
**Score <15:** Incumbent is strong — find a different wedge or different market

### "Would They Copy This in 6 Months?" Test

If yes to 2+ of these, your feature isn't a moat:
- [ ] It's a single feature, not a workflow
- [ ] It requires no proprietary data
- [ ] It doesn't change their business model
- [ ] Their dev team could build it in a sprint
- [ ] It doesn't require new distribution/partnerships

---

## 5. Embedded Finance Playbook

### What Embedded Finance Means for Vertical SaaS

| Type | Description | Revenue Model | Example |
|------|-------------|---------------|---------|
| **Payments** | Process customer payments through your platform | 2.5-3.5% of transaction volume | FenceCalc → customer pays deposit through estimate link |
| **Invoicing/AR** | Generate and collect on invoices | 1-2% of collected amount | Automated invoice from completed job |
| **Lending** | Offer financing to end customers | 3-8% of loan originated | "Finance this fence: $200/mo for 24 months" |
| **Insurance** | Embed coverage into workflows | 10-20% commission on premium | Workers comp, project liability |
| **Payroll** | Process subcontractor payments | $5-15/payment + float income | Pay subs through platform after job completion |

### Revenue Impact Model

**Example: FenceCalc with Payment Processing**

| Assumption | Value |
|------------|-------|
| Active contractors | 200 |
| Average estimates/month per contractor | 15 |
| Average estimate value | $8,000 |
| Estimates that convert to jobs | 40% |
| Jobs paid through platform | 30% (of converted) |
| Payment processing margin | 1.0% (after Stripe fees) |
| **Monthly fintech revenue** | **$14,400** |
| **Annual fintech revenue** | **$172,800** |
| SaaS revenue (200 × $79/mo) | $189,600/yr |
| **Total revenue with embedded finance** | **$362,400/yr** |

Embedded finance nearly **doubles** revenue at scale without adding customers.

### When to Introduce (Sequencing)

| Stage | Focus | Don't Do Yet |
|-------|-------|--------------|
| 0-50 users | Core workflow, activation, retention | Any fintech |
| 50-200 users | Payment links on estimates/invoices | Lending, insurance |
| 200-500 users | Full payment processing, basic financing | Complex lending, payroll |
| 500+ users | Lending, insurance, payroll, cards | — go wild |

**Rule:** Never lead with embedded finance. It's a monetization multiplier, not a product. Users need to trust your workflow first.

### Opportunities by Vertical

| Vertical | Primary Fintech Opportunity | Secondary |
|----------|---------------------------|-----------|
| Fence contractors | Payment processing on estimates, customer financing | Sub-contractor payments |
| Fire log compliance | Compliance insurance, penalty protection | — |
| Crane inspection | Equipment insurance, certification payments | Lending for equipment |
| General contractors | Payments, sub-payments, customer financing | Materials financing, insurance |

---

## 6. Portfolio Network Effects

### Shared Infrastructure Stack

| Layer | Build Once, Use Everywhere | ROI |
|-------|---------------------------|-----|
| **Auth + User Management** | Single auth system (Clerk/Auth0), shared user profiles | Saves 1-2 weeks per product |
| **Billing + Subscriptions** | Stripe integration, usage metering, dunning | Saves 2-3 weeks per product |
| **PDF/Document Engine** | Estimate/report generation, white-labeling, templates | Core to 4+ verticals |
| **AI Layer** | Shared fine-tuned models, RAG pipeline, prompt library | Compounds with data |
| **Notification System** | Email, SMS, push — one system, all products | Saves 1 week per product |
| **Analytics/Metrics** | Unified dashboard across portfolio | Portfolio-level visibility |

### Cross-Sell Framework

```
Contractor uses FenceCalc
  → Sees "Also from [Brand]: CraneCheck for your equipment inspections"
  → Refers a fire marshal friend → FireLog signup
  → Portfolio effect: shared customer directory grows
```

| Cross-Sell Type | When It Works | Mechanism |
|-----------------|--------------|-----------|
| Same buyer, different need | Buyer has multiple pain points | In-app promotion, email campaigns |
| Same industry, different role | Company has multiple software buyers | Account-based expansion |
| Adjacent industry | Similar workflow, different vertical | Shared brand trust, templates |

### Data Network Effects

| Data From | Makes Better | How |
|-----------|-------------|-----|
| FenceCalc estimates | FenceCalc pricing suggestions | "Contractors in your area charge $X/ft for this fence type" |
| CraneCheck inspections | CraneCheck risk scoring | "This crane model fails inspection 40% of the time at 8+ years" |
| All products combined | AI models for all verticals | Shared understanding of contractor workflows, pricing, scheduling |

### When Portfolio Effects Kick In

- **2 products with revenue:** Shared infrastructure saves time, cross-sell begins
- **3-4 products with revenue:** Data flywheel starts, brand recognition in vertical
- **5+ products with revenue:** Platform economics — new products launch faster, grow faster, convert better

---

## 7. Solo Operator EOS (Operating Cadence)

### Weekly Cadence (Every Monday, 30 min)

| Check | Action |
|-------|--------|
| Revenue dashboard | Any products hit/miss targets? |
| Activation rates | Are new signups using the product? |
| Pipeline | How many prospects in active conversations? |
| Churn signals | Anyone cancel or go inactive? |
| Distribution metrics | Outreach volume, reply rates, demo conversions |
| AI agent output | Review what was built/shipped/published this week |
| **Decision:** | What's the #1 priority this week? |

### Monthly Cadence (First of Month, 1 hour)

| Review | Questions |
|--------|-----------|
| Product health | Each product: growing, flat, or declining? Why? |
| Kill/continue | Any product hitting kill criteria? Be honest. |
| Channel performance | Which channels are working? Double down or cut. |
| Financials | MRR, burn, runway, unit economics per product |
| Competitive moves | Any new competitors? Incumbent changes? |
| **Decision:** | Kill anything? Shift resources? |

### Quarterly Cadence (Every 90 days, half day)

| Activity | Output |
|----------|--------|
| Set 3 Rocks (90-day goals) | Max 3 outcomes that move the needle |
| Portfolio strategy review | Is the thesis still valid? Market shifts? |
| New product evaluation | Run scorecard on 2-3 new ideas |
| Financial model update | Project forward 12 months |
| Competitive landscape scan | Full market review |
| **Decision:** | What to build next? What to kill? |

### Annual Cadence (December/January, full day)

- Thesis review: Is vertical SaaS still the play?
- Market shifts: AI impact, regulatory changes, economic conditions
- Portfolio valuation: What's the whole thing worth?
- 3-year roadmap: Where should revenue come from?
- Personal capacity: What's working/not working in the operating model?

### Rocks Framework (90-Day Goals)

**Rules:**
- Maximum 3 rocks per quarter
- Each rock has a measurable outcome (number, ship date, or yes/no)
- Review progress weekly
- If a rock isn't on track by day 45, adjust scope or kill it

**Example Q3 2026 Rocks:**
1. FenceCalc: 50 paying customers at $79/mo ($3,950 MRR)
2. CraneCheck: Complete problem validation (10 interviews + landing page test)
3. Infrastructure: Shared billing + auth system deployed across 2 products

### Portfolio Scoreboard

Track these 5-7 numbers weekly:

| Metric | Current | Target |
|--------|---------|--------|
| Total MRR (all products) | $0 | $5,000 by Q4 2026 |
| Active paying customers | 0 | 75 |
| Activation rate (avg) | — | >30% |
| Monthly churn rate | — | <5% |
| Outreach volume (weekly) | — | 200+ touches |
| Reply/response rate | — | >5% |
| Products with revenue | 0 | 2 |

---

## 8. Kill Criteria (Hard Rules)

No emotions. No sunk cost fallacy. These are binary.

| Trigger | Timeline | Decision |
|---------|----------|----------|
| 0 paying customers after active distribution | 30 days | **Kill** |
| <1% reply rate on 500+ cold outreach attempts | 3 weeks | Pivot channel. If 2nd channel also fails, **kill** |
| <2% activation rate (signup → core action) | 30 days with 50+ signups | **Kill** — product doesn't solve the problem |
| <40% Day-7 retention (sales-led) | 60 days | Major pivot or **kill** |
| Negative unit economics (CAC > 12-month LTV) | 90 days | **Kill** |
| No moat identified | 60 days | Deprioritize — milk for cash but don't invest |
| Founder lost conviction | Any time | **Kill** — you won't outwork someone who believes |
| Wedge TAM <$10M with no expansion path | Any time | **Kill** — ceiling too low even with domination |

### Anti-Kill Rules (Don't Kill Prematurely)

- Don't kill before you've done real distribution (building ≠ distributing)
- Don't kill based on 1 week of data — need 50+ data points minimum
- Don't kill because it's hard — kill because metrics say it won't work
- Don't kill if you haven't talked to 10+ prospects

---

## 9. The "1-Man Billion Dollar Company" Thesis

### Core Premise

AI collapses the cost of building software by 10-50x. One person with AI leverage can now build and maintain what previously required a 10-50 person team. This means:

- **Build cost** drops from $500K to $50K per product
- **Maintenance cost** drops from $200K/yr to near-zero with AI ops
- **Speed** increases from 6-12 months to 4-8 weeks per product
- **Portfolio capacity** increases from 1 product to 5-15 products

### The Portfolio Math

| Scenario | Products | ARR Each | Total ARR | Valuation (5-10x) |
|----------|----------|----------|-----------|-------------------|
| Conservative | 5 | $500K | $2.5M | $12.5-25M |
| Base case | 8 | $1M | $8M | $40-80M |
| Ambitious | 10 | $3M | $30M | $150-300M |

**The key insight:** You don't need any single product to be a unicorn. You need 8-10 products that each do $1-3M ARR in verticals too small for VC-backed companies to pursue.

### Why This Works

1. **Pricing power compression:** Legacy vertical SaaS charges $300-500/mo. Modern AI-built tools can deliver 80% of the value at $49-99/mo. The delta is your wedge.
2. **VC-sized holes:** Markets of $50-200M TAM are too small for VC ($1B+ outcomes needed) but perfect for a solo operator ($5-30M outcomes).
3. **Mission-critical > nice-to-have:** Compliance, legal mandates, and financial workflows have built-in demand. People MUST do them. Churn is structurally lower.
4. **Compound returns:** Each product teaches you the next one. Infrastructure compounds. Brand compounds. Customer relationships compound.

### Investment Mindset

Treat each product as a portfolio investment:

| Product | "Investment" (Time) | Expected Return | Risk |
|---------|---------------------|-----------------|------|
| FenceCalc | 6 weeks build + 12 weeks GTM | $500K-2M ARR if it works | Medium — competitive |
| FireLog | 4 weeks build + 8 weeks GTM | $300K-1M ARR if it works | Low — regulatory demand |
| CraneCheck | 4 weeks build + 12 weeks GTM | $1-3M ARR if it works | Medium — niche |

**Expected value:** If 3/10 products hit $1M+ ARR and 4/10 hit $200-500K ARR, portfolio ARR = $4-5M. At a 30% hit rate, this is a great portfolio.

---

## 10. Applied to Current Portfolio

### FenceCalc — Validation Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pain Acuteness | 6/10 | Estimating is painful but many use spreadsheets/paper happily. Not compliance-driven. |
| Buyer Accessibility | 7/10 | Fence contractors are on Facebook, findable via Google Maps, answer phones |
| Willingness to Pay | 5/10 | **Unknown.** Have you validated $79/mo pricing with 10+ contractors? |
| Competitive White Space | 4/10 | Jobber, ServiceTitan, Fence Estimate Pro exist. What's the wedge? |
| TAM + Expansion Path | 8/10 | Wedge: ~40K fence contractors ($3.8M ARR ceiling at $79/mo). But expansion path is strong: estimating → CRM → full contractor OS → adjacent trades (deck, landscape, general). Wedge is small enough that no VC will compete. Path to $500M+ TAM through concentric expansion. |
| Channel Fit | 7/10 | Cold call + Facebook groups work for contractors |
| Technical Feasibility | 9/10 | Straightforward build, no hard integrations |
| **Total** | **46/70** | **Proceed with caution — validate WTP, but expansion path is the real asset** |

**Missing data:** Willingness to pay validation, competitive differentiation clarity
**Expansion path:** Fence estimating ($79/mo) → Fence CRM + scheduling ($149/mo) → Fence OS with payments ($199/mo + 2.5% processing) → Fork to deck/landscape/general contractors. Effective revenue grows from $79 → $500+/customer/mo.
**Recommendation:** **Validate WTP hard.** The wedge TAM is small but ownable, and the expansion path is the real play. Need 10 conversations where contractors say "I'd pay $79/mo for this TODAY." If you can't get that, the wedge doesn't work and the expansion path is moot.

### CraneCheck — Validation Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pain Acuteness | 7/10 | Inspections are legally mandated. Paper-based processes are slow and error-prone. |
| Buyer Accessibility | 5/10 | Crane operators/companies are niche. Harder to reach than general contractors. |
| Willingness to Pay | 6/10 | Compliance = budget exists. But haven't validated price point. |
| Competitive White Space | 6/10 | Some incumbents but old/expensive. Real gap at SMB price point. |
| TAM + Expansion Path | 7/10 | Wedge: ~15K crane companies (small, ownable). Expansion: crane inspections → heavy equipment inspections → industrial safety compliance → OSHA compliance OS. High ACV ($150-300/mo). Path to $200M+ TAM. No VC competition in the wedge. |
| Channel Fit | 5/10 | Trade shows, OSHA consultants, insurance partnerships. Slower channels. |
| Technical Feasibility | 7/10 | Need domain expertise on inspection standards. AI can help parse regulations. |
| **Total** | **43/70** | **Risky but has compliance moat potential + good expansion path. Needs problem validation.** |

**Missing data:** Customer interviews, price validation, channel test results
**Recommendation:** **Run Stage 1 validation.** Do 10 interviews with crane company safety managers. If compliance pain is confirmed and they'd pay $200+/mo, proceed. If not, kill.

### FireLog — Validation Scorecard

| Dimension | Score | Notes |
|-----------|-------|-------|
| Pain Acuteness | 8/10 | Regulatory requirement. Fines for non-compliance. Clear pain. |
| Buyer Accessibility | 6/10 | Fire marshals, building managers, compliance officers. Reachable via municipalities. |
| Willingness to Pay | 7/10 | Budget exists for compliance tools. Government/institutional buyers = reliable. |
| Competitive White Space | 7/10 | Fragmented market, mostly paper or generic spreadsheets. No clear SaaS leader. |
| TAM + Expansion Path | 7/10 | Wedge: building managers with fire log requirements (niche, ownable). Expansion: fire compliance → building safety compliance → facility management compliance OS. Government/institutional buyers = stable. Path to $300M+ TAM. Zero VC interest in fire log compliance. |
| Channel Fit | 5/10 | Government procurement is slow. Association partnerships could work. |
| Technical Feasibility | 8/10 | Straightforward — forms, scheduling, reminders, PDF reports. |
| **Total** | **48/70** | **Strongest of the three. Compliance-driven demand + clean expansion path.** |

**Missing data:** Exact TAM sizing, procurement cycle length, price validation
**Recommendation:** **Continue — highest conviction.** Run 10 interviews with building managers/fire marshals. Validate $49-99/mo pricing. If TAM is >$20M, this becomes priority #1.

### Portfolio Recommendation

| Product | Verdict | Next Step |
|---------|---------|-----------|
| FireLog | **Continue** — strongest fundamentals | 10 interviews in next 2 weeks. Size TAM. |
| FenceCalc | **Validate or Kill** — competitive, unvalidated WTP | 10 pricing conversations in 1 week. If <5 would pay, kill. |
| CraneCheck | **Pause** — needs problem validation before any more build | Park until FireLog is validated. Then evaluate. |

### 30/60/90 Day Plan

**Days 1-30:**
- [ ] 10 fire marshal/building manager interviews (FireLog)
- [ ] 10 fence contractor pricing conversations (FenceCalc kill/continue gate)
- [ ] Size FireLog TAM precisely (NFPA data, municipal records)
- [ ] Decision: Kill or continue FenceCalc by Day 14
- [ ] If FireLog validates: ship MVP landing page, run fake door test

**Days 31-60:**
- [ ] FireLog: Stage 2 validation — landing page + cold outreach to 200 prospects
- [ ] Hit >5% conversion gate or pivot positioning
- [ ] If FenceCalc survived: same Stage 2 validation
- [ ] Begin shared infrastructure (auth + billing) for portfolio

**Days 61-90:**
- [ ] FireLog: Live product in hands of 10-20 beta users
- [ ] Track activation, retention, WTP metrics
- [ ] First revenue target: 5 paying customers
- [ ] Evaluate CraneCheck for Stage 1 validation
- [ ] Set Q4 Rocks based on results

---

## How to Use This Document

1. **Weekly:** Check scoreboard metrics, review kill criteria against live products
2. **Before building anything new:** Run the validation scorecard. Score honestly. Share scores with someone who'll push back.
3. **Monthly:** Review product health, run kill/continue against criteria
4. **Quarterly:** Set rocks, evaluate new opportunities, update this document

**The #1 rule:** Distribution > Building. You have 6+ products and $0 revenue. The gap isn't product — it's validated demand and active distribution. No more building until something is sold.
