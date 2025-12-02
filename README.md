# Xe Ghép Nam Định - Hà Nội - Nội Bài Website

Website dịch vụ xe ghép giữa Nam Định và Hà Nội, được xây dựng bằng Next.js 16 với App Router, TypeScript, và Tailwind CSS v4.

## Tính năng

- ✅ Thiết kế mobile-first, tối ưu cho thiết bị di động
- ✅ 100% nội dung tiếng Việt
- ✅ Thanh liên hệ cố định với số điện thoại và Zalo
- ✅ Bảng giá dịch vụ rõ ràng
- ✅ SEO được tối ưu hóa
- ✅ Responsive navigation với hamburger menu
- ✅ Hiệu suất cao với Next.js App Router

## Yêu cầu hệ thống

- Node.js 18.x hoặc cao hơn
- npm hoặc yarn

## Cài đặt

```bash
# Cài đặt các dependencies
npm install

# Chạy development server
npm run dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint

## Cấu trúc dự án

```
website/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout với metadata
│   ├── page.tsx             # Trang chủ
│   ├── gioi-thieu/          # Trang giới thiệu
│   │   └── page.tsx
│   ├── lien-he/             # Trang liên hệ
│   │   └── page.tsx
│   └── globals.css          # Global styles với Tailwind
├── components/              # React components
│   ├── Header.tsx           # Header với site title
│   ├── Navigation.tsx       # Navigation menu (responsive)
│   ├── Footer.tsx           # Footer
│   └── StickyContactBar.tsx # Sticky contact bar
└── public/                  # Static assets
```

## Thông tin liên hệ

Để cập nhật thông tin liên hệ, chỉnh sửa các file sau:

- `components/StickyContactBar.tsx` - Thanh liên hệ cố định
- `components/Footer.tsx` - Footer
- `app/lien-he/page.tsx` - Trang liên hệ

Số điện thoại hiện tại: **0971 852 897**

## Cập nhật giá dịch vụ

Chỉnh sửa file `app/page.tsx` và tìm phần "Pricing Section" để cập nhật giá.

## Triển khai

### Vercel (Khuyến nghị)

1. Push code lên GitHub
2. Import project vào Vercel
3. Vercel sẽ tự động build và deploy

### Các nền tảng khác

```bash
# Build production
npm run build

# Files sẽ được tạo trong thư mục .next
# Deploy thư mục .next lên server
```

## Tùy chỉnh màu sắc

Màu sắc chính được định nghĩa trong `app/globals.css`:

```css
@theme {
  --color-primary: #43a047; /* Xanh lá chính */
  --color-primary-light: #66bb6a; /* Xanh lá nhạt (hover) */
  --color-primary-dark: #2e7d32; /* Xanh lá đậm (active) */
}
```

## Hỗ trợ

Nếu gặp vấn đề khi sử dụng, vui lòng kiểm tra:

1. Node.js version >= 18
2. Đã chạy `npm install` đầy đủ
3. Port 3000 chưa bị sử dụng

## License

ISC
