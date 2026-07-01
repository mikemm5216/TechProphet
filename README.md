# TechProphet — News-first MVP

TechProphet is a daily electronics supply-chain intelligence brief.

This clean GitHub root package includes:

- News-first homepage
- Today brief page
- Archive pages
- Bilingual Traditional Chinese / English switch
- Top 3 signal cards with self-owned SVG visuals
- Share-card API
- Browser/site icon via `app/icon.svg`
- TypeScript path alias `@/*`
- Narrow `tsconfig.include` so stray root files do not break Vercel type checking

## Correct root structure

Only these should be at repository root:

```txt
app/
components/
lib/
public/
README.md
env.example
next-env.d.ts
next.config.ts
package.json
tsconfig.json
vercel.json
.gitignore
```

## Visual assets

```txt
public/news/cpo-ai-datacenter.svg
public/news/hbm3e-memory-stack.svg
public/news/sic-ev-power-module.svg
public/techprophet-mark.svg
app/icon.svg
```

These visuals are self-owned SVG illustrations, not copied media photos.
