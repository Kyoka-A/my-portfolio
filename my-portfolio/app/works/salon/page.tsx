'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function SalonPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 transition-all">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6 flex items-center justify-between">
          <div className="text-[28px] tracking-[0.15em]">
            PRISM
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:flex items-center gap-12 text-[11px] tracking-[0.2em]">
            <a href="#home" className="hover:opacity-50 transition-opacity duration-300">HOME</a>
            <a href="#concept" className="hover:opacity-50 transition-opacity duration-300">CONCEPT</a>
            <a href="#menu" className="hover:opacity-50 transition-opacity duration-300">COLOR</a>
            <a href="#gallery" className="hover:opacity-50 transition-opacity duration-300">GALLERY</a>
            <a href="#access" className="hover:opacity-50 transition-opacity duration-300">ACCESS</a>
            <a href="#reservation" className="px-8 py-3 border border-black hover:bg-black hover:text-white transition-all duration-300">
              BOOKING
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-40 flex items-center justify-center">
            <nav className="flex flex-col items-center gap-8 text-base tracking-[0.2em]">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50">HOME</a>
              <a href="#concept" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50">CONCEPT</a>
              <a href="#menu" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50">COLOR</a>
              <a href="#gallery" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50">GALLERY</a>
              <a href="#access" onClick={() => setIsMenuOpen(false)} className="hover:opacity-50">ACCESS</a>
              <a href="#reservation" onClick={() => setIsMenuOpen(false)} className="px-10 py-4 border border-black hover:bg-black hover:text-white transition">
                BOOKING
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-rose-50 flex items-center justify-center">
          <span className="text-[120px] text-gray-200 select-none">画像</span>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="mb-6">
            <span className="block text-[80px] md:text-[120px] tracking-[0.25em] leading-none mb-2">
              PRISM
            </span>
            <span className="block text-[20px] md:text-[28px] tracking-[0.6em]">
              COLOR SPECIALIST
            </span>
          </h1>
          <p className="text-[13px] md:text-[15px] leading-loose tracking-wider">
            最先端のカラー技術で<br className="md:hidden" />
            あなただけの色を創造する
          </p>
        </div>

        {/* SNS Icons */}
        <div className="absolute bottom-12 right-8 md:right-16 flex flex-col gap-6 z-20">
          <a href="#" className="text-black hover:opacity-50 transition-opacity" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-black hover:opacity-50 transition-opacity" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a href="#" className="text-black hover:opacity-50 transition-opacity" aria-label="Line">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2">
          <p className="text-[10px] tracking-[0.3em] [writing-mode:vertical-rl] font-light">
            SCROLL
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Vertical Title */}
            <div className="hidden lg:block">
              <h2 className="text-[42px] tracking-[0.3em] [writing-mode:vertical-rl] h-[500px]">
                CONCEPT
              </h2>
            </div>
            <h2 className="lg:hidden text-[32px] tracking-[0.3em] mb-8 text-center">
              CONCEPT
            </h2>

            <div className="flex-1">
              <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                {/* Left Image */}
                <div className="space-y-6">
                  <div className="aspect-[3/4] bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 relative overflow-hidden group">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-200 text-5xl">
                      画像
                    </div>
                  </div>
                  <p className="text-[12px] leading-loose text-center">
                    色彩理論に基づく<br />
                    プロフェッショナル技術
                  </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center space-y-8">
                  <div className="aspect-[3/4] md:aspect-auto md:h-auto bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-200 text-5xl">
                      画像
                    </div>
                  </div>
                  <div className="space-y-8">
                    <p className="text-[14px] leading-loose">
                      PRISMは、ヘアカラーに特化した専門サロンです。パリ・ロンドン・NYのトレンドを取り入れた最新技術と、髪を傷めないケアブリーチで、理想の発色を実現。一人ひとりの肌色・瞳の色に合わせた、パーソナルカラー診断も行っています。
                    </p>
                    <button className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] hover:opacity-50 transition-opacity">
                      <span>詳しく見る</span>
                      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 md:py-40 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20 md:mb-32">
            <div className="flex items-start gap-12">
              <h2 className="hidden lg:block text-[42px] tracking-[0.3em] [writing-mode:vertical-rl]">
                COLOR
              </h2>
              <div className="flex-1">
                <h2 className="lg:hidden text-[32px] tracking-[0.3em] mb-4 text-center">
                  COLOR
                </h2>
                <p className="text-[11px] tracking-[0.2em] hidden lg:block">
                  TREND COLOR MENU
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-32 md:space-y-48">
            {[
              { num: '01', title: 'バレイヤージュ', subtitle: 'パリ発、立体感を生み出す最新グラデーション技法' },
              { num: '02', title: 'ハイライト＆ローライト', subtitle: '繊細な陰影で作る、ナチュラルな外国人風カラー' },
              { num: '03', title: 'ファッションカラー', subtitle: 'ピンク・ブルー・パープル等、個性を表現する鮮やかな色彩' }
            ].map((menuItem, index) => (
              <div key={menuItem.num} className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`aspect-[4/3] bg-gradient-to-br ${
                  index === 0 ? 'from-amber-100 via-pink-100 to-purple-100' :
                  index === 1 ? 'from-cyan-100 via-blue-100 to-purple-100' :
                  'from-pink-100 via-purple-100 to-blue-100'
                } relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-200 text-5xl">
                    画像
                  </div>
                </div>

                <div className={`space-y-8 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <p className="text-[11px] tracking-[0.2em] italic">
                    color #{menuItem.num}
                  </p>
                  <h3 className="text-[24px] md:text-[28px] leading-relaxed">
                    {menuItem.title}
                  </h3>
                  <div className="space-y-4">
                    <p className="text-[15px] leading-relaxed">
                      {menuItem.subtitle}
                    </p>
                    <p className="text-[13px] leading-loose text-gray-600">
                      世界のファッションウィークから得たインスピレーションと、日本人の髪質を知り尽くした技術力で、ダメージを最小限に抑えながら理想の色を実現します。カラー専門サロンならではの豊富な色彩バリエーションをご用意しています。
                    </p>
                  </div>
                  <button className="group inline-flex items-center gap-3 text-[11px] tracking-[0.2em] hover:opacity-50 transition-opacity">
                    <span>詳しく見る</span>
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[32px] md:text-[42px] tracking-[0.3em] mb-16 md:mb-24 text-center">
            GALLERY
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              'from-pink-200 via-purple-200 to-blue-200',
              'from-amber-200 via-orange-200 to-rose-200',
              'from-cyan-200 via-blue-200 to-purple-200',
              'from-violet-200 via-fuchsia-200 to-pink-200',
              'from-lime-200 via-emerald-200 to-teal-200',
              'from-rose-200 via-pink-200 to-purple-200'
            ].map((gradient, num) => (
              <div key={num} className={`aspect-square bg-gradient-to-br ${gradient} relative overflow-hidden group cursor-pointer`}>
                <div className="absolute inset-0 flex items-center justify-center text-gray-200 text-4xl">
                  画像
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 md:py-40 px-6 md:px-16 bg-[#fafafa]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[42px] tracking-[0.3em] mb-16 md:mb-24 text-center">
            ACCESS
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-12">
              <div>
                <h3 className="text-[11px] tracking-[0.2em] mb-6">ADDRESS</h3>
                <p className="text-[13px] leading-loose">
                  〒150-0001<br />
                  東京都渋谷区神宮前5-28-7<br />
                  プリズムビル 3F
                </p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.2em] mb-6">TEL</h3>
                <p className="text-[15px]">03-6427-8910</p>
              </div>

              <div>
                <h3 className="text-[11px] tracking-[0.2em] mb-6">HOURS</h3>
                <p className="text-[13px] leading-loose">
                  平日　11:00 - 21:00<br />
                  土日祝　10:00 - 20:00<br />
                  <span className="mt-2 inline-block">定休日: 毎週火曜日</span>
                </p>
              </div>
            </div>

            <div className="aspect-square bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 flex items-center justify-center text-gray-200 text-4xl">
              地図
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 md:py-40 px-6 md:px-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[42px] tracking-[0.3em] mb-12">
            BOOKING
          </h2>
          <p className="text-[13px] md:text-[14px] leading-loose mb-16">
            初回のお客様には、カウンセリングで肌色・瞳の色を診断し、<br />
            最適なカラーをご提案いたします。完全予約制。
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-16 py-5 border border-black text-[11px] tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
              ONLINE BOOKING
            </button>
            <button className="px-16 py-5 border border-black text-[11px] tracking-[0.2em] hover:bg-black hover:text-white transition-all duration-300">
              PHONE BOOKING
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-16 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[24px] tracking-[0.15em]">
              PRISM
            </div>

            <div className="flex gap-8">
              <a href="#" className="hover:opacity-50 transition-opacity" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a href="#" className="hover:opacity-50 transition-opacity" aria-label="Line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-[10px] text-gray-400 tracking-wider">
            © 2024 PRISM Hair Color Salon. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}