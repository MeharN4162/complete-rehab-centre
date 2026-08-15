# Complete Rehab Centre — Website

Frontend for the Complete Rehab Centre website (Brampton, ON), built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project Structure

- `src/app/` — routes (App Router). Each folder is a page; shared layout lives in `src/app/layout.tsx`.
- `src/components/layout/` — Header, MobileNav, Footer.
- `src/components/ui/` — small reusable primitives (Button, Container, SectionHeading).
- `src/components/home/` — homepage-only sections.
- `src/components/shared/` — components reused across multiple pages (Accordion, forms, page templates).
- `src/data/` — site content as typed data (business info, services, assessments, staff, testimonials, articles). Page components render this data rather than hardcoding copy, so factual content lives in one place.
- `public/images/` — site imagery.

## Notes

- This is a frontend-only build — there is no backend. The appointment/contact forms are not wired to a booking system; submitting one shows an honest notice directing the visitor to call the clinic directly, rather than a fake success message.
- Business information (address, phone numbers, hours) lives in `src/data/site.ts` — update it there and it propagates across the header, footer, contact page, appointment page and structured data.
