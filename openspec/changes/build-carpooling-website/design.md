# Design Document: Nam Định - Hà Nội Carpooling Website

---
## ⚠️ CRITICAL REQUIREMENT: 100% VIETNAMESE LANGUAGE

**This application MUST be entirely in Vietnamese language (vi-VN).**

**Absolutely NO English text should appear in:**
- Navigation menus, buttons, labels
- Page headings, content, descriptions
- Meta tags, SEO content, Open Graph tags
- Alt text, ARIA labels, accessibility text
- Error messages, validation messages
- Component text, placeholders, tooltips
- Footer, header, or any UI element

**Required Configuration:**
- HTML `lang="vi"`
- Meta charset `UTF-8` (for Vietnamese diacritics)
- Locale: `vi_VN` (for Open Graph and structured data)
- All fonts must support Vietnamese character set (đ, ă, â, ê, ô, ơ, ư with all tone marks)

**This is non-negotiable and must be verified at every implementation step.**

---

## Context

This design document outlines the technical approach for building a mobile-first marketing website for a carpooling service between Nam Định and Hà Nội. The primary users are Vietnamese customers accessing the site via mobile devices to learn about the service and initiate contact.

### Background
- Target audience: primarily mobile users (60-80% of traffic expected from mobile)
- Service area: Nam Định ↔ Hà Nội transportation corridor
- Business model: shared and private vehicle booking via phone/Zalo
- Technical proficiency: users expect simple, fast mobile experience

### Constraints
- Must be production-ready with copy-paste deployment
- Vietnamese language content throughout
- SEO-optimized for local search ("xe ghép Nam Định Hà Nội")
- Must work reliably on low-end smartphones
- No backend/database required (static content site)

### Stakeholders
- Business owner: needs easy content updates and clear contact paths
- End users: need fast, simple mobile experience to find pricing and contact info
- Developers: need maintainable codebase with modern tooling

## Goals / Non-Goals

### Goals
1. **Mobile-First Experience**: Deliver exceptional mobile UX with sub-2s load time
2. **High SEO Rankings**: Optimize for "xe ghép Nam Định Hà Nội" and related searches
3. **Clear Contact Path**: Make phone/Zalo contact obvious and one-tap accessible
4. **Visual Appeal**: Modern, clean design with green theme that builds trust
5. **Maintainability**: Simple codebase structure for easy content updates

### Non-Goals
1. **Online Booking System**: No reservation/payment system (contact-based booking only)
2. **User Accounts**: No authentication or user profiles
3. **Real-time Features**: No live availability tracking or notifications
4. **Multi-language**: Vietnamese only (no i18n needed)
5. **Complex Interactions**: No maps, calculators, or advanced UI features

## Decisions

### 1. Technology Stack: Next.js App Router + shadcn/ui + Tailwind

**Decision**: Use Next.js 14+ with App Router, shadcn/ui for components, Tailwind CSS for styling.

**Rationale**:
- **Next.js App Router**:
  - Built-in SEO optimization (metadata API, automatic sitemap)
  - Server Components reduce client JS bundle
  - Image optimization out-of-box
  - Static export capability for simple hosting
- **shadcn/ui**:
  - Copy-paste components (no runtime dependency bloat)
  - Accessible by default (WCAG compliance easier)
  - Customizable with Tailwind (fits green theme requirement)
  - Modern, professional appearance
- **Tailwind CSS**:
  - Rapid responsive development
  - Mobile-first utility classes
  - Small production bundle (unused CSS purged)
  - Excellent developer experience

**Alternatives Considered**:
- **Plain React + Vite**: Lighter, but loses Next.js SEO benefits and image optimization
- **WordPress**: Easier for non-technical updates, but slower performance, harder to customize theme
- **Astro**: Great SEO/performance, but less mature ecosystem for Vietnamese content optimization

**Trade-offs**:
- ✅ Pro: Best-in-class SEO and performance
- ✅ Pro: Modern developer experience
- ⚠️ Con: Requires Node.js environment (vs static HTML)
- ⚠️ Con: Learning curve for App Router if unfamiliar

### 2. Sticky Contact Bar: Bottom Position on Mobile

**Decision**: Place sticky contact bar at bottom of viewport on mobile, with phone and Zalo buttons.

**Rationale**:
- **Thumb Zone**: Bottom of screen is easiest to reach on large smartphones
- **Persistent Visibility**: Always-on contact reduces friction to conversion
- **Native App Pattern**: Mimics familiar WhatsApp/Messenger bottom bar
- **Non-intrusive**: Doesn't block page title or navigation

**Implementation**:
- Fixed position: `fixed bottom-0 left-0 right-0 z-50`
- Two large buttons: Phone (tel:) and Zalo (zalo.me)
- High contrast: Green background with white text/icons
- Safe area padding for iPhone notches

**Alternatives Considered**:
- **Top sticky bar**: Blocks content, harder to reach on mobile
- **Floating action button (FAB)**: Less obvious, only shows one action
- **Inline contact only**: Requires scrolling, reduces conversions

**Trade-offs**:
- ✅ Pro: Maximum conversion potential
- ✅ Pro: Excellent mobile UX
- ⚠️ Con: Uses ~60-80px of vertical space

### 3. Page Structure: Three Static Pages

**Decision**: Implement exactly three pages: Home (/), About (/gioi-thieu), Contact (/lien-he).

**Rationale**:
- **Simplicity**: Minimal navigation keeps users focused
- **SEO**: Each page targets specific keywords
  - Home: "xe ghép Nam Định Hà Nội"
  - About: "dịch vụ xe ghép", service details
  - Contact: "đặt xe Nam Định", "liên hệ xe ghép"
- **Mobile Navigation**: Fewer links = cleaner mobile menu
- **Content Strategy**: Sufficient for pre-purchase information needs

**Content Distribution**:
- **Home**: Value proposition, benefits, pricing, CTA
- **About**: Detailed service info, how it works, service area
- **Contact**: Booking process, contact methods, FAQ placeholder

**Alternatives Considered**:
- **Single-page site**: Better for very simple sites, but worse SEO (only one H1/title)
- **Blog/news section**: Adds maintenance burden, not requested
- **Service detail pages**: Over-engineered for simple service offering

**Trade-offs**:
- ✅ Pro: Easy to navigate
- ✅ Pro: Fast to build and maintain
- ⚠️ Con: Less content volume for SEO (mitigated by quality content)

### 4. Pricing Display: Static Tables (No Calculator)

**Decision**: Show pricing as static HTML tables, no dynamic calculation or filtering.

**Rationale**:
- **Transparency**: All prices visible at once builds trust
- **Simplicity**: No JavaScript needed, faster page load
- **Mobile-friendly**: Tables can be made responsive with Tailwind
- **SEO**: Text-based prices are crawlable

**Tables**:
1. City Routes (Nội thành): 3 rows (ghép ghế, 4-seater, 7-seater)
2. Airport Routes (Sân bay): 3 rows (ghép ghế, 4-seater, 7-seater)

**Alternatives Considered**:
- **Price calculator**: Adds complexity, not needed (only 2 route types)
- **Accordion/tabs**: Hides information, worse for SEO
- **Separate pricing page**: Splits user journey unnecessarily

**Trade-offs**:
- ✅ Pro: Instant comprehension
- ✅ Pro: Maximum SEO value
- ⚠️ Con: Less flexible if many route types added later

### 5. SEO Strategy: Vietnamese Keyword Focus + LocalBusiness Schema

**Decision**: Optimize for Vietnamese search queries with LocalBusiness structured data.

**SEO Implementation**:
- **Primary Keyword**: "xe ghép Nam Định Hà Nội"
- **Secondary Keywords**: "dịch vụ xe Nam Định", "xe khách Nam Định Hà Nội"
- **Meta Title Pattern**: "[Service Benefit] - Xe Ghép Nam Định Hà Nội"
- **JSON-LD Schema**: LocalBusiness type with service area, contact info
- **Open Graph**: Vietnamese locale (vi_VN), optimized for Zalo/Facebook sharing

**Rationale**:
- LocalBusiness schema helps Google show business info in search results
- Vietnamese locale signals content language to search engines
- Zalo is primary social platform in Vietnam (OG tags crucial)

**Alternatives Considered**:
- **Generic SEO**: Less targeted, would rank worse for local service
- **Paid ads only**: Expensive ongoing cost vs organic rankings

**Trade-offs**:
- ✅ Pro: Better local search visibility
- ✅ Pro: Rich snippets in search results
- ⚠️ Con: Vietnam-specific, won't rank well for other regions (acceptable)

### 6. Image Strategy: Placeholders for Phase 1

**Decision**: Use styled placeholder divs with text indicating "Hình ảnh sẽ được bổ sung" (images will be added).

**Rationale**:
- **Requirements Clarity**: Requirement specifies placeholders for now
- **Performance**: Avoids stock photos that don't match actual service
- **Flexibility**: Easy to replace with real vehicle/service photos later

**Implementation**:
- Use `div` with border, background color, centered text
- Maintain aspect ratio appropriate for content (16:9 for hero, 4:3 for gallery)
- Include descriptive alt text structure in comments for future image addition

**Alternatives Considered**:
- **Stock photos**: Misrepresents service, reduces trust
- **No image sections**: Feels incomplete, worse visual hierarchy

**Trade-offs**:
- ✅ Pro: Honest about content state
- ✅ Pro: Faster initial build
- ⚠️ Con: Less visually engaging (acceptable for launch)

### 7. Color Theme: #43A047 Green System

**Decision**: Use Material Design Green 600 (#43A047) as primary color with Tailwind custom theme.

**Color System**:
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#43A047',  // Green 600
        light: '#66BB6A',     // Green 400 (for hovers)
        dark: '#2E7D32',      // Green 800 (for active states)
      }
    }
  }
}
```

**Rationale**:
- **Psychology**: Green conveys safety, reliability, eco-friendliness
- **Contrast**: High contrast against white background (WCAG AA)
- **Distinctiveness**: Less common than blue in transportation industry
- **Vietnamese Market**: Green associated with growth and prosperity

**Alternatives Considered**:
- **Blue**: More common in transportation, less distinctive
- **Orange**: High visibility but may convey urgency/warning

**Trade-offs**:
- ✅ Pro: Unique brand identity
- ✅ Pro: Excellent accessibility
- ⚠️ Con: Need to carefully choose complementary colors for alerts/errors

## Risks / Trade-offs

### Risk: Mobile Performance on Low-End Devices
- **Mitigation**:
  - Use Next.js Image optimization
  - Minimize JavaScript bundle (prefer Server Components)
  - Test on actual low-end Android device
  - Set performance budget: <100KB initial JS bundle
  - Use Lighthouse CI in testing checklist

### Risk: Vietnamese Character Encoding Issues
- **Mitigation**:
  - Set UTF-8 charset in root layout
  - Test all Vietnamese characters (đ, ă, ơ, etc.) in actual deployment
  - Use web-safe fonts that support Vietnamese glyphs (Inter, Noto Sans Vietnamese)

### Risk: tel: and zalo.me Links May Not Work on All Devices
- **Mitigation**:
  - Provide fallback: display plain text number if link doesn't work
  - Test on iOS, Android, desktop browsers
  - Include copy-to-clipboard option for desktop users (future enhancement)

### Risk: Static Content Becomes Outdated
- **Mitigation**:
  - Document content update process in README
  - Use component props for pricing (easy to update)
  - Consider adding CMS in future if frequent updates needed

### Trade-off: No Backend = No Analytics Integration
- **Decision**: Accept limitation for Phase 1
- **Future**: Can add Google Analytics/Facebook Pixel without backend
- **Impact**: Won't track conversions, but can see page views

### Trade-off: App Router = Longer Build Times
- **Decision**: Accept longer builds for better SEO/performance
- **Impact**: ~10-30s builds vs ~2-5s for plain React
- **Justification**: Build time is one-time cost; user performance is ongoing benefit

## Migration Plan

N/A - This is a greenfield project with no existing system to migrate from.

### Deployment Strategy
1. **Development**: Local development with `npm run dev`
2. **Testing**: Build locally with `npm run build` and test with `npm run start`
3. **Production**: Deploy to Vercel/Netlify (static export) or any Node.js host
4. **Domain**: Point domain to hosting when ready

### Content Addition Process (Post-Launch)
1. **Images**: Replace placeholder divs with Next.js `<Image>` components
2. **Testimonials**: Add to About page when collected
3. **FAQ**: Add to Contact page as questions arise
4. **Blog** (optional): Create `/tin-tuc` route if needed

## Open Questions

### 1. Hosting Environment
**Question**: Where will this be deployed? (Vercel, Netlify, VPS, shared hosting?)
**Impact**: Affects whether we use static export or Node.js server
**Recommendation**: Ask user for hosting preference; default to Vercel (easiest)

### 2. Domain Name
**Question**: What domain will be used?
**Impact**: Needed for canonical URLs and Open Graph tags
**Recommendation**: Use placeholder `https://xeghepnamdinh.vn` in code; update before deployment

### 3. Google Analytics / Facebook Pixel
**Question**: Should we integrate analytics tracking codes?
**Impact**: Adds one script tag; minimal performance impact
**Recommendation**: Ask if user has GA4/FB Pixel ID; easy to add to root layout

### 4. Future Image Aspect Ratios
**Question**: What types of images will be added? (vehicle photos, route maps, team photos?)
**Impact**: Affects placeholder dimensions and layout structure
**Recommendation**: Use flexible aspect ratios; update when actual images available

### 5. Desktop Contact Bar Placement
**Question**: Where should sticky contact bar appear on desktop? (top right, side, bottom, or different design?)
**Impact**: Affects layout on >1024px screens
**Recommendation**: Default to same bottom position as mobile; can refine after seeing desktop usage analytics

## Architecture Diagram

```
┌─────────────────────────────────────────────┐
│           Root Layout (app/layout.tsx)      │
│  - Global Metadata                          │
│  - Theme Provider                           │
│  - Header + Navigation                      │
│  - Footer                                   │
│  - StickyContactBar (persistent)            │
└──────────────┬──────────────────────────────┘
               │
       ┌───────┴────────┬────────────────┐
       │                │                │
┌──────▼──────┐  ┌──────▼──────┐  ┌──────▼──────┐
│ / (Home)    │  │ /gioi-thieu │  │ /lien-he    │
│ page.tsx    │  │ page.tsx    │  │ page.tsx    │
├─────────────┤  ├─────────────┤  ├─────────────┤
│ - Hero      │  │ - About     │  │ - Contact   │
│ - Benefits  │  │   Details   │  │   Info      │
│ - Pricing   │  │ - Process   │  │ - Booking   │
│ - CTA       │  │             │  │   Steps     │
└─────────────┘  └─────────────┘  └─────────────┘

Components (components/)
├── ui/ (shadcn/ui)
│   ├── button.tsx
│   ├── card.tsx
│   └── table.tsx
├── Header.tsx
├── Footer.tsx
├── Navigation.tsx
└── StickyContactBar.tsx
```

## Performance Budget

| Metric | Target | Measurement |
|--------|--------|-------------|
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Initial JS Bundle | < 100KB | Webpack Bundle Analyzer |
| Time to Interactive | < 3s | Lighthouse |
| Mobile Lighthouse Score | > 90 | Lighthouse |
| SEO Score | 100 | Lighthouse |

## Success Criteria

1. ✅ All three pages render correctly on mobile and desktop
2. ✅ Sticky contact bar works on all pages
3. ✅ Phone and Zalo links open correct apps/dialers
4. ✅ Lighthouse SEO score = 100
5. ✅ Lighthouse Performance score > 90 on mobile
6. ✅ All Vietnamese content displays correctly (no encoding issues)
7. ✅ Site builds successfully with `npm run build`
8. ✅ Responsive navigation works on mobile (hamburger menu)
9. ✅ Pricing tables readable on all screen sizes
10. ✅ Copy-paste ready: another developer can run `npm install && npm run dev` successfully
