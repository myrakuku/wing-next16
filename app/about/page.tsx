import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* ========== ABOUT US 頂部Banner（黑底白字 + 背景圖80%黑filter） ========== */}
      <div className="relative h-[60vh] flex items-center justify-center">
        

        {/* 兩行標題文字，白色 + 3D升降動畫 */}
        <div className="relative z-10 text-center animate-3d-lift">
          <h1 className="text-[8vw] font-black text-white tracking-tight leading-none">
            WING CREATIVE MEDIA
          </h1>
          <h1 className="text-[8vw] font-black text-white tracking-tight leading-none mt-[-0.5vw]">
            GIVE YOUR IDEAS WINGS
          </h1>
        </div>
      </div>


      {/* ========== ABOUT US ========== */}
      <div
        className="relative overflow-hidden py-28 flex items-center justify-center"
        style={{
          backgroundImage: `url(/image/about/about_bg.jpeg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 80%黑色遮罩 */}
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 text-center px-20">
          <h2 className="text-6xl font-sans font-extrabold text-white mb-10">ABOUT US</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-white space-y-4">
              <p>
                一易媒體創意有限公司是一家充滿活力與創意的錄像製作公司，匯聚了一群對影像創作充滿熱忱與專業實力的優秀人才，團隊成員包括錄像導演、攝影師、剪接師、撰稿員、平面攝影師及多媒體設計師。
              </p>
              <p>
                公司總監早於2016年創立個人製作公司「LO+VELY CREATIVE PRODUCTION」，隨著業務拓展，製作出越來越多高質素的旅遊及資訊娛樂電視節目、企業宣傳短片等作品，最終於2023年正式成立一易媒體創意有限公司。
              </p>
              <p>
                我們將繼續秉持「人生如旅程，積極活下去（Life is a Tour, Live On Positively）」的信念，用心服務每一位客戶，攜手締造互利共贏的合作關係。
              </p>
              <p>
                一易媒體創意有限公司致力於為您的品牌注入視覺生命力。我們不僅擅長捕捉真實質感的商業影像，更專精於運用 AI 生成技術，協助您突破預算限制，開創前所未有的視覺敘事可能。
              </p>
              <p>現在預約諮詢，即可獲得年度品牌視覺趨勢洞察報告。</p>
              
            </div>
            <div className="text-white space-y-4 text-sm">
              <p>
                Wing Creative Media is a young and energetic video production company. We have gathered a team of passionate and creative professionals dedicated to visual storytelling, including Video Directors, Cameramen, Editors, Scriptwriters, Photographers, and Multimedia Designers.The Company Director first established the personal production house "LO+VELY CREATIVE PRODUCTION" in 2016. As the business expanded and we produced an increasing number of high-quality travel and infotainment TV programs as well as corporate promotional videos, "Yat Yick Creative Media Ltd" was officially founded in 2023.We will continue to uphold our belief that "Life is a Tour, Live On Positively" in serving every client with dedication, striving to build a mutually beneficial partnership together.
              </p>
              <p>
                Wing Creative Media is dedicated to infusing your brand with visual vitality. We not only excel at capturing commercial images with a realistic texture but also specialize in using AI generation technology to help you break through budget constraints and explore unprecedented possibilities in visual storytelling. Schedule a consultation now and receive the annual Brand Visual Trends Insight Report.
              </p>
              <Link
                  href="/contact"
                  className="inline-block mt-6 px-6 py-3 rounded-full border border-white hover:bg-gray-800 hover:text-white transition"
                >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========== 主內容區Vincent（白底，正常黑字） ========== */}
        <div className="container mx-auto px-6 py-16 relative z-0">
          {/* ========== Vincent Tong 創辦人區塊，圖片底部陰影 ========== */}
          <div className="mt-24 grid md:grid-cols-2 gap-10 items-start">
            {/* 左邊：創辦人相片 VincentTong.png */}
            <div>
              <img
                src="/image/about/VincentTong.png"
                alt="Vincent Tong"
                className="w-full h-auto object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.15)]"
              />
            </div>
            {/* 右邊：創辦人中文介紹 */}
            <div>
              <h3 className="text-5xl font-black font-mono mb-6">Vincent Tong</h3>
              <p className="text-gray-800 space-y-3">
                是 WING Creative Media 的創始人，同時也是一位從事影視與視頻製作的導演。
                <br /><br />
                他長期專注於影像創作與內容製作，致力於通過視覺敘事呈現具有感染力與傳播力的作品。
                <br /><br />
                作為 WING Creative Media 的核心負責人，Vincent Tong 帶領團隊深耕影視與多媒體製作領域。
                公司彙聚了導演、攝影師、剪輯師、編劇及多媒體設計等專業人才，專注於高品質視頻內容創作，
                包括旅遊節目、資訊娛樂節目、音樂視頻等多類型影像作品。
                <br /><br />
                Vincent Tong 崇尚以創意驅動內容，以專業實現價值，
                堅持以積極與熱情的態度服務客戶，推動影像創作與品牌傳播的融合發展。
                <br /><br />
                作為導演與製作人，Vincent Tong 注重影像語言與內容表達，
                致力於通過作品傳遞故事與情感，並不斷探索影視創作與商業影像之間的更多可能性。
              </p>
            </div>
          </div>

          {/* 下半部分：左英文文字｜右團隊圖 about_1.jpeg */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
            <div className="text-sm text-gray-700 space-y-4">
              <p>
                Vincent Tong is the founder of WING Creative Media and a director specializing in film and video production.
              </p>
              <p>
                With a long-standing focus on visual storytelling and content creation, he is dedicated to producing works that are both emotionally compelling and highly shareable.
              </p>
              <p>
                As the core leader of WING Creative Media, Vincent guides his team in the fields of film and multimedia production. The company brings together a diverse group of professionals, including directors, cinematographers, editors, scriptwriters, and multimedia designers, all committed to creating high-quality video content across a variety of genres—such as travel shows, infotainment programs,and music videos.
              </p>
              <p>
                In recent years, the company has expanded into e-learning video production, creating animated and drama-based educational content that delivers the latest learning materials for employees and students. Their clients in this field include DBS, MUHK, OGGIO, and more.
              </p>
              <p>
                Vincent believes in driving content through creativity and achieving value through professionalism.
              </p>
              <p>
                He approaches every project with enthusiasm and a client-focused mindset, striving to merge visual storytelling with brand communication.
              </p>
              <p>
                As a director and producer, Vincent places great emphasis on visual language and narrative expression. He is passionate about conveying stories and emotions through his work, while continuously exploring the possibilities between artistic filmmaking and commercial video production.
              </p>
            </div>
            <div>
              <img
                src="/image/about/about_1.jpeg"
                alt="WING Creative Media team"
                className="w-full h-auto object-cover shadow-[0_10px_15px_-3px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-16 text-center">
            <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition"
              >
              Contact us
            </Link>
          </div>
        </div>
    </>
  );
}
