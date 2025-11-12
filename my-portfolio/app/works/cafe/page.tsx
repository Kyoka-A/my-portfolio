'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function CafePage() {
  const [selectedLocation, setSelectedLocation] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-pink-100">
        <nav className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Back Button & Logo */}
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="group flex items-center gap-2 px-4 py-2 rounded-full border-2 border-pink-200 hover:border-pink-600 hover:bg-pink-50 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-pink-600 group-hover:translate-x-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-sm font-semibold text-pink-600 hidden md:inline">ホームに戻る</span>
              </Link>

              <div className="flex items-center group cursor-pointer">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                  <div className="relative text-3xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                      Pâtisserie
                    </span>
                    <br />
                    <span className="text-2xl font-light text-rose-500">LULU</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-10 text-sm font-semibold tracking-wide">
              <Link href="#news" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">NEWS</Link>
              <Link href="#menu" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">MENU</Link>
              <Link href="#about" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">ABOUT</Link>
              <Link href="#access" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">ACCESS</Link>
              <Link href="#store" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">STORE</Link>
              <Link href="#contact" className="text-stone-700 hover:text-pink-600 transition-all duration-300 hover:scale-105">CONTACT</Link>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-3">
              <button className="p-3 hover:bg-pink-50 rounded-full transition-all duration-300 group">
                <svg className="w-5 h-5 text-stone-600 group-hover:text-pink-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-3 hover:bg-pink-50 rounded-full transition-all duration-300 group">
                <svg className="w-5 h-5 text-stone-600 group-hover:text-pink-600 transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <circle cx="12" cy="12" r="3.2"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen mt-20 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        
        {/* PC版：背景画像（右側に配置） */}
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="relative h-full w-3/5">
              <div className="relative h-full w-full">
                <Image
                  src="/cafe/1.png"
                  alt="季節のケーキ"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* 左側をグラデーションでフェードアウト */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* スマホ版：上部に画像 */}
        <div className="lg:hidden relative w-full h-[50vh]">
          <Image
            src="/cafe/1.png"
            alt="季節のケーキ"
            fill
            className="object-cover object-center"
            priority
          />
          {/* 下部をグラデーションでフェードアウト */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-rose-50"></div>
        </div>

        {/* コンテンツ */}
        <div className="relative lg:h-screen flex items-center py-12 lg:py-0">
          <div className="container mx-auto px-6 lg:px-16">
            <div className="max-w-2xl">
              {/* 日付バッジ */}
              <div className="inline-flex items-center gap-3 mb-6 bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-2xl px-5 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-rose-600">
                    11
                  </div>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-medium text-amber-700 tracking-widest">NOVEMBER</span>
                    <span className="text-xs font-bold text-pink-600">2025</span>
                  </div>
                </div>
                <div className="h-6 w-px bg-pink-200"></div>
                <span className="text-xs font-bold text-pink-600 tracking-wide">NEW ARRIVAL</span>
              </div>
              
              {/* メインタイトル */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] mb-6">
                <span className="block text-amber-900">
                  SEASONAL
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600">
                  CAKE
                </span>
              </h1>
              
              {/* 説明文 */}
              <p className="text-base md:text-lg lg:text-xl text-amber-800 leading-relaxed mb-10 font-medium">
                旬のフルーツをたっぷり使った、<br />
                今月だけの限定ケーキをお楽しみください
              </p>

              {/* CTAボタン */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-rose-600 text-white rounded-2xl font-bold text-base overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    オンライン予約
                  </span>
                </button>
                
                <button className="group px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-pink-200 text-pink-600 rounded-2xl font-bold text-base hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                  メニューを見る
                </button>
              </div>

              {/* 特徴タグ */}
              <div className="flex flex-wrap gap-2 mt-8">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-xl text-pink-600 text-xs font-bold shadow-sm">
                  🍓 季節のフルーツ
                </span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-xl text-pink-600 text-xs font-bold shadow-sm">
                  ✨ 数量限定
                </span>
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-pink-200/50 rounded-xl text-pink-600 text-xs font-bold shadow-sm">
                  🎂 当日予約可能
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター（PC版のみ表示） */}
        <div className="hidden lg:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-1 animate-bounce">
          <span className="text-amber-700 text-xs font-semibold tracking-wider">SCROLL</span>
          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* CTA Buttons */}
      <section className="py-16 relative">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <button className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-400 hover:bg-pink-600">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">🎂</div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:!text-white mb-2 transition">ケーキ予約</h3>
              <p className="text-sm text-stone-600 group-hover:!text-white transition">オンラインで簡単予約</p>
            </button>

            <button className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-400 hover:bg-pink-600">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">🥧</div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:!text-white mb-2 transition">タルト予約</h3>
              <p className="text-sm text-stone-600 group-hover:!text-white transition">季節のタルトが人気</p>
            </button>

            <button className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-400 hover:bg-pink-600">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">🎁</div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:!text-white mb-2 transition">ギフト</h3>
              <p className="text-sm text-stone-600 group-hover:!text-white transition">特別な贈り物に</p>
            </button>

            <button className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-pink-400 hover:bg-pink-600">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">🛒</div>
              <h3 className="text-lg font-bold text-stone-800 group-hover:!text-white mb-2 transition">オンラインストア</h3>
              <p className="text-sm text-stone-600 group-hover:!text-white transition">全国配送可能</p>
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                NEWS
              </span>
            </h2>
            <p className="text-stone-600 text-lg">最新情報とおすすめスイーツ</p>
          </div>

          {/* ロケーションフィルター */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', '表参道', '代官山', '銀座', '渋谷', '新宿'].map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedLocation === location
                    ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg scale-105'
                    : 'bg-white text-stone-700 border-2 border-stone-200 hover:border-pink-400 hover:scale-105'
                }`}
              >
                {location === 'all' ? 'すべて' : location}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* News Item 1 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/cafe/2.png"
                  alt="プレミアムストロベリータルト"
                  fill
                  className="object-cover transform group-hover:scale-125 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-600">
                  NEW
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['表参道', '代官山', '銀座'].map((tag) => (
                    <span key={tag} className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-pink-600 font-bold tracking-wider">PÂTISSERIE LULU</span>
                <h3 className="text-lg font-bold mt-3 mb-4 text-stone-800 leading-snug group-hover:text-pink-600 transition">
                  【11/6スタート】宝石のようなフレッシュいちごをたっぷり使った「プレミアムストロベリータルト」が登場！数量限定でお届け
                </h3>
                <div className="flex items-center justify-between">
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transition flex items-center gap-2">
                    続きを読む
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-sm text-stone-400">2025.11.06</span>
                </div>
              </div>
            </article>

            {/* News Item 2 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/cafe/3.png"
                  alt="ベリーベリーチーズケーキ"
                  fill
                  className="object-cover transform group-hover:scale-125 transition duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-pink-600">
                  期間限定
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['全店舗'].map((tag) => (
                    <span key={tag} className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-pink-600 font-bold tracking-wider">PÂTISSERIE LULU</span>
                <h3 className="text-lg font-bold mt-3 mb-4 text-stone-800 leading-snug group-hover:text-pink-600 transition">
                  【11月限定】秋冬の人気No.1「ベリーベリーチーズケーキ」濃厚なクリームチーズとベリーの酸味が絶妙なハーモニー
                </h3>
                <div className="flex items-center justify-between">
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transition flex items-center gap-2">
                    続きを読む
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-sm text-stone-400">2025.11.01</span>
                </div>
              </div>
            </article>

            {/* News Item 3 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/cafe/4.png"
                  alt="贅沢モンブランタルト"
                  fill
                  className="object-cover transform group-hover:scale-125 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {['渋谷', '新宿', '銀座'].map((tag) => (
                    <span key={tag} className="text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-pink-600 font-bold tracking-wider">PÂTISSERIE LULU</span>
                <h3 className="text-lg font-bold mt-3 mb-4 text-stone-800 leading-snug group-hover:text-pink-600 transition">
                  【大人気】和栗をふんだんに使った「贅沢モンブランタルト」。サクサクのタルト生地とマロンクリームが相性抜群
                </h3>
                <div className="flex items-center justify-between">
                  <button className="text-pink-600 font-semibold hover:text-pink-700 transition flex items-center gap-2">
                    続きを読む
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <span className="text-sm text-stone-400">2025.10.24</span>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-16">
            <button className="group relative px-12 py-4 bg-white border-2 border-pink-600 text-pink-600 rounded-full font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <span className="relative z-10 flex items-center gap-2 group-hover:!text-white transition-colors">
                もっと見る
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Online Store Section */}
      <section id="store" className="py-24 bg-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
                ONLINE STORE
              </span>
            </h2>
            <p className="text-stone-600 text-lg">全国配送可能な人気スイーツ</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square rounded-3xl mb-6 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cafe/5.png"
                  alt="プレミアムストロベリーショートケーキ"
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  VIEW DETAILS
                </div>
              </div>
              <h3 className="text-base font-semibold mb-3 text-stone-800 group-hover:text-pink-600 transition">
                【オンライン限定】<br />プレミアムストロベリーショートケーキ（ホール）
              </h3>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">¥4,800</p>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square rounded-3xl mb-6 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cafe/6.png"
                  alt="ミックスベリーチーズタルト"
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  VIEW DETAILS
                </div>
              </div>
              <h3 className="text-base font-semibold mb-3 text-stone-800 group-hover:text-pink-600 transition">
                【人気No.1】<br />ミックスベリーチーズタルト（6個入り）
              </h3>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">¥3,200</p>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-square rounded-3xl mb-6 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/cafe/7.png"
                  alt="贅沢モンブランケーキ"
                  fill
                  className="object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  VIEW DETAILS
                </div>
              </div>
              <h3 className="text-base font-semibold mb-3 text-stone-800 group-hover:text-pink-600 transition">
                【季節限定】<br />贅沢モンブランケーキ（ホール）
              </h3>
              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">¥5,400</p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-24 bg-gradient-to-b from-pink-50 to-rose-50">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-5xl font-black mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              FOLLOW US
            </span>
          </h2>
          <p className="text-stone-600 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Pâtisserie LULUの最新情報、<br />
            新作スイーツやお得なクーポンをいち早くお届けします
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <button className="group relative flex flex-col items-center justify-center w-64 h-64 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-500">💬</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-2">LINE</div>
                <div className="text-sm text-stone-600 font-medium">公式アカウント<br />友だち追加</div>
              </div>
            </button>
            
            <button className="group relative flex flex-col items-center justify-center w-64 h-64 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-500">📸</div>
                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-2">Instagram</div>
                <div className="text-sm text-stone-600 font-medium">インスタグラムを<br />フォローする</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-stone-800 to-stone-900 text-white py-16">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-black mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400">
                  Pâtisserie
                </span>
                <br />
                <span className="text-2xl font-light">LULU</span>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed">
                かわいいトレンド感あふれる<br />
                ケーキとタルトをお届けします
              </p>
            </div>
            
            <div>
              <h3 className="font-black text-lg mb-6 text-pink-400">MENU</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> TOP
                </Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> ABOUT
                </Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> SHOP ACCESS
                </Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-black text-lg mb-6 text-pink-400">STORE</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> 表参道店
                </Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> 代官山店
                </Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> 銀座店
                </Link></li>
                <li><Link href="#" className="text-stone-400 hover:text-pink-400 transition-colors duration-300 flex items-center gap-2">
                  <span className="text-pink-400">›</span> 渋谷店
                </Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-black text-lg mb-6 text-pink-400">RECRUIT</h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                可愛いケーキとタルトに囲まれて、<br />
                トレンド感あふれる空間で<br />
                一緒に働きませんか？
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-semibold text-sm">
                ご応募はこちら
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-sm">
                © 2025 Pâtisserie LULU. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm text-stone-500">
                <Link href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-pink-400 transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}