import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ | Xe Ghép Nam Định - Hà Nội",
  description: "Liên hệ đặt xe ghép Nam Định - Hà Nội. Gọi điện: 0971852897 hoặc nhắn tin Zalo. Hướng dẫn đặt xe nhanh chóng, đơn giản.",
  openGraph: {
    title: "Liên Hệ | Xe Ghép Nam Định - Hà Nội",
    description: "Liên hệ đặt xe ghép Nam Định - Hà Nội. Gọi điện: 0971852897 hoặc nhắn tin Zalo",
    type: "website",
    locale: "vi_VN",
  },
};

export default function LienHe() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Liên hệ đặt xe
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Chúng tôi luôn sẵn sàng phục vụ bạn
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Thông tin liên hệ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone Contact */}
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Gọi điện thoại</h3>
                <a
                  href="tel:0971852897"
                  className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors block mb-2"
                >
                  0971 852 897
                </a>
                <p className="text-gray-600">
                  Gọi ngay để đặt xe hoặc được tư vấn chi tiết về dịch vụ
                </p>
              </div>

              {/* Zalo Contact */}
              <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.145 2 11.278c0 2.853 1.333 5.396 3.422 7.13l-.634 3.173c-.055.276.178.514.45.46l3.956-1.582c1.527.618 3.214.963 4.806.963 5.523 0 10-4.145 10-9.278S17.523 2 12 2zm.126 13.5h-2.25v-6h2.25v6zm3.375 0h-2.25v-6h2.25v6zm-6.75 0h-2.25v-6h2.25v6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Nhắn tin Zalo</h3>
                <a
                  href="https://zalo.me/0971852897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-bold text-primary hover:text-primary-dark transition-colors block mb-2"
                >
                  0971 852 897
                </a>
                <p className="text-gray-600">
                  Nhắn tin qua Zalo để đặt xe nhanh chóng và tiện lợi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              Hướng dẫn đặt xe
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Đặt xe đơn giản chỉ với 3 bước
            </p>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Liên hệ với chúng tôi
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Gọi điện thoại hoặc nhắn tin Zalo theo số <strong className="text-primary">0971 852 897</strong>
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-gray-600">
                      <strong>Lưu ý:</strong> Bạn cũng có thể liên hệ qua Facebook hoặc các kênh khác nếu có
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Cung cấp thông tin đặt xe
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Cung cấp các thông tin sau để chúng tôi phục vụ bạn tốt nhất:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span><strong>Điểm đón:</strong> Địa chỉ cụ thể nơi bạn muốn được đón</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span><strong>Điểm trả:</strong> Địa chỉ nơi bạn muốn được trả khách</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span><strong>Thời gian:</strong> Ngày giờ bạn muốn đi (hoặc thời gian linh hoạt)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span><strong>Số lượng khách:</strong> Số người đi cùng (nếu bao xe)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                      </svg>
                      <span><strong>Loại dịch vụ:</strong> Ghép ghế, bao xe 4 chỗ, hay bao xe 7 chỗ</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Xác nhận và tài xế đến đón
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Sau khi xác nhận thông tin và giá cước, tài xế sẽ đến đón bạn đúng giờ đã hẹn.
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                    <p className="text-sm text-gray-600">
                      <strong>Lưu ý:</strong> Vui lòng có mặt đúng giờ tại điểm đón để đảm bảo lịch trình.
                      Nếu có thay đổi, hãy liên hệ với chúng tôi ngay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Khu vực phục vụ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Nam Định</h3>
                <p className="text-gray-600">
                  Phục vụ đón và trả khách tại mọi địa điểm trong thành phố Nam Định và các huyện lân cận.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-4">Hà Nội</h3>
                <p className="text-gray-600">
                  Phục vụ đón và trả khách tại tất cả các quận, huyện của Hà Nội và sân bay Nội Bài.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Placeholder Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Câu hỏi thường gặp
            </h2>
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-400 text-lg">
                Phần câu hỏi thường gặp sẽ được bổ sung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng đặt xe?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay để được tư vấn và đặt xe
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
