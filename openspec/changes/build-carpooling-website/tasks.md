# Implementation Tasks

---
## ⚠️ CRITICAL: VIETNAMESE LANGUAGE REQUIREMENT
**ALL user-facing text, labels, buttons, navigation, content, and UI elements MUST be in Vietnamese (vi-VN).
NO English text should appear anywhere in the user interface.**
Verify this requirement at EVERY step during implementation.

---

## 1. Project Setup
- [x] 1.1 Initialize Next.js project with App Router and TypeScript
- [x] 1.2 Configure Tailwind CSS with custom green theme (#43A047)
- [ ] 1.3 Install and configure shadcn/ui
- [x] 1.4 Set up project structure (app/, components/, lib/)
- [x] 1.5 Configure TypeScript strict mode
- [x] 1.6 **Set HTML lang="vi" and UTF-8 encoding in root layout**

## 2. Core Layout & Theme
- [x] 2.1 Create root layout with HTML structure and metadata
- [x] 2.2 Configure Tailwind theme colors (primary green: #43A047)
- [x] 2.3 Create shared Header component with site title
- [x] 2.4 Create shared Footer component
- [x] 2.5 Create Navigation component with links to /, /gioi-thieu, /lien-he
- [x] 2.6 Implement responsive navigation (hamburger menu for mobile)

## 3. Contact System
- [x] 3.1 Create StickyContactBar component
- [x] 3.2 Implement phone link with tel:0971852897
- [x] 3.3 Implement Zalo link with zalo.me/0971852897
- [x] 3.4 Add phone and Zalo icons
- [x] 3.5 Position sticky bar (bottom on mobile, appropriate for desktop)
- [x] 3.6 Ensure contact bar appears on all pages
- [x] 3.7 Style contact bar with green theme and high contrast

## 4. Home Page (/)
- [x] 4.1 Create page.tsx for home route
- [x] 4.2 Add SEO metadata (title, description, Open Graph)
- [x] 4.3 Create hero section with service title
- [x] 4.4 Implement service benefits section (6 key points):
  - [x] 4.4.1 Tiện lợi và linh hoạt
  - [x] 4.4.2 Tiết kiệm chi phí
  - [x] 4.4.3 Chất lượng dịch vụ đảm bảo
  - [x] 4.4.4 Phù hợp nhiều nhu cầu
  - [x] 4.4.5 Đặt xe dễ dàng
  - [x] 4.4.6 Lợi ích so với phương tiện khác
- [x] 4.5 Create pricing tables component
- [x] 4.6 Add city routes pricing table (Ghép ghế 250k, Bao xe 4 chỗ 900k, Bao xe 7 chỗ 1100k)
- [x] 4.7 Add airport pricing table (Ghép ghế 450k, Bao xe 4 chỗ 1100k, Bao xe 7 chỗ 1300k)
- [x] 4.8 Add image placeholder section with note for future images
- [x] 4.9 Add call-to-action section linking to contact

## 5. About Page (/gioi-thieu)
- [x] 5.1 Create app/gioi-thieu/page.tsx
- [x] 5.2 Add SEO metadata specific to about page
- [x] 5.3 Create detailed service information section
- [x] 5.4 Add expanded benefits content
- [x] 5.5 Include service process/workflow explanation
- [x] 5.6 Add testimonial placeholder section (for future)

## 6. Contact Page (/lien-he)
- [x] 6.1 Create app/lien-he/page.tsx
- [x] 6.2 Add SEO metadata specific to contact page
- [x] 6.3 Display contact information (phone, Zalo)
- [x] 6.4 Add booking instructions section
- [x] 6.5 Create "How to Book" step-by-step guide:
  - [x] 6.5.1 Gọi điện, nhắn Zalo, Facebook
  - [x] 6.5.2 Cung cấp điểm đón / điểm trả
  - [x] 6.5.3 Xác nhận & tài xế đến đón đúng giờ
- [x] 6.6 Add service area information (Nam Định - Hà Nội)

## 7. SEO Optimization
- [x] 7.1 Configure metadata in root layout
- [x] 7.2 Add viewport meta tag
- [x] 7.3 Implement generateMetadata() for each page
- [x] 7.4 Add Open Graph tags (og:title, og:description, og:type, og:url, og:locale)
- [ ] 7.5 Add og:image placeholder configuration
- [x] 7.6 Implement semantic HTML structure (header, nav, main, section, footer)
- [x] 7.7 Ensure proper heading hierarchy (h1, h2, h3)
- [ ] 7.8 Add structured data (JSON-LD) for LocalBusiness
- [ ] 7.9 Configure canonical URLs
- [ ] 7.10 Optimize images with Next.js Image component

## 8. Mobile Optimization
- [x] 8.1 Verify mobile-first responsive breakpoints
- [x] 8.2 Test touch target sizes (minimum 44x44px)
- [x] 8.3 Ensure text readability on mobile (minimum 16px body)
- [x] 8.4 Test responsive navigation on different screen sizes
- [x] 8.5 Optimize layout spacing for mobile
- [x] 8.6 Test sticky contact bar on mobile devices
- [x] 8.7 Verify smooth scrolling performance

## 9. UI Components with shadcn/ui
- [ ] 9.1 Install Button component from shadcn/ui
- [ ] 9.2 Install Card component for service benefits
- [ ] 9.3 Install Table component for pricing
- [ ] 9.4 Customize component themes to match green color scheme
- [ ] 9.5 Install navigation menu components (if needed)
Note: shadcn/ui components were not used in favor of custom components for simplicity

## 10. Testing & Validation
- [x] 10.1 **VERIFY: ALL text is in Vietnamese - scan entire site for any English text**
- [x] 10.2 **VERIFY: All Vietnamese diacritics (đ, ă, â, ê, ô, ơ, ư, tone marks) display correctly**
- [x] 10.3 Test all navigation links
- [x] 10.4 Verify phone tel: link opens dialer
- [x] 10.5 Verify Zalo link opens correctly
- [x] 10.6 Test responsive design on mobile, tablet, desktop
- [x] 10.7 Validate HTML structure and lang="vi" attribute
- [ ] 10.8 Run Lighthouse audit for SEO
- [ ] 10.9 Run Lighthouse audit for Performance
- [ ] 10.10 Run Lighthouse audit for Accessibility
- [ ] 10.11 Test on actual mobile device if possible
- [x] 10.12 **Final check: Confirm NO English text anywhere in the UI**

## 11. Build & Deployment Preparation
- [x] 11.1 Run production build (npm run build)
- [x] 11.2 Fix any build errors or warnings
- [x] 11.3 Test production build locally
- [x] 11.4 Verify all pages render correctly in production
- [ ] 11.5 Optimize bundle size if needed
- [ ] 11.6 Prepare deployment configuration (if deploying)

## Notes
- All content is in Vietnamese as per requirements
- Green theme (#43A047) must be consistently applied
- Mobile-first approach is critical - test on mobile throughout development
- Sticky contact bar is a key feature - ensure it works perfectly on all pages
- Image placeholders should clearly indicate they are temporary
- Focus on clean, simple implementation that can be easily maintained
