'use client';

import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    console.log('Button clicked! Current state:', isMenuOpen);
    setIsMenuOpen((prev) => {
      const newState = !prev;
      console.log('New state will be:', newState);
      return newState;
    });
  };

  useEffect(() => {
    console.log('Menu state changed to:', isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] backdrop-blur-xl bg-white/70 border-b border-[#FFD4A3]/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 py-4 relative z-[100]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">あ</span>
            </div>
            <span className="text-xl font-bold tracking-wide">秋田きょうか</span>
          </div>
          
          {/* デスクトップメニュー */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <li><a href="#about" className="hover:text-[#FF8C5A] transition-colors px-3 py-2">自己紹介</a></li>
            <li><a href="#skill" className="hover:text-[#FF8C5A] transition-colors px-3 py-2">できること</a></li>
            <li><a href="#works" className="hover:text-[#FF8C5A] transition-colors px-3 py-2">制作例</a></li>
            <li><a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-full hover:shadow-xl hover:scale-105 transition-all font-bold">お問い合わせ</a></li>
          </ul>

          {/* ハンバーガーボタン */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleToggleMenu();
            }}
            className="md:hidden p-3 focus:outline-none focus:ring-2 focus:ring-[#FF8C5A] rounded-lg cursor-pointer relative z-[101] touch-manipulation active:scale-95 hover:bg-[#FFD4A3]/20 transition-colors"
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isMenuOpen}
            type="button"
            style={{ 
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none'
            }}
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform">
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-[#FFD4A3]/30 mt-2 pt-4 pb-2 bg-white/95 backdrop-blur-sm">
            <ul className="flex flex-col gap-4">
              <li>
                <a 
                  href="#about" 
                  onClick={closeMenu}
                  className="block hover:text-[#FF8C5A] transition-colors px-3 py-2 font-semibold text-[#4A3F35]"
                >
                  自己紹介
                </a>
              </li>
              <li>
                <a 
                  href="#skill" 
                  onClick={closeMenu}
                  className="block hover:text-[#FF8C5A] transition-colors px-3 py-2 font-semibold text-[#4A3F35]"
                >
                  できること
                </a>
              </li>
              <li>
                <a 
                  href="#works" 
                  onClick={closeMenu}
                  className="block hover:text-[#FF8C5A] transition-colors px-3 py-2 font-semibold text-[#4A3F35]"
                >
                  制作例
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="block px-6 py-3 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-full hover:shadow-xl transition-all font-bold text-center"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

