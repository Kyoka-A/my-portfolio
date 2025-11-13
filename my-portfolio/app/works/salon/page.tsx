'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
          <div className="flex items-center gap-4">
            <Link 
              href="/"
              className="group flex items-center gap-2 px-4 py-2 rounded-full border-2 border-purple-200 hover:border-purple-600 hover:bg-purple-50 transition-all duration-300"
            >
              <svg className="w-5 h-5 text-purple-600 group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-[11px] tracking-[0.2em] font-light text-purple-600 hidden md:inline">HOME</span>
            </Link>

            <div className="text-[28px] tracking-[0.15em]">
              PRISM
            </div>
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
              <Link href="/" className="flex items-center gap-2 text-purple-600 hover:opacity-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                ホームに戻る
              </Link>
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/salon/1.png"
            alt="PRISM Hair Color Salon"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="mb-6">
            <span className="block text-[60px] sm:text-[80px] md:text-[120px] tracking-[0.25em] leading-none mb-2 text-white drop-shadow-2xl">
              PRISM
            </span>
            <span className="block text-[18px] sm:text-[20px] md:text-[28px] tracking-[0.6em] text-white drop-shadow-lg">
              COLOR SPECIALIST
            </span>
          </h1>
          <p className="text-[13px] md:text-[15px] leading-loose tracking-wider text-white drop-shadow-lg">
            最先端のカラー技術で<br className="md:hidden" />
            あなただけの色を創造する
          </p>
        </div>

        {/* SNS Icons */}
        <div className="absolute bottom-12 right-8 md:right-16 flex flex-col gap-6 z-20">
          <a href="#" className="text-white hover:opacity-50 transition-opacity drop-shadow-lg" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-white hover:opacity-50 transition-opacity drop-shadow-lg" aria-label="TikTok">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a href="#" className="text-white hover:opacity-50 transition-opacity drop-shadow-lg" aria-label="Line">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <p className="text-[10px] tracking-[0.3em] [writing-mode:vertical-rl] font-light text-white drop-shadow-lg">
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
                  <div className="aspect-[3/4] relative overflow-hidden group rounded-lg">
                    <Image
                      src="/salon/2.png"
                      alt="PRISM Color Specialist"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="text-[12px] leading-loose text-center">
                    色彩理論に基づく<br />
                    プロフェッショナル技術
                  </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center space-y-8">
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
              { num: '02', title: 'インナーカラー', subtitle: '内側に隠れたアクセントカラーで個性を演出' },
              { num: '03', title: 'ファッションカラー', subtitle: 'ピンク・ブルー・パープル等、個性を表現する鮮やかな色彩' }
            ].map((menuItem, index) => (
              <div key={menuItem.num} className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`aspect-[4/3] relative overflow-hidden rounded-lg ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  {index === 0 ? (
                    <Image
                      src="/salon/5.png"
                      alt="バレイヤージュ"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : index === 1 ? (
                    <Image
                      src="/salon/6.png"
                      alt="インナーカラー"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <Image
                      src="/salon/8.png"
                      alt="ファッションカラー"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
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
            {['7', '9', '10', '11', '12', '13'].map((num) => (
              <div key={num} className="aspect-square relative overflow-hidden group cursor-pointer rounded-lg">
                <Image
                  src={`/salon/${num}.png`}
                  alt={`Gallery Image ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
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
                <p className="text-[15px]">03-1234-5678</p>
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

            <div className="aspect-square relative overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3662371732644!2d139.70762831525878!3d35.66525398019729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca4b3f3b0e5%3A0x4f0e8e1c5c5c5c5c!2z5p2x5Lqs6YO95riL6LC35Yy656We5a6u5YmN!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PRISM Hair Color Salon Location"
              ></iframe>
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