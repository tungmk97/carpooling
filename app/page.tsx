import type { Metadata } from "next";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "Xe Ghép Nam Định - Hà Nội | Dịch Vụ Đưa Đón Uy Tín, Giá Rẻ",
  description:
    "Dịch vụ xe ghép Nam Định - Hà Nội uy tín, giá rẻ. Đưa đón tận nơi, xe mới, lái xe chuyên nghiệp. Ghép ghế 250k, Bao xe 4 chỗ 900k, Bao xe 7 chỗ 1100k. Liên hệ: 0971852897",
  openGraph: {
    title: "Xe Ghép Nam Định - Hà Nội | Dịch Vụ Đưa Đón Uy Tín, Giá Rẻ",
    description:
      "Dịch vụ xe ghép Nam Định - Hà Nội uy tín, giá rẻ. Đưa đón tận nơi, xe mới, lái xe chuyên nghiệp",
    type: "website",
    locale: "vi_VN",
  },
};

export default function Home() {
  const benefits = [
    {
      title: "Tiện lợi và linh hoạt",
      description:
        "Đưa đón tận nơi, linh hoạt theo lịch trình của bạn. Không cần đến bến xe, tiết kiệm thời gian di chuyển.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Tiết kiệm chi phí",
      description:
        "Giá cả hợp lý, tiết kiệm hơn nhiều so với xe riêng hay taxi. Nhiều lựa chọn từ ghép ghế đến bao xe.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Chất lượng dịch vụ đảm bảo",
      description:
        "Xe mới, sạch sẽ, tài xế lái xe an toàn và thân thiện. Cam kết đúng giờ, đúng địa điểm.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Phù hợp nhiều nhu cầu",
      description:
        "Đáp ứng mọi nhu cầu: đi làm, thăm thân, du lịch, ra sân bay. Có cả ghép ghế và bao riêng xe.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Đặt xe dễ dàng",
      description:
        "Đặt xe nhanh chóng qua điện thoại hoặc Zalo. Chỉ cần một cuộc gọi là có xe đón bạn.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
    },
    {
      title: "Lợi ích so với phương tiện khác",
      description:
        "Thoải mái hơn xe khách, rẻ hơn taxi, nhanh hơn xe bus. Không lo tắc đường hay tìm chỗ đỗ xe.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 whitespace-nowrap">
              Xe Ghép Nam Định - Hà Nội
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 whitespace-nowrap">
              Dịch vụ đưa đón uy tín, tiện lợi, giá cả phải chăng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0971852897"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Gọi ngay: 0971 852 897
              </a>
              <Link
                href="/lien-he"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                Xem thông tin liên hệ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Lợi ích khi sử dụng dịch vụ của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Bảng giá dịch vụ
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Giá cả minh bạch, hợp lý. Liên hệ để được tư vấn chi tiết và đặt xe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* City Routes Pricing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="text-2xl font-bold text-center">Nội thành</h3>
                <p className="text-center text-sm text-gray-100 mt-1">
                  Nam Định ↔ Hà Nội (trong thành phố)
                </p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Loại dịch vụ
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">
                        Giá
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Ghép ghế</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        250k
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Bao xe 4 chỗ</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        900k
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Bao xe 7 chỗ</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        1.100k
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Airport Routes Pricing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="text-2xl font-bold text-center">Sân bay</h3>
                <p className="text-center text-sm text-gray-100 mt-1">
                  Nam Định ↔ Sân bay Nội Bài
                </p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">
                        Loại dịch vụ
                      </th>
                      <th className="text-right py-3 px-4 font-semibold text-gray-700">
                        Giá
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Ghép ghế</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        450k
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Bao xe 4 chỗ</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        1.100k
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 text-gray-600">Bao xe 7 chỗ</td>
                      <td className="py-3 px-4 text-right font-semibold text-primary">
                        1.300k
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Hình ảnh dịch vụ
          </h2>
          <ImageCarousel
            images={[
              "/images/sua.png",
              "/images/noithat1.jpg",
              "/images/noithat1.jpg",
              "/images/noithat1.jpg",
              "/images/noithat1.jpg",
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng đặt xe ngay?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để đặt xe và nhận được tư vấn chi tiết về dịch
            vụ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0971852897"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Gọi điện: 0971 852 897
            </a>
            <a
              href="https://zalo.me/0971852897"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
