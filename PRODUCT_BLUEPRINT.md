# Chris Job Tool — Product Blueprint

## Mission

Build a simple AI-powered job planning, costing and quoting tool for tradespeople.

The tool should help Chris accurately scope jobs, calculate materials, identify required tools, estimate labour, prevent over-ordering, protect profit margins and create professional customer quotes.

The system should become more accurate over time by comparing estimated costs with what actually happened on completed jobs.

---

## Core Principle

A tradesperson should be able to start with:

- Photos of the job
- Customer requirements
- Measurements
- Notes or voice input
- Drawings or sketches

The tool then helps turn that information into a properly planned and profitable job.

---

## 1. NEW JOB

Create a job containing:

- Customer name
- Customer address
- Contact details
- Job description
- Job type
- Proposed start date
- Estimated duration
- Photos
- Measurements
- Customer requirements
- Access restrictions
- Site conditions
- Notes

Allow information to be entered by typing, photos or voice where possible.

---

## 2. PHOTO ANALYSIS

Allow Chris to upload photographs of:

- The existing area
- Measurements
- Plans
- Sketches
- Materials
- Previous similar jobs

AI should help identify:

- Likely work required
- Visible complications
- Materials that may be required
- Questions Chris still needs to answer
- Potential items that could otherwise be forgotten when pricing

IMPORTANT:
Photo analysis assists Chris. It must not pretend measurements or hidden conditions are known when they are not.

---

## 3. JOB SCOPE

Create a structured scope of works.

Break the job into stages, for example:

1. Preparation
2. Removal/demolition
3. Groundwork
4. Construction
5. Installation
6. Finishing
7. Waste removal
8. Final inspection

The exact stages should adapt to the type of job.

---

## 4. MATERIAL CALCULATOR

Generate a detailed materials list containing:

- Material
- Specification
- Quantity required
- Pack/unit size
- Quantity to purchase
- Unit cost
- Total cost
- Supplier
- Waste allowance

The system should distinguish between:

ACTUAL QUANTITY REQUIRED

and

PURCHASE QUANTITY

This is important because materials are often sold in fixed lengths, packs or quantities.

The aim is to reduce both shortages and unnecessary over-ordering.

---

## 5. WASTE CALCULATION

Waste should NOT simply be a blanket percentage.

Where possible calculate sensible waste based on:

- Material type
- Standard available lengths
- Cutting requirements
- Dimensions
- Reusable offcuts
- Pack sizes
- Job complexity

Record unused materials after each completed job so future estimates improve.

---

## 6. CHRIS'S TOOL INVENTORY

Create a permanent inventory of tools Chris already owns.

For each tool record:

- Tool name
- Brand/model if relevant
- Capabilities
- Accessories
- Condition
- Notes

When planning a job, compare the required tools against Chris's inventory.

The output should show:

### Already owned
Tools Chris already has.

### Required
Tools needed for the job that Chris does not currently own.

For required tools, consider:

- Purchase price
- Hire price
- Expected future usefulness
- Whether purchase or hire makes more financial sense

Any new tool required for a job must be included in the job costing unless Chris deliberately chooses otherwise.

---

## 7. SUPPLIERS

Create a preferred supplier database.

For each supplier record:

- Supplier name
- Materials/products normally purchased
- Typical pricing
- Trade discount
- Delivery charge
- Minimum order
- Delivery times
- Contact details
- Website
- Notes

When costing a job, use Chris's preferred suppliers first.

Where useful, compare alternative suppliers to identify genuine savings.

Do not automatically choose the cheapest supplier if delivery, quality, reliability or waste makes another option better value.

---

## 8. LABOUR

Calculate labour realistically.

Include:

- Estimated hours
- Number of people required
- Chris's labour rate
- Additional labour
- Subcontractors
- Travel time where appropriate
- Collection time
- Preparation
- Installation
- Cleaning
- Waste disposal
- Administration where relevant

Do not treat Chris's own time as free.

---

## 9. OVERHEADS

Allow business overheads to be included in pricing.

Examples:

- Fuel
- Vehicle costs
- Insurance
- Consumables
- Tool wear
- Administration
- Waste disposal
- Delivery charges
- Payment fees
- Other business expenses

Support either:

- Job-specific overheads
- Percentage overhead allowance
- Combination of both

---

## 10. CONTINGENCY & RISK

Identify risks before producing the final price.

Examples:

- Unknown ground conditions
- Hidden damage
- Difficult access
- Weather exposure
- Unconfirmed measurements
- Material price uncertainty
- Specialist equipment
- Customer changes

Flag assumptions clearly.

Allow an appropriate contingency amount to be included where justified.

---

## 11. PROFIT PROTECTION

Every job should calculate:

Materials
+ Labour
+ Additional labour/subcontractors
+ Tool purchase/hire
+ Delivery
+ Waste
+ Overheads
+ Contingency
= TRUE JOB COST

Then calculate:

TRUE JOB COST
+ PROFIT
= CUSTOMER PRICE

Show Chris:

- True cost
- Customer price
- Expected cash profit
- Expected profit margin

Create a warning if the margin falls below Chris's chosen minimum.

Never silently reduce profit simply to make a quote appear cheaper.

---

## 12. QUOTE REVIEW

Before producing the customer quote, run a "Have We Missed Anything?" review.

Check for commonly forgotten items such as:

- Fixings
- Adhesives
- Sealants
- Finishing materials
- Delivery
- Waste disposal
- Tool hire
- Additional labour
- Travel
- Access equipment
- Protection materials
- Cleanup
- Contingency

Highlight anything requiring Chris's confirmation.

---

## 13. CUSTOMER QUOTE

Generate a professional quote containing:

- Chris's business details
- Customer details
- Quote number
- Date
- Scope of works
- Included work
- Exclusions
- Total price
- Deposit
- Payment schedule
- Expected duration
- Quote validity period
- Terms
- Acceptance section

The customer quote should NOT reveal Chris's internal:

- Material markup
- Labour calculations
- Profit
- Supplier costs
- Internal contingency

Those remain private.

---

## 14. CHANGE ORDERS

If the customer changes the job after quoting:

Record:

- Requested change
- Additional materials
- Additional labour
- Additional time
- Price difference

Generate a variation/change order for customer approval.

This prevents extra work quietly destroying the job's profit.

---

## 15. JOB COMPLETION

After completing a job, record:

- Actual materials used
- Materials left over
- Actual material spend
- Actual labour hours
- Additional costs
- Unexpected problems
- Customer changes
- Final revenue

---

## 16. QUOTE VS ACTUAL

Automatically compare:

ESTIMATE vs ACTUAL

for:

- Materials
- Labour
- Waste
- Tool costs
- Overheads
- Duration
- Total cost
- Profit

Show where the estimate was wrong and by how much.

---

## 17. LEARNING ENGINE

Completed jobs should improve future estimates.

Examples:

If timber is repeatedly over-ordered:
Reduce future waste assumptions where appropriate.

If jobs consistently take longer than estimated:
Adjust future labour estimates.

If a particular type of job regularly produces additional costs:
Flag them during future quoting.

The system should learn from evidence, but Chris remains in control of pricing decisions.

---

## 18. JOB HISTORY

Maintain searchable records of:

- Quotes
- Accepted jobs
- Rejected quotes
- Completed jobs
- Job types
- Customers
- Revenue
- Costs
- Profit

Allow previous similar jobs to inform new estimates.

---

## 19. BUSINESS DASHBOARD

Eventually show:

- Quotes awaiting decision
- Jobs won
- Jobs lost
- Upcoming jobs
- Revenue
- True costs
- Gross profit
- Average margin
- Quote conversion rate
- Most profitable job types
- Jobs where pricing was inaccurate
- Material overspend
- Labour overruns

---

## 20. DESIGN PRINCIPLES

The tool must be:

- Extremely simple
- Mobile friendly
- Visual
- Fast
- Plain English
- Difficult to accidentally mess up
- Useful while standing on a job site

Chris should not need accounting, estimating or software expertise to use it.

Complex calculations belong behind the scenes.

---

## LONG-TERM PRODUCT VISION

Build for Chris first.

Once the workflow genuinely saves him time and improves profitability, evaluate turning it into a commercial product for other tradespeople.

Potential future features:

- AI photo analysis
- Voice job creation
- Automatic supplier price comparison
- Customer e-signature
- Invoice generation
- Deposit/payment tracking
- Calendar
- Job scheduling
- Accounting integrations
- Supplier integrations
- Different trade templates
- Team accounts
- Customer portal

The immediate priority is NOT building everything.

The first version must solve:

1. What does this job actually require?
2. How much material should I buy?
3. What tools do I need?
4. How long will it take?
5. What will it truly cost me?
6. What should I charge?
7. Did I actually make the profit I expected?
