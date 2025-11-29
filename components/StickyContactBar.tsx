"use client";

export default function StickyContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3 justify-center items-center">
          {/* Phone Button */}
          <a
            href="tel:0971852897"
            className="flex-1 max-w-sm flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 active:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            aria-label="Gọi điện thoại 0971852897"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>0971 852 897</span>
          </a>

          {/* Zalo Button */}
          <a
            href="https://zalo.me/0971852897"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-sm flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 active:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md"
            aria-label="Nhắn tin Zalo 0971852897"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.477 2 2 6.145 2 11.278c0 2.853 1.333 5.396 3.422 7.13l-.634 3.173c-.055.276.178.514.45.46l3.956-1.582c1.527.618 3.214.963 4.806.963 5.523 0 10-4.145 10-9.278S17.523 2 12 2zm.126 13.5h-2.25v-6h2.25v6zm3.375 0h-2.25v-6h2.25v6zm-6.75 0h-2.25v-6h2.25v6z" />
            </svg>
            <span>Chat Zalo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
