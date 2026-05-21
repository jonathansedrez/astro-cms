# Astro CMS — S3-Powered Content

A content-driven site built with [Astro](https://astro.build) that uses Amazon S3 as its CMS. Markdown files stored in S3 are fetched at build time and rendered as static pages.

---

## How it works

At build time, `astro-loader-s3` connects to an S3 bucket using credentials from `.env` and downloads all Markdown files. Astro's content collections system validates each file against a schema (requiring a `title` frontmatter field) and makes them available to pages. The dynamic route `pages/[id].astro` calls `getStaticPaths()` to generate one static HTML page per document — a file named `cafe.md` in S3 becomes the route `/cafe`. No server is needed at runtime.

---

## Content format

Each Markdown file uploaded to S3 must include a `title` in its frontmatter:

```markdown
---
title: My Document
---

Content goes here.
```

---

## Directory layout

```
.
├── pages/
│   ├── index.astro       # Home page
│   └── [id].astro        # Dynamic route — one page per S3 document
├── content.config.ts     # Defines the "documents" collection + S3 loader
├── astro.config.mjs      # srcDir: "." shifts pages/ to project root
└── .env                  # AWS credentials (never commit this file)
```

`astro.config.mjs` sets `srcDir: "."`, which moves the pages directory from the default `src/pages/` to `pages/` at the project root.

---
