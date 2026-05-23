# ✦ Travelling Indian — Modern Blog Website

**A high-performance, responsive travel blog website built with Next.js Pages Router, React 19, and Tailwind CSS 4, powered by Hygraph GraphQL headless CMS and a dynamic comment moderation system.**

[![Live Site](https://img.shields.io/badge/🚀_Live_Site-TravellingIndian.vercel.app-22c55e?style=for-the-badge&logo=vercel&logoColor=white)](https://travellingindia.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![GraphQL](https://img.shields.io/badge/GraphQL-Hygraph-E10098?style=for-the-badge&logo=graphql&logoColor=white)](https://hygraph.com)

---

[![Home Page](https://cdn.jsdelivr.net/gh/Priyanshu0007/CDN@377f072c7fcf8dff5e9ddb1501ae94e9e8dcb620/blogsite/blog-landing-page.png)](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/)

*Home page — featuring a glassmorphic sliding featured posts carousel and grid layouts with Montserrat typography*

---

## 📋 Table of Contents

- [Live URL](#-live-url)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Architecture Overview](#-architecture-overview)
- [Project Structure](#-project-structure)
- [Pages & Routes](#-pages--routes)
- [Headless CMS Schema](#-headless-cms-schema)
- [Features](#-features)
- [Comment Moderation Workflow](#-comment-moderation-workflow)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
- [Hygraph CMS Setup Guide](#-hygraph-cms-setup-guide)
- [Scripts Reference](#-scripts-reference)
- [Design System](#-design-system)

---

## 🌐 Live URL

| Platform | URL | Purpose |
|-------------|-----|---------|
| 🟢 **Vercel Production** | [blogsite-8lyauv7lm-priyanshu0007.vercel.app](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/) | Public-facing live travel blog |

---

## 📸 Screenshots

### 🏠 Home / Landing Page
[![Landing Page](https://cdn.jsdelivr.net/gh/Priyanshu0007/CDN@377f072c7fcf8dff5e9ddb1501ae94e9e8dcb620/blogsite/blog-landing-page.png)](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/)

### 📝 Post Detail & Article View
[![Post Detail Page](https://cdn.jsdelivr.net/gh/Priyanshu0007/CDN@377f072c7fcf8dff5e9ddb1501ae94e9e8dcb620/blogsite/blog-discription-page.png)](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/)

### 🗂️ Category Post Filtering
[![Category Page](https://cdn.jsdelivr.net/gh/Priyanshu0007/CDN@377f072c7fcf8dff5e9ddb1501ae94e9e8dcb620/blogsite/blog-categorie-page.png)](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/)

### 💬 Glassmorphic Comments & Submission Form
[![Comments Page](https://cdn.jsdelivr.net/gh/Priyanshu0007/CDN@377f072c7fcf8dff5e9ddb1501ae94e9e8dcb620/blogsite/blog-comments-page.png)](https://blogsite-8lyauv7lm-priyanshu0007.vercel.app/)

---

## 🛠️ Tech Stack

### Core Framework

| Technology | Version | Role |
|------------|---------|------|
| [Next.js](https://nextjs.org) | `16.2.6` | React Framework (Pages Router) |
| [React](https://react.dev) | `19.2.6` | UI library |
| JavaScript (ES6+) | — | Frontend and API logic |

### Styling

| Technology | Version | Role |
|------------|---------|------|
| [Tailwind CSS](https://tailwindcss.com) | `4.3.0` | Utility-first styling framework |
| [Sass / SCSS](https://sass-lang.com) | `1.99.0` | Pre-processor for advanced page styles |
| Google Fonts | — | `Montserrat` (clean geometric body and headings font) |

### Headless CMS & Querying

| Technology | Version | Role |
|------------|---------|------|
| [Hygraph](https://hygraph.com) | Serverless | Headless GraphQL CMS hosting authors, posts, and comments |
| [graphql-request](https://github.com/jasonkuhrt/graphql-request) | `7.4.0` | Minimal, edge-compatible GraphQL client for Next.js API & SSR |
| [graphql](https://graphql.org) | `16.14.0` | Query parsers and execution schema |

### Utilities

| Technology | Version | Role |
|------------|---------|------|
| [html-react-parser](https://www.npmjs.com/package/html-react-parser) | `6.1.1` | Converts HTML string responses from Hygraph to React components |
| [moment.js](https://momentjs.com) | `2.30.1` | Parses, validates, manipulates, and displays post dates |
| [react-multi-carousel](https://www.npmjs.com/package/react-multi-carousel) | `2.8.6` | Dynamic, touch-compatible carousel slider for featured posts |

---

## 🏗️ Architecture Overview

```
                        ┌────────────────────────┐
                        │      Client Browser    │
                        └───────────┬────────────┘
                                    │
                                    │ HTTP Requests
                                    ▼
                        ┌────────────────────────┐
                        │   Vercel Edge Network  │
                        └───────────┬────────────┘
                                    │
        ┌───────────────────────────┴───────────────────────────┐
        ▼ (Pages Router / SSR / API Routes)                     ▼ (Data Fetching / Queries)
  ┌───────────┐                                           ┌───────────┐
  │  Next.js  ├──────────────────────────────────────────►│  GraphQL  │
  │App Server │  (queries via graphql-request)           │  Queries  │
  └─────┬─────┘                                           └─────┬─────┘
        │                                                       │
        ├─► / (Index page SSR)                                  │
        ├─► /post/[slug] (Post Details SSR)                     ▼
        ├─► /category/[slug] (Category SSR)            ┌─────────────────┐
        │                                              │   Hygraph CMS   │
        └─► /api/comments (Serverless Endpoint)        │  (Headless DB)  │
              │                                        └────────┬────────┘
              │ POST (Auth Bearer Token)                        │
              └─────────────────────────────────────────────────┘
```

### Key Architectural Decisions

- **SSR Data Fetching (`getServerSideProps`)**: Content updates instantly whenever new articles are published in Hygraph, eliminating the need to wait for static rebuilds.
- **Next.js Serverless API Route**: The comment submission endpoint is secured by executing the GraphQL mutation in a server-side route `/api/comments.js`, hiding the private `GRAPHCMS_TOKEN` from client browsers.
- **Touch-Friendly Featured Carousel**: Uses `react-multi-carousel` with custom styled overlays to present highlight stories directly on the home page.
- **Glassmorphism Design**: Standard glass border structures combined with custom backdrop filters layer over a fixed Unsplash background, giving a consistent, modern visual depth.

---

## 📁 Project Structure

```
blogsite/
├── public/                       # Static public assets (favicons, site images)
├── src/
│   ├── components/               # Reusable Page Layout & UI components
│   │   ├── AdjacentPostCard.jsx  # Link cards for previous/next navigation
│   │   ├── Author.jsx            # Post detail page author bio card
│   │   ├── Categories.jsx        # Sidebar block filtering post categories
│   │   ├── Comments.jsx          # Approved comments thread display
│   │   ├── CommentsForm.jsx      # Guest comments submission form
│   │   ├── FeaturedPostCard.jsx  # Hero slide layout for carousel
│   │   ├── Header.jsx            # Main site logo and navigation headers
│   │   ├── Layout.jsx            # Root HTML layout wrapper
│   │   ├── Loader.jsx            # Glassmorphic page loading spinners
│   │   ├── PostCard.jsx          # Summary grid card for landing pages
│   │   ├── PostDetail.jsx        # Rich text content parser for post pages
│   │   ├── PostWidget.jsx        # Similar/recent posts widget
│   │   └── index.js              # Central components barrel export
│   │
│   ├── pages/                    # Next.js Pages Router endpoints
│   │   ├── api/
│   │   │   └── comments.js       # Secured endpoint to submit visitor comments
│   │   ├── category/
│   │   │   └── [slug].js         # Listing page for posts by category
│   │   ├── post/
│   │   │   └── [slug].js         # Article detail and comments wrapper page
│   │   ├── _app.js               # Global Next.js app wrapper (styles & Layout)
│   │   ├── _document.js          # Custom HTML document wrapper (fonts loading)
│   │   └── index.js              # Home page displaying carousel & recent posts
│   │
│   ├── sections/                 # Extended page layouts
│   │   ├── AdjacentPosts.jsx     # Navigation section for previous/next post
│   │   ├── FeaturedPost.jsx      # Featured posts carousel container
│   │   └── index.js              # Section barrel export
│   │
│   ├── services/
│   │   └── index.js              # All graphql queries (posts, comments, categories)
│   │
│   └── styles/
│       └── globals.css           # Global Tailwind directives & custom CSS tokens
│
├── next.config.js                # Next.js image domain and output configuration
├── tailwind.config.js            # Tailwind structure hooks
├── package.json                  # Dependencies & execution scripts
└── .env                          # Local environment secrets
```

---

## 🗺️ Pages & Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | SSR | Home — featured posts carousel, post list, recent post sidebar, categories list |
| `/post/[slug]` | SSR | Detailed blog display featuring full article text, author card, and comments |
| `/category/[slug]` | SSR | Displays all published posts linked to the selected category |
| `/api/comments` | Serverless API | Handles post mutations to write new comments directly to the CMS |

---

## 🗄️ Headless CMS Schema

The database schema is structured inside **Hygraph** and queried via the GraphQL endpoint:

### `Post`
*Represents individual travel stories, guides, and articles.*

| Field | Type | Description |
|--------|------|-------------|
| `title` | `String` | Header of the post |
| `slug` | `String` | Unique, URL-friendly unique identifier |
| `excerpt` | `String` | Short summary for cards |
| `content` | `RichText` | Full article content (parsed via `html-react-parser`) |
| `featuredImage` | `Asset` | Cover image of the post |
| `featuredPost` | `Boolean` | Flag to display in the home page carousel |
| `createdAt` | `DateTime` | Creation date (formatted via `moment`) |
| `author` | `Relation` | Associated `Author` record |
| `categories` | `Relation` | List of linked `Category` records |

### `Author`
*The travel writers creating the content.*

| Field | Type | Description |
|--------|------|-------------|
| `id` | `ID` | Unique key |
| `name` | `String` | Author's name |
| `bio` | `String` | Short bio displayed below the article |
| `photo` | `Asset` | Profile picture |

### `Category`
*Grouping posts under geographical or thematic headings.*

| Field | Type | Description |
|--------|------|-------------|
| `name` | `String` | Visual name of the category |
| `slug` | `String` | URL search slug |

### `Comment`
*User comments submitted via post page form.*

| Field | Type | Description |
|--------|------|-------------|
| `name` | `String` | Visitor's display name |
| `email` | `String` | Email address (hidden from public UI) |
| `comment` | `String` | Message content |
| `post` | `Relation` | Associated `Post` being commented on |

---

## 🚀 Features

- **Dynamic Content Carousel**: Responsive scrolling slider presenting posts flagged as `featuredPost`.
- **Rich Text Parsing**: Smooth conversion of Hygraph's nested Rich Text nodes to clean HTML structures.
- **Intelligent Sidebar Widgets**: Automatically filters related posts based on current categories or displays the most recent articles when browsing elsewhere.
- **Glassmorphic UI**: High-contrast, glass-effect container system featuring sleek backdrop styling overlays.
- **Secure Guest Comments**: Protected mutations through an API gateway to prevent unauthorized database updates.
- **Date Utilities**: Human-readable date presentation configured globally via `moment`.
- **Dynamic Routing**: Built-in Next.js page generation based on slugs for posts and categories.

---

## 🔐 Comment Moderation Workflow

To prevent spam, comment entries submitted through `/post/[slug]` pass through a moderation queue:

```
                  ┌──────────────────────┐
                  │ Visitor submits form │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │ /api/comments route  │
                  └──────────┬───────────┘
                             │
                  Authenticated request using
                  GRAPHCMS_TOKEN
                             │
                             ▼
               ┌───────────────────────────┐
               │ Hygraph creates Comment   │
               │ (Status: DRAFT/UNAPPROVED)│
               └──────────┬────────────────┘
                          │
                          │ Admin reviews in CMS console
                          ▼
            [ Approve and Publish comment ]
                          │
                          ▼
             ─────────────────────────────
             Comment displays on website UI
```

---

## 🔑 Environment Variables

To configure local database connections and headless endpoints, create a `.env` file in the root folder:

```bash
NEXT_PUBLIC_GRAPHCMS_ENDPOINT=your_hygraph_endpoint_url
GRAPHCMS_TOKEN=your_auth_token_with_write_access
```

| Variable | Scope | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GRAPHCMS_ENDPOINT` | Client/Server | GraphQL endpoint URL provided by Hygraph |
| `GRAPHCMS_TOKEN` | Server Only | Bearer Token authorizing write mutations for user comments |

---

## 💻 Getting Started

### Prerequisites

- Node.js `>= 20`
- [Bun](https://bun.sh) (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Priyanshu0007/blogsite.git
cd blogsite

# Install dependencies
bun install
# or
npm install

# Run the development server
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the live project.

---

## ⚙️ Hygraph CMS Setup Guide

To connect the application to your own Hygraph instance:

1. **Create a Hygraph project**: Use the "Blog template" or start from scratch.
2. **Define Schema**: Create `Post`, `Author`, `Category`, and `Comment` models matching the field names in the [Headless CMS Schema](#-headless-cms-schema) section.
3. **Configure API Access**:
   - Go to **Project Settings > API Access**.
   - Copy the **Content API** endpoint (use this for `NEXT_PUBLIC_GRAPHCMS_ENDPOINT`).
   - Under **Permanent Developer Tokens**, generate a new token with permission to query and mutate `Comment` schemas. Copy it for `GRAPHCMS_TOKEN`.
4. **Publish Content**: Add categories, authors, and blog posts, making sure to publish them so they resolve in GraphQL API queries.

---

## 📜 Scripts Reference

| Command | Description |
|---------|-------------|
| `bun dev` / `npm run dev` | Starts the Next.js development server at `localhost:3000` |
| `bun run build` / `npm run build` | Builds the optimized production package |
| `bun start` / `npm run start` | Starts the production server for deployed code |
| `bun run lint` / `npm run lint` | Checks file syntax and code formatting standards |

---

## 🎨 Design System

- **Aesthetic**: Modern glassmorphic style utilizing semi-transparent backdrops, subtle outlines, and fixed background image scaling.
- **Typography**: Geometric sans-serif headings and readability-focused layout utilizing Google Fonts `Montserrat` (`font-family: 'Montserrat', sans-serif`).
- **Smooth Transitions**: Arrow hover triggers and slide animations on adjacent post overlays using custom CSS transitions.
- **Responsive Layouts**: Double column dashboards adjusting to single column grids on mobile devices.

---

**Built with ♥ by [Priyanshu Gupta](https://priyanshu0007.vercel.app)**

[![GitHub](https://img.shields.io/badge/GitHub-Priyanshu0007-181717?style=flat-square&logo=github)](https://github.com/Priyanshu0007)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-22c55e?style=flat-square&logo=vercel)](https://priyanshu0007.vercel.app)
