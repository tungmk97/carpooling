# SEO Optimization Specification

## ADDED Requirements

### Requirement: Meta Tags
The website SHALL include comprehensive meta tags on all pages for search engine optimization.

#### Scenario: Page title tags
- **WHEN** a page is loaded
- **THEN** it includes a unique, descriptive title tag
- **AND** title is under 60 characters
- **AND** includes relevant keywords

#### Scenario: Meta description
- **WHEN** a page is loaded
- **THEN** it includes a meta description
- **AND** description is 150-160 characters
- **AND** accurately describes page content

#### Scenario: Home page SEO title
- **WHEN** home page is loaded
- **THEN** title is "Dịch Vụ Xe Ghép Nam Định – Hà Nội: Tiện Lợi, Tiết Kiệm, An Toàn"
- **AND** meta description highlights key service benefits

### Requirement: Open Graph Protocol
The website SHALL implement Open Graph meta tags for rich social media sharing.

#### Scenario: OG basic tags
- **WHEN** a page is shared on social media
- **THEN** og:title, og:description, og:type are present
- **AND** og:url contains the canonical page URL
- **AND** og:locale is set to "vi_VN"

#### Scenario: OG images
- **WHEN** a page is shared
- **THEN** og:image is defined with appropriate preview image
- **AND** image dimensions are specified (og:image:width, og:image:height)
- **AND** image alt text is provided

### Requirement: Semantic HTML Structure
The website SHALL use semantic HTML5 elements for improved accessibility and SEO.

#### Scenario: Document structure
- **WHEN** page HTML is rendered
- **THEN** it uses semantic elements (header, nav, main, section, article, footer)
- **AND** heading hierarchy (h1-h6) is logical
- **AND** landmarks are properly defined

#### Scenario: Content organization
- **WHEN** content is structured
- **THEN** one h1 per page describes main topic
- **AND** subheadings follow logical hierarchy
- **AND** lists use ul/ol appropriately

### Requirement: Mobile Performance
The website SHALL optimize loading performance for mobile devices.

#### Scenario: Fast initial load
- **WHEN** page is loaded on mobile
- **THEN** First Contentful Paint (FCP) is under 2 seconds
- **AND** Largest Contentful Paint (LCP) is under 2.5 seconds
- **AND** Cumulative Layout Shift (CLS) is under 0.1

#### Scenario: Resource optimization
- **WHEN** assets are loaded
- **THEN** images are optimized and served in modern formats
- **AND** CSS/JS is minified
- **AND** critical resources are prioritized

### Requirement: Structured Data
The website SHALL include structured data markup for enhanced search results.

#### Scenario: Local business schema
- **WHEN** pages include business information
- **THEN** JSON-LD structured data is present
- **AND** includes organization name, service area, contact info
- **AND** validates against schema.org standards

### Requirement: Canonical URLs
The website SHALL specify canonical URLs to prevent duplicate content issues.

#### Scenario: Canonical tag
- **WHEN** a page is rendered
- **THEN** link rel="canonical" is present
- **AND** points to the preferred version of the URL
- **AND** uses absolute URLs

### Requirement: Viewport Configuration
The website SHALL configure viewport meta tag for proper mobile rendering.

#### Scenario: Viewport settings
- **WHEN** page is loaded on mobile
- **THEN** viewport meta tag is present
- **AND** sets width=device-width, initial-scale=1
- **AND** prevents unwanted zoom behavior
