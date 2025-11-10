'use client';

import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
        return (
          <div className="min-h-screen bg-gradient-to-br from-[#FFF9F0] via-[#FFF5E8] to-[#FFE8D6] text-[#4A3F35]">
            {/* 明るい装飾 */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-gradient-radial from-[#FFB88C]/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-gradient-radial from-[#FFA07A]/15 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-[#FFCC99]/10 to-transparent rounded-full blur-3xl"></div>
            </div>
      
            <div className="relative z-10">
              <Header />
      
              {/* ヒーローセクション */}
              <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      <span className="block text-[#4A3F35]">HP制作で</span>
                      <span className="block bg-gradient-to-r from-[#FF9A76] to-[#FF6B47] bg-clip-text text-transparent">
                        あなたのビジネスを
                      </span>
                      <span className="block text-[#4A3F35]">サポートします</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-[#6B5D52] leading-relaxed">
                      初心者でも安心！丁寧なヒアリングで<br />
                      あなたの想いを形にするホームページを<br />
                      <span className="font-bold text-[#FF8C5A]">低価格</span>で制作します 💪
                    </p>
      
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg shadow-lg">
                        無料相談する
                      </a>
                      <a href="#works" className="px-8 py-4 bg-white text-[#4A3F35] rounded-2xl hover:shadow-xl transition-all font-bold text-lg border-2 border-[#FFD4A3]">
                        制作例を見る
                      </a>
                    </div>
      
                    <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-6">
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FFE8D6] to-[#FFD4A3] rounded-full flex items-center justify-center">
                          <span className="text-xl">⚡</span>
                        </div>
                        <span>最短３週間で納品</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FFE8D6] to-[#FFD4A3] rounded-full flex items-center justify-center">
                          <span className="text-xl">💰</span>
                        </div>
                        <span>3万円〜対応可</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-semibold">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#FFE8D6] to-[#FFD4A3] rounded-full flex items-center justify-center">
                          <span className="text-xl">📱</span>
                        </div>
                        <span>スマホ対応</span>
                      </div>
                    </div>
                  </div>
      
                  <div className="relative">
                    <div className="relative aspect-square max-w-md mx-auto">
                      {/* メインカード */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF9F0] to-[#FFE8D6] rounded-[3rem] shadow-2xl p-8 border-4 border-white flex flex-col items-center justify-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] rounded-full flex items-center justify-center shadow-xl mb-6">
                          <span className="text-5xl">💻</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#4A3F35] mb-2">Web制作</h3>
                        <p className="text-center text-[#6B5D52] mb-4">
                          あなたの想いを<br />デザインに
                        </p>
                        <div className="flex gap-2">
                          <span className="px-3 py-1 bg-[#FFE8D6] rounded-full text-xs font-bold">WordPress</span>
                          <span className="px-3 py-1 bg-[#FFE8D6] rounded-full text-xs font-bold">レスポンシブ</span>
                        </div>
                      </div>
                      
                      {/* 浮遊カード1 */}
                      <div className="absolute -top-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#FFD4A3] to-[#FFB88C] rounded-3xl shadow-xl flex items-center justify-center transform rotate-12 animate-bounce">
                        <span className="text-4xl">🎨</span>
                      </div>
                      
                      {/* 浮遊カード2 */}
                      <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#FFA07A] to-[#FF8C5A] rounded-3xl shadow-xl flex items-center justify-center transform -rotate-12">
                        <span className="text-3xl">✨</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      
              {/* 強みセクション */}
              <section className="max-w-7xl mx-auto px-6 md:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { emoji: '🎯', title: '初心者に優しい', desc: '専門用語なしでわかりやすく説明' },
                    { emoji: '💰', title: 'お手頃価格', desc: '個人・小規模事業者向けの価格設定' },
                    { emoji: '🚀', title: 'スピーディ', desc: '最短3週間で納品可能' },
                    { emoji: '🤝', title: '丁寧なサポート', desc: '公開後もしっかりフォロー' }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all border-2 border-[#FFE8D6]/50 h-full text-center">
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                        <h3 className="text-lg font-bold text-[#4A3F35] mb-2">{item.title}</h3>
                        <p className="text-sm text-[#6B5D52]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
      
              {/* 自己紹介セクション */}
              <section id="about" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
                <div className="bg-gradient-to-br from-white to-[#FFF9F0] rounded-[3rem] p-10 md:p-16 shadow-2xl border-4 border-[#FFE8D6]">
                  <div className="text-center mb-12">
                    <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-full text-sm font-bold text-[#8B5E3C] mb-4">
                      About Me
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4A3F35]">
                      はじめまして！
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-[#6B5D52] leading-relaxed">
                      <p>
                        <span className="font-bold text-[#FF8C5A] text-2xl">秋田きょうか</span>と申します！
                      </p>
                      <p>
                        Web制作を勉強し始めて6ヶ月の新米フリーランスです。まだまだ駆け出しですが、<span className="font-bold text-[#FF8C5A]">丁寧なヒアリングと真摯な対応</span>で、お客様の想いを形にするお手伝いをさせていただきます！
                      </p>
                      <p>
                        大手制作会社と違い、<span className="font-bold text-[#FF8C5A]">低価格で柔軟に対応</span>できることが強みです。まずはお気軽にご相談ください 😊
                      </p>
                      
                      <div className="pt-6 space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">💻</span>
                          <span className="font-semibold">リモート対応可能</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">⏰</span>
                          <span className="font-semibold">平日夜・土日も対応</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                    </div>
                  </div>
                </div>
              </section>
      
              {/* できることセクション */}
              <section id="skill" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
                <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-full text-sm font-bold text-[#8B5E3C] mb-4">
                    Service
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#4A3F35] mb-6">
                    こんなことができます！
                  </h2>
                  <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
                    お客様のご要望に合わせて柔軟に対応いたします
                  </p>
                </div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      emoji: '🌐',
                      title: 'ホームページ制作',
                      price: '3万円〜',
                      desc: 'シンプルな企業サイトや個人のポートフォリオサイトなど、ご要望に応じた制作を行います。',
                      features: ['レスポンシブ対応', 'お問い合わせフォーム', '5ページまで']
                    },
                    {
                      emoji: '✏️',
                      title: 'WordPress構築',
                      price: '4万円〜',
                      desc: '自分で更新できるWordPressサイトを構築。ブログやお知らせの更新が簡単にできます。',
                      features: ['テーマカスタマイズ', '更新方法レクチャー', 'プラグイン設定']
                    }
                  ].map((service, i) => (
                    <div key={i} className="group">
                      <div className="h-full p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-4 border-[#FFE8D6]">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{service.emoji}</div>
                        <h3 className="text-2xl font-bold text-[#4A3F35] mb-2">
                          {service.title}
                        </h3>
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-full font-bold mb-4">
                          {service.price}
                        </div>
                        <p className="text-[#6B5D52] mb-6 leading-relaxed">
                          {service.desc}
                        </p>
                        <div className="space-y-2">
                          {service.features.map((feature, j) => (
                            <div key={j} className="flex items-center gap-2 text-sm">
                              <span className="text-[#FF8C5A]">✓</span>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
      
                <div className="mt-12 p-8 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-3xl text-center">
                  <p className="text-lg font-bold text-[#4A3F35] mb-2">
                    💡 ご予算やご要望に応じて柔軟に対応します！
                  </p>
                  <p className="text-[#6B5D52]">
                    まずはお気軽にご相談ください。無料でお見積もりいたします。
                  </p>
                </div>
              </section>
      
              {/* 制作例セクション */}
              <section id="works" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
                <div className="text-center mb-16">
                  <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-full text-sm font-bold text-[#8B5E3C] mb-4">
                    Works
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#4A3F35] mb-6">
                    制作例
                  </h2>
                  <p className="text-lg text-[#6B5D52] max-w-2xl mx-auto">
                    実際に作成した模擬サイトをご覧いただけます
                  </p>
                </div>
      
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Restaurant模擬サイト */}
                  <a href="/works/restaurant" className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#8B4513]/20 via-[#D2691E]/20 to-[#CD853F]/20 p-8 flex items-center justify-center border-4 border-white">
                        <div className="text-center">
                          <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">🍴</div>
                          <div className="inline-block px-4 py-2 bg-white/95 rounded-full font-bold text-sm text-[#4A3F35] shadow-lg">
                            Restaurant
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/95 via-[#4A3F35]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-2">レストランサイト</h3>
                          <p className="text-sm text-white/90 mb-2">おしゃれなレストランのイメージサイト</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-white/20 rounded text-xs">HTML/CSS</span>
                            <span className="px-2 py-1 bg-white/20 rounded text-xs">レスポンシブ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
      
                  {/* Cafe模擬サイト */}
                  <a href="/works/cafe" className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                      <div className="aspect-[4/3] bg-gradient-to-br from-[#D4A574]/20 via-[#C4956A]/20 to-[#B8885C]/20 p-8 flex items-center justify-center border-4 border-white">
                        <div className="text-center">
                          <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">☕</div>
                          <div className="inline-block px-4 py-2 bg-white/95 rounded-full font-bold text-sm text-[#4A3F35] shadow-lg">
                            Cafe
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/95 via-[#4A3F35]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-2">カフェサイト</h3>
                          <p className="text-sm text-white/90 mb-2">温かみのあるカフェのイメージサイト</p>
                          <div className="flex gap-2 flex-wrap">
                            <span className="px-2 py-1 bg-white/20 rounded text-xs">HTML/CSS</span>
                            <span className="px-2 py-1 bg-white/20 rounded text-xs">レスポンシブ</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
      
                  {/* その他の制作例 */}
                  {[
                    { title: '美容室のサイト', tag: 'Coming Soon', emoji: '💇', color: 'from-[#FFB88C]/20 to-[#FFA07A]/20' },

                  ].map((work, i) => (
                    <div key={i} className="group cursor-pointer opacity-60">
                      <div className="relative overflow-hidden rounded-3xl shadow-xl">
                        <div className={`aspect-[4/3] bg-gradient-to-br ${work.color} p-8 flex items-center justify-center border-4 border-white`}>
                          <div className="text-center">
                            <div className="text-7xl mb-4">{work.emoji}</div>
                            <div className="inline-block px-4 py-2 bg-white/95 rounded-full font-bold text-sm text-[#4A3F35] shadow-lg">
                              {work.tag}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-center mt-3 font-semibold text-[#6B5D52]">{work.title}</p>
                    </div>
                  ))}
                </div>
      
                <div className="text-center mt-12">
                  <div className="inline-block p-6 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-3xl">
                    <p className="text-[#4A3F35] font-semibold mb-2">
                      ✨ 実際のクライアント案件も募集中です！
                    </p>
                    <p className="text-sm text-[#6B5D52]">
                      上記は学習用に作成した模擬サイトです。実案件を通じてさらにスキルアップしていきます。
                    </p>
                  </div>
                </div>
              </section>
      
              {/* お問い合わせセクション */}
              <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 py-24">
                <div className="bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] rounded-[3rem] p-10 md:p-20 text-white shadow-2xl">
                  <div className="max-w-3xl mx-auto text-center">
                    <div className="text-6xl mb-6">📮</div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                      まずはお気軽にご相談ください！
                    </h2>
                    <p className="text-xl mb-8 text-white/90 leading-relaxed">
                      ご予算やご要望に応じて柔軟に対応いたします。<br />
                      無料でお見積もり・ご相談を承っています 😊
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                      <a href="mailto:hello@example.com" className="px-10 py-5 bg-white text-[#FF8C5A] rounded-2xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg">
                        📧 メールで相談
                      </a>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSckLbTMUy2i9x3zTebxTWQHGi9xjEmOzm38_Kqb97XLs2KKCg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all font-bold text-lg border-2 border-white/50">
                        📝 フォームから相談
                      </a>
                    </div>
      
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="font-bold text-lg mb-2">返信スピード</h3>
                        <p className="text-sm text-white/90">24時間以内に返信します</p>
                      </div>
                      
                      <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <div className="text-3xl mb-3">💰</div>
                        <h3 className="font-bold text-lg mb-2">見積もり無料</h3>
                        <p className="text-sm text-white/90">お見積もりは無料です</p>
                      </div>
                      
                      <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <div className="text-3xl mb-3">🤝</div>
                        <h3 className="font-bold text-lg mb-2">丁寧な対応</h3>
                        <p className="text-sm text-white/90">わかりやすく説明します</p>
                      </div>
                    </div>
      
                    <div className="mt-12 pt-8 border-t border-white/30">
                      <p className="text-sm text-white/80 mb-4">お問い合わせ方法</p>
                      <div className="flex flex-wrap justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">📧</span>
                          <span>myname.is.akita@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      
              <Footer />
      
              {/* ページトップへ戻るボタン */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center z-50"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 19V5M12 5l-7 7M12 5l7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        );
      }