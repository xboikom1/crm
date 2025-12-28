# CRM Dashboard

A modern CRM dashboard built with **Next.js App Router**, **React**, **MongoDB**, and **React Query**.  
The app provides a small but complete example of a CRM system: companies, promotions, sales statistics, and geographic distribution.

---

## Features

- **Dashboard overview**
  - Global statistics (promotions, categories, new and active companies)
  - Sales table with sold units and income
  - Promotions overview
  - Companies grouped by country and category

- **Companies**
  - Companies list with key attributes
  - Available filtering and aggregation
  - Company–promotion relationships

- **Promotions**
  - Full CRUD API for promotions
  - Linking promotions to companies

- **Real database**
  - All data is stored in **MongoDB Atlas**
  - API routes use typed models and a shared DB client

- **Production deployment**
  - Deployed on **Vercel**
  - Uses environment‑based configuration for API and database

---

## Tech Stack

### Frontend

- **Next.js**
  - Server Components and Route Handlers
  - File‑system routing under `app/`
- **React**
- **React Query (@tanstack/react-query v5)**
  - Data fetching, caching and prefetching
  - Server‑side prefetch + `HydrationBoundary` for seamless hydration
- **Tailwind CSS**
  - Utility‑first styling
  - Responsive layout for dashboard, tables and cards
- **Headless UI (@headlessui/react)**
  - Accessible, unstyled components
- **clsx**
  - Clean and composable conditional classNames
- **Formik**
  - Form state and validation (for interactive forms like promotions)

### Backend

- **Next.js Route Handlers**
  - REST‑like endpoints for:
    - `/api/companies`
    - `/api/promotions`
    - `/api/summary-stats`
    - `/api/summary-sales`
    - `/api/countries`
    - `/api/categories`
- **MongoDB Node.js Driver**
  - Single connection helper in `src/lib/mongodb.ts`
  - Collections: `companies`, `promotions`, `summary-stats`, `summary-sales`, `countries`, `categories`

### Tooling & Quality

- **TypeScript**
  - Strict typing for API models and UI components
- **ESLint + eslint-config-next**
  - Linting tailored for Next.js and React
- **Prettier**
  - Consistent code style integrated with ESLint
- **PostCSS + Autoprefixer**
  - Modern CSS pipeline

---

## Architecture & Good Practices

- **Separation of concerns**
  - `src/lib/api.ts` contains all typed API clients (e.g. `getCompanies`, `getPromotions`).
  - `app/api/**/route.ts` contains HTTP handlers and database access.
  - UI components live in `app/components/**`.

- **Typed domain models**
  - Interfaces for `Company`, `Promotion`, `SummaryStats`, `SummarySales`, `Country`, `Category`.
  - Frontend and backend share the same types to avoid runtime mismatches.

- **React Query + SSR**
  - Data for pages like `/companies` and dashboard widgets is **prefetched on the server** via React Query.
  - Prefetched state is dehydrated and re‑hydrated on the client, so data is instantly available and stays in sync.

- **Environment‑based configuration**
  - MongoDB credentials and DB name are injected via environment variables.
  - `NEXT_PUBLIC_BASE_URL` is used to build API URLs.

- **Scalable API design**
  - Route handlers mirror real‑world REST APIs (list, details, filtered queries, create).
  - `GET` and `POST` methods are implemented for promotions as an example of write operations.
