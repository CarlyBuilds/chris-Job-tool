# Chris Job Tool — V1 Workflow

## V1 Goal

Turn basic job information, photos and measurements into an accurate, profitable customer quote with as little effort as possible.

The tool should feel like having an experienced estimator standing beside Chris asking the questions he might otherwise forget.

---

# SCREEN 1 — HOME

Keep the home screen extremely simple.

Main buttons:

## + NEW JOB

Start pricing a new job.

## CURRENT JOBS

Jobs currently being quoted or completed.

## JOB HISTORY

Previous jobs, quotes and actual results.

## MY SETUP

Contains:

- Chris's tools
- Preferred suppliers
- Labour rates
- Overheads
- Minimum profit margin
- Business details

---

# SCREEN 2 — NEW JOB

Ask only for essential information first.

Fields:

- Customer name
- Job address
- Phone/email
- What does the customer want done?
- Job type
- Photos
- Measurements
- Notes

Allow:

- Typing
- Photo upload
- Voice notes where possible

Large button:

## ANALYSE JOB

---

# SCREEN 3 — AI JOB REVIEW

AI reviews everything supplied.

Produce:

## What I think the job involves

Plain-English summary.

## Proposed work stages

Break the job into logical stages.

## Information still needed

AI must identify missing information before confidently pricing.

Examples:

- Missing measurement
- Material choice unknown
- Access unclear
- Finish not specified
- Ground conditions unknown

Never invent missing facts.

Use three confidence levels:

🟢 CONFIRMED

🟠 ASSUMPTION — CHECK

🔴 REQUIRED BEFORE QUOTING

Chris confirms or edits the information.

Button:

## BUILD JOB PLAN

---

# SCREEN 4 — MATERIALS

Create a proposed material list.

For each material show:

- Item
- Specification
- Actual quantity required
- Purchase quantity
- Unit/pack size
- Waste allowance
- Preferred supplier
- Unit price
- Total

Example:

Timber required: 31.4 metres

Available length: 4.8 metres

Purchase: 7 lengths

Purchased total: 33.6 metres

Expected offcut: 2.2 metres

The system should optimise purchasing rather than simply adding a generic waste percentage.

Chris can:

- Add item
- Remove item
- Change quantity
- Change supplier
- Override price

Show:

## MATERIAL TOTAL

---

# SCREEN 5 — TOOLS

Compare job requirements with:

## CHRIS'S TOOL INVENTORY

Display:

### Already Have

Tools required that Chris owns.

### Missing

Tools required but not currently recorded as owned.

For each missing tool show:

- Tool
- Why required
- Purchase estimate
- Hire estimate
- Suggested option

Chris chooses:

BUY

HIRE

ALREADY HAVE

NOT REQUIRED

Selected cost feeds automatically into job costing.

---

# SCREEN 6 — LABOUR & TIME

AI proposes job stages and estimated time.

Example:

Preparation — 2 hours

Frame construction — 6 hours

Installation — 5 hours

Finishing — 3 hours

Cleanup — 1 hour

Total estimated labour:

17 hours

Chris can edit any figure.

Include:

- Chris's labour
- Additional worker
- Subcontractor
- Travel where appropriate
- Collection time
- Preparation
- Cleanup

Never value Chris's time at £0.

---

# SCREEN 7 — TRUE JOB COST

Display the internal calculation clearly.

Materials

+ Labour

+ Additional labour

+ Tools/hire

+ Delivery

+ Waste

+ Disposal

+ Overheads

+ Contingency

----------------

= TRUE JOB COST

This screen is PRIVATE and never shown on the customer quote.

---

# SCREEN 8 — PROFIT CHECK

Allow Chris to set:

## Target profit margin

System calculates:

TRUE JOB COST

SELLING PRICE

CASH PROFIT

PROFIT MARGIN

Display a clear indicator:

🟢 HEALTHY

🟠 LOW

🔴 DANGER

If Chris reduces the selling price, immediately show the effect on cash profit and margin.

Example:

Customer price:
£4,800

True estimated cost:
£3,450

Expected profit:
£1,350

Expected margin:
28.1%

Never silently reduce profit.

---

# SCREEN 9 — FINAL CHECK

Before creating the quote, ask:

## HAVE WE MISSED ANYTHING?

Automatically check for:

- Fixings
- Adhesives
- Sealants
- Finishing materials
- Delivery
- Waste disposal
- Fuel/travel
- Tool hire
- Extra labour
- Access equipment
- Protection materials
- Cleanup
- Contingency

Show unresolved risks.

Chris confirms:

## I'M HAPPY WITH THIS PRICE

---

# SCREEN 10 — CUSTOMER QUOTE

Generate a clean professional quote.

Include:

- Business name/logo
- Customer
- Address
- Quote number
- Date
- Scope of work
- What's included
- Exclusions
- Total customer price
- Deposit
- Payment stages
- Estimated duration
- Quote expiry
- Terms

DO NOT SHOW:

- Internal material costs
- Labour rate calculations
- Supplier pricing
- Markups
- Profit
- Internal contingency

Options:

## PREVIEW QUOTE

## DOWNLOAD PDF

## SEND TO CUSTOMER

---

# SCREEN 11 — JOB WON / LOST

Record whether the quote was:

WON

LOST

WAITING

If lost, optionally record:

- Too expensive
- Customer chose someone else
- Customer cancelled project
- Timing
- Unknown
- Other

This information can later improve business decisions.

---

# SCREEN 12 — DURING JOB

Allow Chris to quickly record:

- Extra materials
- Unexpected work
- Extra labour
- Customer changes
- Tool purchases
- Problems
- Photos

If the customer changes the job:

## CREATE VARIATION

Calculate additional cost and price before the extra work is absorbed into the original quote.

---

# SCREEN 13 — FINISH JOB

Ask Chris for:

- Actual material spend
- Materials left over
- Actual labour hours
- Additional costs
- Final amount charged
- Unexpected issues

Keep this quick.

The aim is to get useful information without creating admin Chris will avoid doing.

---

# SCREEN 14 — ESTIMATE VS ACTUAL

Show:

## MATERIALS

Estimated:
£X

Actual:
£X

Difference:
£X

## LABOUR

Estimated:
X hours

Actual:
X hours

Difference:
X hours

## PROFIT

Expected:
£X

Actual:
£X

Difference:
£X

Then explain:

## WHAT DID WE LEARN?

Examples:

"Timber was over-ordered by 14%."

"Labour took 5 hours longer than estimated."

"Waste disposal was not included in the original estimate."

---

# LEARNING LOOP

Every completed job should create useful data for future jobs.

When a new job resembles previous work, the tool should eventually say things such as:

"Three similar jobs averaged 22 labour hours. This estimate currently allows 17."

or

"Previous decking jobs averaged 6% unused timber."

The system should recommend adjustments but Chris makes the final decision.

---

# V1 SETUP INFORMATION

Before normal use, collect:

## BUSINESS

- Business/trading name
- Contact details
- Logo
- Quote terms
- Deposit preference
- Payment terms

## CHRIS

- Normal working hours
- Labour rate
- Minimum acceptable profit margin

## TOOLS

Inventory of tools already owned.

## SUPPLIERS

Preferred suppliers and trade accounts.

## OVERHEADS

Basic business overhead assumptions.

---

# V1 DESIGN RULES

This is primarily a tool for a tradesperson, not an accountant.

Therefore:

- Large buttons
- Minimal typing
- Plain English
- Mobile friendly
- Photos prominent
- Voice input where possible
- Calculations happen automatically
- Important warnings impossible to miss
- Advanced detail hidden unless wanted
- Chris can override AI recommendations
- Never invent measurements, prices or job facts

The ideal experience is:

PHOTO → TALK → CHECK → PRICE → QUOTE

not:

FORM → FORM → FORM → FORM → GIVE UP

---

# V1 SUCCESS TEST

V1 is successful if Chris can use it on a real job and:

1. Create the job quickly
2. Upload job photos
3. Capture the important measurements
4. Identify forgotten questions
5. Produce a sensible materials list
6. Avoid unnecessary material purchases
7. Include tools he needs
8. Properly value his time
9. Understand the true job cost
10. Protect a sensible profit
11. Produce a professional customer quote
12. Compare the estimate with reality afterwards

If it cannot do those things simply, adding more features is not the priority.
