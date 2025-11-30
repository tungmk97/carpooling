'use client';

import Link from "next/link";
import { motion } from 'framer-motion';
import ImageCarousel from "@/components/ImageCarousel";
import { staggerContainer, staggerItem, buttonHover, buttonTap } from '@/lib/animations';

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
      <section className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white py-16 md:py-24 animated-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-5xl font-bold mb-6"
            >
              Xe Ghép Nam Định - Hà Nội
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-xl mb-8 text-gray-100"
            >
              Dịch vụ đưa đón uy tín, tiện lợi, giá cả phải chăng
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                whileHover={buttonHover}
                whileTap={buttonTap}
                href="tel:0971852897"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
              >
                Gọi ngay: 0971 852 897
              </motion.a>
              <motion.div whileHover={buttonHover} whileTap={buttonTap}>
                <Link
                  href="/lien-he"
                  className="block bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl font-semibold text-lg transition-colors"
                >
                  Xem thông tin liên hệ
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Lợi ích khi sử dụng dịch vụ của chúng tôi
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                }}
                className="bg-gray-50 p-8 rounded-xl shadow-md transition-shadow"
              >
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4"
          >
            Bảng giá dịch vụ
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Giá cả minh bạch, hợp lý. Liên hệ để được tư vấn chi tiết và đặt xe.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* City Routes Pricing */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-primary transition-shadow duration-300"
            >
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
            </motion.div>

            {/* Airport Routes Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-primary transition-shadow duration-300"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          >
            Hình ảnh dịch vụ
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ImageCarousel
              images={[
                "/images/sua.png",
                "/images/noithat1.jpg",
                "/images/noithat1.jpg",
                "/images/noithat1.jpg",
                "/images/noithat1.jpg",
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-dark to-primary text-white animated-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Sẵn sàng đặt xe ngay?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto"
          >
            Liên hệ với chúng tôi để đặt xe và nhận được tư vấn chi tiết về dịch
            vụ
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              whileHover={buttonHover}
              whileTap={buttonTap}
              href="tel:0971852897"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold text-lg transition-colors inline-block"
            >
              Gọi điện: 0971 852 897
            </motion.a>
            <motion.a
              whileHover={buttonHover}
              whileTap={buttonTap}
              href="https://zalo.me/0971852897"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-xl font-semibold text-lg transition-colors inline-block"
            >
              Nhắn Zalo
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
