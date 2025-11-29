export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-lg text-primary mb-3">
              Xe Ghép Nam Định - Hà Nội
            </h3>
            <p className="text-gray-600 text-sm">
              Dịch vụ xe ghép uy tín, chất lượng cao, đưa đón tận nơi giữa Nam Định và Hà Nội.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-3">Liên hệ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="tel:0971852897" className="hover:text-primary transition-colors">
                  Điện thoại: 0971 852 897
                </a>
              </li>
              <li>
                <a
                  href="https://zalo.me/0971852897"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Zalo: 0971 852 897
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg text-gray-800 mb-3">Khu vực phục vụ</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Nam Định - Hà Nội</li>
              <li>Hà Nội - Nam Định</li>
              <li>Sân bay Nội Bài</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Xe Ghép Nam Định - Hà Nội. Bản quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
