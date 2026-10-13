'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from "framer-motion";

type BrandLogo = {
  src: string;
  alt: string;
};
type PortfolioShimmerBannerProps = {
  title?: string;
  backgroundImage?: string;
  brandLogos?: BrandLogo[];
};

// 全站統一動畫，TS 無錯
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

const staggerLogoContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function PortfolioShimmerBanner({
  title = 'Portfolio',
  backgroundImage = '/image/portfolio/sea.jpg',
  brandLogos = [],
}: PortfolioShimmerBannerProps) {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* 底層：海圖 + 遮罩 */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* 黑色濾鏡 */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />
      {/* 移除了canvas + useEffect，直接保留圖層結構 */}
      <div className="absolute inset-0 z-[2]" />
      {/* 前景漸變遮罩 */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      {/* 白色斜切底部 */}
      <div
        className="absolute bottom-0 left-0 z-[4] h-28 w-full bg-white"
        style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%, 0 100%)' }}
      />

      {/* 標題與品牌內容，加上motion動畫 */}
      <div className="relative z-[5] flex h-full w-full flex-col justify-between px-6 pb-20 pt-12 md:px-12">
        <motion.h1
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ type:"tween", duration:0.9, ease:"easeOut" }}
          className="text-6xl font-black leading-none text-white md:text-[7vw]"
        >
          {title}
        </motion.h1>

        <motion.div
          variants={staggerLogoContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once:true, amount:0.2 }}
          className="ml-auto w-full md:w-1/2"
        >
          <motion.h3
            variants={slideUp}
            className="mb-4 border-b border-white/70 pb-2 text-lg font-medium text-white"
          >
            Past Collaborating Brands
          </motion.h3>
          {brandLogos.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {brandLogos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  variants={slideUp}
                  className="relative h-15"
                >
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.p variants={slideUp} className="text-sm text-white/70">
              Brands coming soon...
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once:true, amount:0.2 }}
      >
        <Link
          href="/contact"
          className="absolute bottom-6 left-6 z-[5] inline-block rounded-full border border-white/70 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black md:hidden"
        >
          Contact us
        </Link>
      </motion.div>
    </section>
  );
}
