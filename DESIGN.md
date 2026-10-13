# Design system: the career pipeline

**Idea.** In pharma, a portfolio is read as a pipeline chart: assets as horizontal bars moving through phases.
This site uses that grammar for a portfolio leader: the career is the pipeline (hero), and AI builds are
mapped across the stages of a working AI system (Data, Retrieval, Guardrails, Deploy, Interface).

## Color (committed strategy)
| Token | Hex | Role |
|---|---|---|
| cobalt | #2B45E0 | Owns the hero, nav and contact fields; filled stage cells |
| cobalt-deep | #1A2A9C | Small headings and stack text on light ground |
| cobalt-mist | #C9D1FF | Past-role bars; secondary text on cobalt |
| marigold | #FFB627 | Only for "current": the present role, primary buttons, focus ring, selection |
| ink | #0D1333 | Body text |
| ground | #F4F6FC | Cool page ground |

## Type
- **Bricolage Grotesque** (display + UI): headings at width 85–90, tight tracking.
- **Source Serif 4** (prose): long-form copy, 1.7 line-height, measure ≤ 66ch.

## Rules
- No eyebrow labels, no all-caps labels, no stat-tile row, no equal-card grid.
- One motion moment: pipeline bars grow on load, staggered by role. Disabled under reduced motion.
- Marigold means "current"; never use it decoratively.
- Mobile: chart labels stack above full-width tracks; stage cells show their names inline.
