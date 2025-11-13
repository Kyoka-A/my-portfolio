export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4A3F35] to-[#3A2F25] text-white py-12 px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">あ</span>
          </div>
          <span className="text-2xl font-bold">秋田きょうか</span>
        </div>
        <p className="text-white/70 mb-8">
          HP制作で、あなたのビジネスをサポートします
        </p>
        <div className="text-sm text-white/60">
          <p>© 2025 秋田きょうか. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

