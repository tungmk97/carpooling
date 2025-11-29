# Change: Build Nam Định - Hà Nội Carpooling Service Website

---
## ⚠️ CRITICAL REQUIREMENT: VIETNAMESE LANGUAGE ONLY

**ALL content, UI elements, labels, buttons, navigation, messages, and text displayed in this application MUST be in Vietnamese language.**

This includes but is not limited to:
- All page content (headings, paragraphs, descriptions)
- Navigation menu items
- Button labels and call-to-action text
- Form labels and placeholders (if forms are added)
- Error messages and user feedback
- Meta tags and SEO content
- Alt text for images
- ARIA labels for accessibility
- Footer and header text
- All component text content

**NO English text should appear in the user-facing interface.**

Language code: `vi-VN`
Character encoding: `UTF-8` (to support Vietnamese diacritics: đ, ă, â, ê, ô, ơ, ư and tone marks)

---

## Why

The project needs a modern, mobile-first website to promote and facilitate the Nam Định - Hà Nội carpooling service. The target audience primarily accesses services via mobile devices, requiring optimized performance, easy navigation, and instant access to contact methods (phone, Zalo). The website must rank well in search engines to attract organic traffic from potential customers searching for transportation services between Nam Định and Hà Nội.

## What Changes

This change introduces a complete website with the following capabilities:

- **Web Platform**: Next.js App Router application with shadcn/ui components, green theme (#43A047), responsive layouts
- **SEO Optimization**: Complete meta tags, Open Graph, semantic HTML, fast mobile loading
- **Mobile UI**: Mobile-first responsive design optimized for touch interactions and small screens
- **Contact System**: Sticky contact bar with direct-dial phone (tel:0971852897) and Zalo integration (zalo.me/0971852897)
- **Pricing Display**: Service pricing tables for standard routes and airport transfers
- **Content Pages**: Home, About (Giới thiệu), Contact (Liên hệ) pages with service benefits and booking flow

The website will feature:
- Green color scheme with #43A047 primary color
- Three main navigation pages: Home, About, Contact
- Sticky contact information visible on all pages
- Service benefits section (6 key advantages)
- Pricing tables (city routes and airport transfers)
- Placeholder sections for future images
- Full Vietnamese language content

## Impact

- **Affected specs**: Creates new capabilities:
  - `web-platform` - Core Next.js application structure
  - `seo-optimization` - Search engine optimization requirements
  - `mobile-ui` - Mobile-first design patterns
  - `contact-system` - Sticky contact bar and communication channels
  - `pricing-display` - Service pricing presentation

- **Affected code**:
  - New Next.js project structure (app/, components/, lib/)
  - shadcn/ui configuration and components
  - Tailwind CSS theme configuration
  - SEO metadata configuration
  - Page routes and layouts

- **Dependencies**:
  - Next.js (latest App Router)
  - React
  - shadcn/ui
  - Tailwind CSS
  - Node.js runtime

- **Timeline**: Single-phase implementation - all features delivered together as initial website launch
