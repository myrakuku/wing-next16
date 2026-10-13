"use client";
import Image from 'next/image';
import Link from 'next/link';
import PortfolioShimmerBanner from '@/components/PortfolioShimmerBanner';
import { motion, type Variants } from "framer-motion";

// 和全站統一動畫設定，TS無錯
const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

// ===== 作品集分類資料，左側選單 + 影片列表，全部用map渲染 =====
const portfolioCategories = [
  {
    id: "commercial",
    label: "Commercial",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 1" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 2" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 3" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 4" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 5" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 6" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 7" },
      { youtubeId: "dQw4w9WgXcQ", title: "Commercial Reel 8" },
    ]
  },
  {
    id: "ai-videos-animations",
    label: "AI videos & Animations",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 1" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 2" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 3" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 4" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 5" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 6" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 7" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 8" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 9" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 10" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 11" },
      { youtubeId: "dQw4w9WgXcQ", title: "AI Animation 12" },
    ]
  },
  {
    id: "tv-shows",
    label: "TV shows",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "TV Show 1" },
      { youtubeId: "dQw4w9WgXcQ", title: "TV Show 2" },
    ]
  },
  {
    id: "drama-music-videos",
    label: "Drama & Music Videos",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 1" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 2" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 3" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 4" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 5" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 6" },
      { youtubeId: "dQw4w9WgXcQ", title: "Drama MV 7" },
    ]
  },
  {
    id: "training-videos",
    label: "Training videos",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 1" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 2" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 3" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 4" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 5" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 6" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 7" },
      { youtubeId: "dQw4w9WgXcQ", title: "Training Video 8" },
    ]
  },
  {
    id: "testimonials",
    label: "Testimonials",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Testimonial 1" },
    ]
  },
  {
    id: "events",
    label: "Events",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Event Video 1" },
    ]
  },
  {
    id: "led-walls-design",
    label: "Led Walls design",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "LED Wall Design 1" },
    ]
  },
  {
    id: "live-streaming",
    label: "Live streaming",
    videos: [
      { youtubeId: "dQw4w9WgXcQ", title: "Live Stream Highlight" },
    ]
  },
];
// 客戶品牌Logo
const brandLogos = [
  { src: '/image/portfolio/logo_1.png', alt: 'Brand 1' },
  { src: '/image/portfolio/logo_2.png', alt: 'Brand 2' },
  { src: '/image/portfolio/logo_3.png', alt: 'Brand 3' },
  { src: '/image/portfolio/logo_4.png', alt: 'Brand 4' },
  { src: '/image/portfolio/logo_5.png', alt: 'Brand 5' },
  { src: '/image/portfolio/logo_6.png', alt: 'Brand 6' },
  { src: '/image/portfolio/logo_7.png', alt: 'Brand 7' },
  { src: '/image/portfolio/logo_8.png', alt: 'Brand 8' },
  { src: '/image/portfolio/logo_9.png', alt: 'Brand 9' },
];

export default function PortfolioPage() {
  return (
    <main>
      <PortfolioShimmerBanner
        title="Portfolio"
        brandLogos={brandLogos}
      />
      {/* ===== 主內容：左側固定分類選單 + 右邊作品區 ===== */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
        {/* 左邊固定 Category Selector 由左滑入 */}
        <motion.aside
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="lg:sticky lg:top-10 h-fit"
        >
          <nav className="space-y-3">
            {portfolioCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`#${cat.id}`}
                className="block group text-gray-700 hover:text-black transition"
              >
                <span className="inline-block w-4 h-4 rounded-full border border-gray-600 group-hover:bg-black mr-2 align-middle"></span>
                {cat.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block border border-gray-800 px-5 py-2 rounded-full text-black hover:bg-gray-800 hover:text-white transition"
            >
              Contact us
            </Link>
          </div>
        </motion.aside>

        {/* 右邊作品內容區 */}
        <div className="space-y-28">
          {portfolioCategories.map((category) => (
            <motion.section
              key={category.id}
              id={category.id}
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.h2
                variants={slideUp}
                className="text-4xl text-black font-light text-center uppercase border-b border-gray-400 pb-2 mb-10 inline-block w-full"
              >
                {category.label}
              </motion.h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {category.videos.map((video, vidIdx) => {
                  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
                  return (
                    <motion.a
                      key={vidIdx}
                      variants={slideUp}
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden group aspect-video"
                    >
                      <Image
                        src={thumbUrl}
                        alt={video.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      {/* Youtube播放圓形按鈕 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-black/60 flex items-center justify-center group-hover:bg-red-600 transition">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
}
