'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, buttonHover, buttonTap } from '@/lib/animations';

export default function GioiThieu() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white py-16 md:py-20 animated-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Giới thiệu dịch vụ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-100"
            >
              Dịch vụ xe ghép Nam Định - Hà Nội uy tín, chất lượng cao
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 mb-6"
            >
              Về dịch vụ của chúng tôi
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-gray-600 space-y-4"
            >
              <p>
                <strong className="text-primary">Xe Ghép Nam Định - Hà Nội</strong> là dịch vụ vận chuyển
                hành khách chuyên nghiệp, cung cấp giải pháp di chuyển tiện lợi, an toàn và tiết kiệm
                giữa Nam Định và Hà Nội.
              </p>
              <p>
                Chúng tôi hiểu rằng việc di chuyển giữa hai thành phố là nhu cầu thường xuyên của nhiều
                người dân, từ công việc, học tập đến thăm thân hay du lịch. Vì vậy, chúng tôi cam kết
                mang đến dịch vụ chất lượng cao với giá cả hợp lý.
              </p>
              <p>
                Với đội ngũ tài xế giàu kinh nghiệm, xe mới, sạch sẽ và quy trình đặt xe đơn giản,
                chúng tôi tự hào là lựa chọn tin cậy của hàng ngàn khách hàng.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-800 mb-12 text-center"
            >
              Quy trình sử dụng dịch vụ
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Step 1 */}
              <motion.div variants={staggerItem} className="text-center bg-white p-6 rounded-xl shadow-md"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Liên hệ đặt xe
                </h3>
                <p className="text-gray-600">
                  Gọi điện hoặc nhắn tin Zalo cho chúng tôi để đặt xe. Cung cấp thông tin
                  về điểm đón, điểm trả và thời gian mong muốn.
                </p>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={staggerItem} className="text-center bg-white p-6 rounded-xl shadow-md"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Xác nhận thông tin
                </h3>
                <p className="text-gray-600">
                  Chúng tôi sẽ xác nhận lại thông tin đặt xe, loại dịch vụ (ghép ghế hay bao xe),
                  giá cả và thời gian đón.
                </p>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={staggerItem} className="text-center bg-white p-6 rounded-xl shadow-md"
              >
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Đón và di chuyển
                </h3>
                <p className="text-gray-600">
                  Tài xế sẽ đến đón bạn đúng giờ tại địa điểm đã hẹn.
                  An toàn di chuyển và đưa bạn đến đích một cách thuận tiện nhất.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Khu vực phục vụ
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Từ Nam Định đi Hà Nội
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Đón tại mọi địa điểm trong thành phố Nam Định
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Trả khách tại mọi quận, huyện Hà Nội
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Phục vụ đưa đón sân bay Nội Bài
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Từ Hà Nội về Nam Định
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Đón tại mọi quận, huyện Hà Nội
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Đón tại sân bay Nội Bài
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Trả khách tại mọi địa điểm trong Nam Định
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Cam kết của chúng tôi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Đúng giờ</h3>
                <p className="text-gray-600">
                  Cam kết đón đúng giờ đã hẹn, giúp bạn chủ động trong lịch trình của mình.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">An toàn</h3>
                <p className="text-gray-600">
                  Tài xế lái xe an toàn, tuân thủ luật giao thông, xe được bảo dưỡng định kỳ.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Giá cả minh bạch</h3>
                <p className="text-gray-600">
                  Giá cước rõ ràng, không phát sinh chi phí ngoài cam kết.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-primary mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dịch vụ tận tâm</h3>
                <p className="text-gray-600">
                  Tài xế thân thiện, nhiệt tình hỗ trợ khách hàng trong suốt hành trình.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
              Khách hàng nói gì về chúng tôi
            </h2>
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <p className="text-gray-400 text-lg">
                Phần đánh giá của khách hàng sẽ được bổ sung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bạn cần đặt xe ngay?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn và đặt xe
          </p>
          <Link
            href="/lien-he"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Xem thông tin liên hệ
          </Link>
        </div>
      </section>
    </div>
  );
}
