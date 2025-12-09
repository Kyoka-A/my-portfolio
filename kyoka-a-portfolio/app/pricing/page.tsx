'use client';

import Header from '../../components/header';
import Footer from '../../components/footer';

export default function Pricing() {
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
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-full text-sm font-bold text-[#8B5E3C] mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-[#4A3F35] mb-6">
              料金表
            </h1>
            <p className="text-lg md:text-xl text-[#6B5D52] max-w-2xl mx-auto">
              わかりやすい料金設定でご提供します<br />
              お客様のご要望に合わせて柔軟に対応いたします
            </p>
          </div>

          {/* 料金プラン */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* ベーシックプラン */}
            <div className="group">
              <div className="h-full p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-4 border-[#FFE8D6]">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    ベーシック
                  </h3>
                  <div className="text-4xl font-bold text-[#FF8C5A] mb-2">
                    3万円<span className="text-lg">〜</span>
                  </div>
                  <p className="text-sm text-[#6B5D52]">シンプルなサイト</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>1〜5ページ</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>レスポンシブ対応</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>納期：3〜4週間</span>
                  </div>
                </div>
                <p className="text-xs text-[#6B5D52] pt-4 border-t border-[#FFE8D6]">
                  個人事業主・小規模店舗向け
                </p>
              </div>
            </div>

            {/* スタンダードプラン */}
            <div className="group relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-full text-xs font-bold shadow-lg">
                  おすすめ
                </span>
              </div>
              <div className="h-full p-8 bg-gradient-to-br from-white to-[#FFF9F0] rounded-3xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all border-4 border-[#FF9A76]">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🚀</div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    スタンダード
                  </h3>
                  <div className="text-4xl font-bold text-[#FF8C5A] mb-2">
                    4万円<span className="text-lg">〜</span>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>6〜10ページ</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>SNS連携</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>納期：4〜6週間</span>
                  </div>
                </div>
                <p className="text-xs text-[#6B5D52] pt-4 border-t border-[#FFD4A3]">
                  一番おすすめです！！
                </p>
              </div>
            </div>

            {/* プレミアムプラン */}
            <div className="group">
              <div className="h-full p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-4 border-[#FFE8D6]">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                  <h3 className="text-2xl font-bold text-[#4A3F35] mb-3">
                    プレミアム
                  </h3>
                  <div className="text-4xl font-bold text-[#FF8C5A] mb-2">
                    要相談
                  </div>
                  <p className="text-sm text-[#6B5D52]">フルカスタマイズ</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>ページ数無制限</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>完全カスタマイズ</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>高度な機能実装</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>保守サポート付き</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>優先対応</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-[#FF8C5A] mt-1">✓</span>
                    <span>納期：要相談</span>
                  </div>
                </div>
                <p className="text-xs text-[#6B5D52] pt-4 border-t border-[#FFE8D6]">
                  企業サイト向け
                </p>
              </div>
            </div>
          </div>

          {/* 追加オプション */}
          <div className="p-8 md:p-12 bg-gradient-to-r from-[#FFE8D6] to-[#FFD4A3] rounded-3xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#4A3F35] mb-2">
                💡 追加オプション
              </h2>
              <p className="text-[#6B5D52]">
                基本プランに追加できるオプションサービス
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">📄</div>
                <p className="font-bold text-[#4A3F35] mb-2 text-lg">ページ追加</p>
                <p className="text-2xl font-bold text-[#FF8C5A] mb-2">+5,000円</p>
                <p className="text-sm text-[#6B5D52]">1ページあたりの追加料金</p>
              </div>
              <div className="p-6 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">🎨</div>
                <p className="font-bold text-[#4A3F35] mb-2 text-lg">バナー制作</p>
                <p className="text-2xl font-bold text-[#FF8C5A] mb-2">3,000円〜</p>
                <p className="text-sm text-[#6B5D52]">広告用バナーの作成</p>
              </div>
              <div className="p-6 bg-white/90 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-3">🔧</div>
                <p className="font-bold text-[#4A3F35] mb-2 text-lg">保守管理</p>
                <p className="text-2xl font-bold text-[#FF8C5A] mb-2">月額5,000円〜</p>
                <p className="text-sm text-[#6B5D52]">更新・メンテナンス対応</p>
              </div>
            </div>
          </div>

          {/* 制作の流れ */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
                制作の流れ
              </h2>
              <p className="text-[#6B5D52]">
                お問い合わせから納品までのステップをご紹介します
              </p>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '01', icon: '📧', title: 'お問い合わせ', desc: 'まずはお気軽にご相談ください' },
                { step: '02', icon: '💬', title: 'ヒアリング', desc: 'ご要望を詳しくお伺いします' },
                { step: '03', icon: '📝', title: 'お見積もり', desc: '無料でお見積もり作成' },
                { step: '04', icon: '🎨', title: '制作開始', desc: 'デザイン・コーディング' },
                { step: '05', icon: '🚀', title: '納品', desc: '公開・アフターフォロー' }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all border-4 border-[#FFE8D6] text-center">
                    <div className="text-sm font-bold text-[#FF8C5A] mb-2">STEP {item.step}</div>
                    <div className="text-5xl mb-3">{item.icon}</div>
                    <h3 className="text-lg font-bold text-[#4A3F35] mb-2">{item.title}</h3>
                    <p className="text-sm text-[#6B5D52]">{item.desc}</p>
                  </div>
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2">
                      <span className="text-2xl text-[#FFD4A3]">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* よくある質問 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#4A3F35] mb-4">
                よくある質問
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  q: '支払い方法はどうなりますか？',
                  a: '銀行振込をお願いしております。ご契約時に50%、納品時に残り50%のお支払いとなります。'
                },
                {
                  q: '修正は何回まで可能ですか？',
                  a: 'デザイン確定後、3回まで無料で修正対応いたします。それ以降は別途お見積もりとなります。'
                },
                {
                  q: '公開後のサポートはありますか？',
                  a: '納品後1ヶ月間は無料でサポートいたします。その後は保守管理プランをご利用いただけます。'
                },
                {
                  q: 'ドメインやサーバーは自分で用意する必要がありますか？',
                  a: 'ご希望に応じてサポートいたします。取得代行も可能ですので、お気軽にご相談ください。'
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 border-[#FFE8D6]">
                  <div className="flex gap-3 items-start">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#FF9A76] to-[#FF8C5A] text-white rounded-full text-sm font-bold flex-shrink-0">Q</span>
                    <div>
                      <h3 className="font-bold text-[#4A3F35] mb-2">{item.q}</h3>
                      <p className="text-[#6B5D52] text-sm">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTAセクション */}
          <div className="bg-gradient-to-br from-[#FF9A76] to-[#FF8C5A] rounded-[3rem] p-10 md:p-16 text-white text-center shadow-2xl">
            <div className="text-6xl mb-6">💬</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              まずはお気軽にご相談ください！
            </h2>
            <p className="text-lg mb-8 text-white/90">
              ご予算やご要望に応じて柔軟に対応いたします<br />
              無料でお見積もり・ご相談を承っています
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:myname.is.akita@gmail.com" className="px-10 py-5 bg-white text-[#FF8C5A] rounded-2xl hover:shadow-2xl hover:scale-105 transition-all font-bold text-lg">
                📧 メールで相談
              </a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSckLbTMUy2i9x3zTebxTWQHGi9xjEmOzm38_Kqb97XLs2KKCg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl hover:bg-white/30 transition-all font-bold text-lg border-2 border-white/50">
                📝 フォームから相談
              </a>
            </div>
            <p className="text-sm text-white/80 mt-6">
              ※料金は目安です。お客様のご要望に応じてお見積もりいたします
            </p>
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

