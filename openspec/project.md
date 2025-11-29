# Project Context

## Purpose

This project is a marketing and information website for a carpooling service operating between Nam Định and Hà Nội, Vietnam. The website's primary goals are to:

- Provide service information to potential customers
- Display pricing for different route types (city and airport transfers)
- Facilitate direct contact via phone and Zalo messaging
- Rank well in Vietnamese search engines for relevant keywords

The target audience is Vietnamese speakers, primarily accessing the site via mobile devices, who are looking for transportation alternatives between Nam Định and Hà Nội.

## Tech Stack

- **Framework**: Next.js (latest version with App Router)
- **Language**: TypeScript (strict mode)
- **UI Library**: shadcn/ui (copy-paste component library)
- **Styling**: Tailwind CSS
- **Runtime**: Node.js (for development and build)
- **Deployment**: Static export or SSR-capable hosting (Vercel, Netlify, or Node.js server)

## Project Conventions

### Code Style

- **TypeScript**: Strict mode enabled, all components properly typed
- **File Naming**:
  - Components: PascalCase (e.g., `StickyContactBar.tsx`)
  - Pages: lowercase with Next.js conventions (e.g., `page.tsx`, route folders in kebab-case)
  - Utilities: camelCase (e.g., `formatPrice.ts`)
- **Import Order**: React imports → Next.js imports → Third-party → Local components → Local utilities
- **Component Structure**: Functional components with TypeScript interfaces for props
- **Formatting**: Use Prettier with default settings (install if needed)

### Architecture Patterns

- **Next.js App Router**: Use app/ directory structure with Server Components by default
- **Component Organization**:
  - `app/`: Route pages and layouts
  - `components/`: Reusable components
  - `components/ui/`: shadcn/ui components
  - `lib/`: Utility functions and configurations
- **Data Flow**: Props-based, no state management library needed (static content site)
- **Styling**: Tailwind utility classes, component-level customization via shadcn/ui
- **Server vs Client**: Prefer Server Components; use 'use client' only when needed (interactive elements)

### Testing Strategy

- **Manual Testing**: Primary testing method for Phase 1
  - Test all navigation links
  - Verify responsive design on mobile, tablet, desktop
  - Test tel: and zalo.me links on actual devices
  - Validate Vietnamese character rendering
- **Lighthouse Audits**: Required before deployment
  - Performance: >90 on mobile
  - SEO: 100
  - Accessibility: >90
  - Best Practices: >90
- **Build Verification**: `npm run build` must succeed without errors
- **Cross-browser**: Test on Chrome (Android), Safari (iOS), Chrome (Desktop)

### Git Workflow

- **Branching**:
  - `master`: main branch for deployable code
  - Feature branches: not required for solo development, but recommended for larger changes
- **Commits**: Descriptive messages in English, reference related tasks when applicable
- **No Force Push**: To master/main branch
- **Pre-deployment**: Always run `npm run build` and test locally before deploying

## Domain Context

### Transportation Service Domain

- **Xe Ghép**: "Shared car" or carpooling service where multiple passengers share a vehicle
- **Bao Xe**: "Private car" rental where entire vehicle is rented
- **Route Types**:
  - **Nội thành**: City routes (Nam Định city center ↔ Hà Nội city center)
  - **Sân bay**: Airport routes (includes Nội Bài Airport transfers)
- **Contact Methods**:
  - **Phone**: Primary contact method via `tel:` link (0971852897)
  - **Zalo**: Vietnamese messaging app, preferred for booking coordination

### Vietnamese Language Considerations

- **Character Set**: Full Vietnamese diacritics support (UTF-8 encoding)
- **Common Diacritics**: đ, ă, â, ê, ô, ơ, ư (with tone marks: á, à, ả, ã, ạ, etc.)
- **Font Selection**: Use fonts with complete Vietnamese glyph coverage (e.g., Inter, Noto Sans Vietnamese, system fonts)
- **Locale**: vi_VN for Open Graph and structured data

### SEO Keywords (Vietnamese)

- Primary: "xe ghép Nam Định Hà Nội", "xe ghép Nam Định", "xe khách Nam Định Hà Nội"
- Secondary: "đặt xe Nam Định", "dịch vụ xe Nam Định", "xe Nam Định Hà Nội giá rẻ"

## Important Constraints

### Technical Constraints

- **Mobile-First**: Minimum 60% of traffic expected from mobile devices
- **Performance**: Must load quickly on low-end smartphones with 3G connections
- **Browser Support**: Modern browsers only (last 2 versions of Chrome, Safari, Firefox)
- **No Backend**: Static or SSR-only, no database or API backend required
- **SEO Critical**: Organic search is primary traffic source

### Business Constraints

- **Content Language**: Vietnamese only
- **No Online Booking**: Contact-based booking flow only (phone/Zalo)
- **No Payment Processing**: Offline payment only
- **Single Service Area**: Nam Định ↔ Hà Nội corridor only

### Design Constraints

- **Color Theme**: Primary color must be #43A047 (green)
- **Sticky Contact**: Phone and Zalo links must be always visible
- **Image Placeholders**: Real images not available initially
- **Three Pages Only**: Home, About (Giới thiệu), Contact (Liên hệ)

### Content Constraints

- **Pricing Must Be Visible**: All prices shown clearly in tables
- **Contact Info Prominent**: Phone (0971852897) and Zalo (zalo.me/0971852897) always accessible
- **Service Benefits**: Six key benefits must be presented clearly
- **Booking Process**: Three-step process must be explained

## External Dependencies

### Required Dependencies

- **Next.js**: Latest stable version with App Router support
- **React**: Latest stable version (included with Next.js)
- **Tailwind CSS**: Latest stable version
- **shadcn/ui**: Component library (installed via CLI, not npm package)
- **TypeScript**: Latest stable version

### Optional Dependencies

- **Google Analytics**: May be added for traffic tracking (not in Phase 1)
- **Facebook Pixel**: May be added for social media tracking (not in Phase 1)

### External Services (No Direct Integration)

- **Zalo**: External messaging platform (deep link only: `zalo.me/0971852897`)
- **Phone Dialer**: Native device capability via `tel:0971852897` protocol
- **Search Engines**: Google.vn, Cốc Cốc (Vietnamese search engines)

## Development Environment

### Prerequisites

- Node.js: v18.17 or later
- npm or yarn or pnpm
- Modern code editor (VSCode recommended)

### Quick Start

```bash
# After implementation is complete:
npm install
npm run dev
# Open http://localhost:3000
```

### Build & Deployment

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Static export (optional, for static hosting)
npm run build && npm run export
```

## Project Status

- **Current Phase**: Proposal stage (see `openspec/changes/build-carpooling-website/`)
- **Next Step**: Await proposal approval, then begin implementation
- **Estimated Completion**: Single-phase development, all features delivered together
