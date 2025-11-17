'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = ['/restaurant/1.png', '/restaurant/2.png', '/restaurant/3.png'];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // スライドショー自動再生
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // 5秒ごとに切り替え

        return () => clearInterval(timer);
    }, [slides.length]);

    const handleMenuClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="relative font-serif" style={{ fontFamily: "'游明朝体', 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'HG明朝E', 'ＭＳ Ｐ明朝', 'MS PMincho', serif" }}>
            {/* Header */}
            <header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                    isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-6 lg:px-12 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-6 lg:gap-10">
                        {/* Back to Portfolio Button */}
                        <a 
                            href="/"
                            className={`flex items-center gap-2 text-sm lg:text-base font-medium tracking-wide transition-all duration-300 hover:opacity-70 ${
                                isScrolled ? 'text-gray-800' : 'text-white'
                            }`}
                        >
                            <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="hidden sm:inline">Back to Portfolio</span>
                            <span className="sm:hidden">Back</span>
                        </a>
                        
                        <h1 className="text-sm tracking-[0.2em] font-light">
                            <a 
                                href="#home" 
                                className={`transition-colors duration-300 ${
                                    isScrolled ? 'text-gray-800' : 'text-white'
                                }`}
                            >
                                BIO HARMONIE
                            </a>
                        </h1>
                    </div>
                    
                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-12 h-12 flex flex-col justify-center items-center gap-1.5 relative z-50"
                        aria-label="Menu"
                    >
                        <span className={`w-8 h-0.5 transition-all duration-300 ${
                            isMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 
                            isScrolled ? 'bg-gray-800' : 'bg-white'
                        }`} />
                        <span className={`w-8 h-0.5 transition-all duration-300 ${
                            isMenuOpen ? 'opacity-0' : 'opacity-100'
                        } ${isScrolled ? 'bg-gray-800' : 'bg-white'}`} />
                        <span className={`w-8 h-0.5 transition-all duration-300 ${
                            isMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 
                            isScrolled ? 'bg-gray-800' : 'bg-white'
                        }`} />
                    </button>
                </div>
            </header>

            {/* Full Screen Menu */}
            <div 
                className={`fixed inset-0 bg-[#3d5a2e] z-40 flex items-center justify-center transition-all duration-700 ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <nav className="text-center">
                    <ul className="space-y-12">
                        {[
                            { num: '01', text: 'Concept', href: '#concept' },
                            { num: '02', text: 'Visual', href: '#visual' },
                            { num: '03', text: 'Menu', href: '#menu' },
                            { num: '04', text: 'Access', href: '#access' },
                        ].map((item) => (
                            <li key={item.num} className="overflow-hidden">
                                <a
                                    href={item.href}
                                    onClick={handleMenuClick}
                                    className="flex items-center justify-center gap-6 text-white hover:opacity-70 transition-opacity duration-300 group"
                                >
                                    <span className="text-2xl font-light opacity-50">{item.num}</span>
                                    <span className="text-5xl lg:text-6xl font-light tracking-[0.1em] group-hover:tracking-[0.15em] transition-all duration-300">
                                        {item.text}
                                    </span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* スライドショー背景 */}
                <div className="absolute inset-0">
                    {slides.map((slide, index) => (
                        <div
                            key={slide}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                                index === currentSlide 
                                    ? 'translate-x-0 opacity-100' 
                                    : index === (currentSlide - 1 + slides.length) % slides.length
                                    ? '-translate-x-full opacity-0'
                                    : 'translate-x-full opacity-0'
                            }`}
                            style={{
                                backgroundImage: `url(${slide})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-black/30" />
                </div>
                    ))}
            </div>
                
                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-light leading-relaxed mb-8 tracking-wide drop-shadow-lg">
                        大地の恵みと<br className="md:hidden" />フレンチの技が<br />織りなす<br />
                        至福のハーモニー
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.15em] leading-relaxed opacity-90 drop-shadow-lg">
                        有機野菜が主役のフレンチキュイジーヌ<br />
                        身体と心が喜ぶ、本物の美味しさをお届けします
                    </p>
                </div>

                {/* スライドインジケーター */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-white w-8' 
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`スライド ${index + 1}`}
                        />
                    ))}
                </div>
            </section>
    
            {/* Calendar Section */}
            <section className="py-16 lg:py-32 bg-white">
                <div className="container mx-auto px-3 sm:px-6 lg:px-12 max-w-6xl">
                    <div className="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-[#6b8e23] text-white p-4 sm:p-8 lg:p-12">
                            <div className="flex items-baseline gap-2 sm:gap-4">
                                <span className="text-2xl sm:text-4xl lg:text-5xl font-light">2025</span>
                                <span className="text-4xl sm:text-6xl lg:text-7xl font-light">11</span>
                        </div>
                    </div>
                        
                        <div className="p-3 sm:p-6 lg:p-12">
                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4">
                                {['月', '火', '水', '木', '金', '土', '日'].map((day, i) => (
                                    <div key={day} className={`text-center py-2 sm:py-3 text-[10px] sm:text-sm font-medium ${i >= 5 ? 'text-red-500' : 'text-gray-600'}`}>
                                        {day}
                        </div>
                                ))}
                            </div>
                            
                            {/* Calendar Dates */}
                            <div className="grid grid-cols-7 gap-1 sm:gap-2">
                                {Array.from({ length: 35 }, (_, i) => {
                                    const date = i - 3;
                                    const isToday = date === 7;
                                    const isClosed = i % 7 === 2 || i % 7 === 3; // 水曜日・木曜日
                                    const isPast = date < 7;
                                    
                                    return (
                                        <div 
                                            key={i}
                                            className={`p-1.5 sm:p-3 lg:p-4 rounded-md lg:rounded-lg min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] transition-all duration-300 ${
                                                isToday ? 'bg-amber-50 border-2 border-[#6b8e23] shadow-md' :
                                                isPast ? 'bg-gray-50 opacity-40' :
                                                isClosed ? 'bg-gray-100' :
                                                'bg-gray-50 hover:bg-green-50 hover:shadow-md lg:hover:-translate-y-1'
                                            }`}
                                        >
                                            {date > 0 && date <= 30 && (
                                                <>
                                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-0 mb-0.5 sm:mb-1">
                                                        <span className="text-sm sm:text-base lg:text-lg font-semibold">{date}</span>
                                                        <span className="text-[9px] sm:text-xs text-gray-500">
                                                            {['月', '火', '水', '木', '金', '土', '日'][i % 7]}
                                                        </span>
                            </div>
                                                    {isClosed && !isPast && (
                                                        <p className="text-[8px] sm:text-[10px] text-gray-600 leading-tight">定休日</p>
                                                    )}
                                                </>
                                            )}
                            </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Info Box */}
                    <div className="mt-6 sm:mt-8 lg:mt-12 bg-white rounded-xl lg:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-12">
                        <dl className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                            <div>
                                <dt className="text-[#6b8e23] font-semibold text-base sm:text-lg mb-2 sm:mb-3">営業時間</dt>
                                <dd className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    ランチ 11:30～15:00（L.O. 14:00）<br />
                                    ディナー 18:00～22:30（L.O. 21:00）<br />
                                    <span className="text-xs sm:text-sm text-gray-500 mt-2 block">
                                        ※完全予約制
                                    </span>
                                </dd>
                            </div>
                            <div>
                                <dt className="text-[#6b8e23] font-semibold text-base sm:text-lg mb-2 sm:mb-3">定休日</dt>
                                <dd className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    毎週水曜日・木曜日<br />
                                    <span className="text-xs sm:text-sm text-gray-500">
                                        ※季節により変更あり
                                    </span>
                                </dd>
                </div>
                    </dl>
                    </div>
                </div>
            </section>
    
            {/* Concept Section */}
            <section id="concept" className="py-24 lg:py-32 bg-[#f8f9f5]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-16">
                        <span className="text-xl text-[#6b8e23] font-light">01</span>
                        <h2 className="text-5xl lg:text-6xl font-light tracking-[0.2em]">Concept</h2>
                        </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div 
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
                            style={{
                                backgroundImage: 'url(/restaurant/5.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-700" />
                        </div>

                        <div className="space-y-8">
                            <p className="text-3xl lg:text-4xl font-light leading-relaxed text-gray-800">
                                農園直送の有機野菜と<br />
                                フレンチの繊細な技法が紡ぐ<br />
                                唯一無二の味わい
                            </p>
                            
                            <a 
                                href="#concept" 
                                className="inline-block px-12 py-4 border-2 border-[#6b8e23] text-[#6b8e23] tracking-[0.2em] font-medium hover:bg-[#6b8e23] hover:text-white transition-all duration-300"
                            >
                                Read More
                            </a>
                            </div>
                    </div>
                </div>
            </section>
    
            {/* Visual Section */}
            <section id="visual" className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-16">
                        <span className="text-xl text-[#6b8e23] font-light">02</span>
                        <h2 className="text-5xl lg:text-6xl font-light tracking-[0.2em]">Visual</h2>
                    </div>

                    <div className="space-y-6">
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div 
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/4.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                            </div>
                            <div 
                                className="relative aspect-square md:col-span-2 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/8.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div 
                                className="relative aspect-square md:col-span-2 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/10.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                            </div>
                            <div 
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/7.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                            </div>
                        </div>

                        {/* Row 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div 
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/6.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                            </div>
                            <div 
                                className="relative aspect-square md:col-span-2 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
                                style={{
                                    backgroundImage: 'url(/restaurant/11.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
                    </div>
                    </div>
                </div>

                    <div className="mt-12 text-right">
                        <a 
                            href="#visual" 
                            className="inline-block px-12 py-4 border-2 border-[#6b8e23] text-[#6b8e23] tracking-[0.2em] font-medium hover:bg-[#6b8e23] hover:text-white transition-all duration-300"
                        >
                            Read More
                        </a>
                    </div>
                    </div>
            </section>
    
            {/* Menu Section */}
            <section id="menu" className="py-24 lg:py-32 bg-[#f8f9f5]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-16">
                        <span className="text-xl text-[#6b8e23] font-light">03</span>
                        <h2 className="text-5xl lg:text-6xl font-light tracking-[0.2em]">Menu</h2>
                        </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div 
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group"
                            style={{
                                backgroundImage: 'url(/restaurant/12.png)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-700" />
                        </div>

                        <div className="space-y-8">
                            <p className="text-3xl lg:text-4xl font-light leading-relaxed text-gray-800">
                                季節ごとに変わる<br />
                                有機野菜の贅沢コース<br />
                                野菜本来の旨みを最大限に
                            </p>
                            
                            <a 
                                href="#menu" 
                                className="inline-block px-12 py-4 border-2 border-[#6b8e23] text-[#6b8e23] tracking-[0.2em] font-medium hover:bg-[#6b8e23] hover:text-white transition-all duration-300"
                            >
                                Read More
                            </a>
                            </div>
                    </div>
                </div>
            </section>
    
            {/* Access Section */}
            <section id="access" className="py-24 lg:py-32 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-baseline gap-6 mb-16">
                        <span className="text-xl text-[#6b8e23] font-light">04</span>
                        <h2 className="text-5xl lg:text-6xl font-light tracking-[0.2em]">Access</h2>
                        </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0279886661584!2d139.70765931525826!3d35.66417438019896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c820c8c3b3d%3A0x6e8b5c5c5c5c5c5c!2z56We5a6u5YmN77yV5LiB55uu!5e0!3m2!1sja!2sjp!4v1620000000000!5m2!1sja!2sjp"
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>

                        <div className="space-y-8">
                            <p className="text-3xl lg:text-4xl font-light leading-relaxed text-gray-800">
                                都会の喧騒を離れた<br />
                                緑豊かな隠れ家レストラン<br />
                                特別な時間をお約束します
                            </p>
                            
                            <a 
                                href="#access" 
                                className="inline-block px-12 py-4 border-2 border-[#6b8e23] text-[#6b8e23] tracking-[0.2em] font-medium hover:bg-[#6b8e23] hover:text-white transition-all duration-300"
                            >
                                Read More
                            </a>
                            </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#3d5a2e] text-white py-20">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                        <div className="lg:col-span-2">
                            <h3 className="text-2xl font-light tracking-[0.2em] mb-8">BIO HARMONIE</h3>
                            <p className="text-sm opacity-80 mb-8">有機野菜のフレンチレストラン</p>
                            
                            <div className="space-y-6 mb-8">
                                <div>
                                    <p className="mb-3 opacity-90">
                                        〒150-0001 東京都渋谷区神宮前5-12-8<br />
                                        ハーモニービル 2F
                                    </p>
                                    <a 
                                        href="#" 
                                        className="inline-block px-8 py-3 border border-white/50 hover:bg-white/10 transition-all duration-300 text-sm tracking-wider"
                                    >
                                        Google Map
                                    </a>
        </div>
    
                                <div>
                                    <p className="mb-3 opacity-90">03-5678-9012（完全予約制）</p>
                                    <a 
                                        href="tel:03-5678-9012"
                                        className="inline-block px-8 py-3 border border-white/50 hover:bg-white/10 transition-all duration-300 text-sm tracking-wider"
                                    >
                                        Call
                                    </a>
                                </div>
                            </div>

                            <div className="space-y-4 text-sm opacity-90">
                                <div>
                                    <h4 className="font-semibold mb-2">営業時間</h4>
                                    <p>ランチ 11:30～15:00（L.O. 14:00）<br />
                                    ディナー 18:00～22:30（L.O. 21:00）<br />
                                    ※完全予約制</p>
                            </div>
                                <div>
                                    <h4 className="font-semibold mb-2">定休日</h4>
                                    <p>毎週水曜日・木曜日</p>
                            </div>
                        </div>
                    </div>

                        <div>
                            <nav className="space-y-4 mb-8">
                                {['Concept', 'Visual', 'Menu', 'Access'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="block text-lg tracking-[0.15em] hover:opacity-70 transition-opacity"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </nav>

                            <div className="space-y-2 text-sm opacity-70">
                                <a href="#" className="block hover:opacity-100 transition-opacity">プライバシーポリシー</a>
                                <a href="#" className="block hover:opacity-100 transition-opacity">利用規約</a>
                                <a href="#" className="block hover:opacity-100 transition-opacity">お問い合わせ</a>
                        </div>
                    </div>
                </div>

                    <div className="pt-8 border-t border-white/20 text-center text-sm opacity-60 tracking-wider">
                        © 2025 Bio Harmonie. All rights reserved.
                    </div>
            </div>
        </footer>
    
            {/* Mobile Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl z-40">
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <a href="tel:03-5678-9012" className="flex flex-col items-center justify-center py-4 text-[#6b8e23] hover:bg-green-50 transition-colors">
                        <span className="text-2xl mb-1">📞</span>
                        <span className="text-xs">予約</span>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center py-4 text-[#6b8e23] hover:bg-green-50 transition-colors">
                        <span className="text-2xl mb-1">📅</span>
                        <span className="text-xs">営業日</span>
                    </a>
                    <a href="#" className="flex flex-col items-center justify-center py-4 text-[#6b8e23] hover:bg-green-50 transition-colors">
                        <span className="text-2xl mb-1">📍</span>
                        <span className="text-xs">アクセス</span>
                    </a>
                </div>
        </nav>
        </div>
    );
}