'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type BrandLogo = {
  src: string;
  alt: string;
};

type PortfolioShimmerBannerProps = {
  title?: string;
  backgroundImage?: string;
  brandLogos?: BrandLogo[];
};

export default function PortfolioShimmerBanner({
  title = 'Portfolio',
  backgroundImage = '/image/portfolio/sea.jpg', // ✅ 預設改用 sea.jpeg
  brandLogos = [],
}: PortfolioShimmerBannerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
//     let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

//     const handleResize = () => {
//       width = canvas.width = canvas.offsetWidth * devicePixelRatio;
//       height = canvas.height = canvas.offsetHeight * devicePixelRatio;
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     let frame = 0;
//     let animationId: number;

//     // 建立波光光斑
//     const sparkles = Array.from({ length: 140 }, () => ({
//       x: Math.random(),
//       y: 0.55 + Math.random() * 0.35,
//       size: Math.random() * 1.8 + 0.4,
//       speed: Math.random() * 0.012 + 0.003,
//       phase: Math.random() * Math.PI * 2,
//       brightness: Math.random(),
//     }));

//     // 水面微紋
//     const ripples = Array.from({ length: 9 }, (_, i) => ({
//       offset: i * 0.11,
//       speed: 0.004 + i * 0.0008,
//       amplitude: 10 + i * 2,
//       frequency: 0.006 + i * 0.0012,
//       yBase: 0.6 + i * 0.035,
//     }));

//     const animate = () => {
//       // 清空canvas，背景圖片在canvas底層，canvas只負責水波+波光
//       ctx.clearRect(0, 0, width, height);

//       // 水面微紋
//     //   ripples.forEach((r) => {
//     //     ctx.beginPath();
//     //     ctx.strokeStyle = 'rgba(160, 200, 230, 0.18)';
//     //     ctx.lineWidth = 1 * devicePixelRatio;

//     //     for (let x = 0; x <= width; x += 3) {
//     //       const y =
//     //         height * r.yBase +
//     //         Math.sin((x * r.frequency + frame * r.speed + r.offset) * Math.PI * 2) *
//     //           r.amplitude *
//     //           devicePixelRatio;

//     //       if (x === 0) ctx.moveTo(x, y);
//     //       else ctx.lineTo(x, y);
//     //     }

//     //     ctx.stroke();
//     //   });

//       // 粼粼波光
//       sparkles.forEach((s) => {
//         s.x += s.speed * 0.015;
//         if (s.x > 1.02) s.x = -0.02;

//         const x = s.x * width;
//         const y = s.y * height;

//         // 水波起伏
//         const wave = Math.sin((frame * 0.02 + s.phase) * Math.PI * 2) * 5 * devicePixelRatio;

//         // 閃爍強度
//         const twinkle =
//           0.35 +
//           0.65 * Math.abs(Math.sin((frame * 0.045 + s.phase) * Math.PI * 2)) +
//           0.25 * Math.sin((frame * 0.02 + s.phase) * Math.PI * 2);

//         const radius = s.size * devicePixelRatio * (0.7 + twinkle * 0.6);
//         const alpha = Math.min(0.95, twinkle * 0.55);

//         // 外圈柔光
//         const gradient = ctx.createRadialGradient(x, y + wave, 0, x, y + wave, radius * 4);
//         gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha.toFixed(3)})`);
//         gradient.addColorStop(0.4, `rgba(210, 230, 255, ${(alpha * 0.35).toFixed(3)})`);
//         gradient.addColorStop(1, 'rgba(255,255,255,0)');

//         ctx.beginPath();
//         ctx.fillStyle = gradient;
//         ctx.arc(x, y + wave, radius * 4, 0, Math.PI * 2);
//         ctx.fill();

//         // 中心亮點
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, alpha * 1.1).toFixed(3)})`;
//         ctx.arc(x, y + wave, radius, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // 一道柔和反光帶
//       const shine = ctx.createLinearGradient(0, height * 0.55, 0, height * 0.78);
//       shine.addColorStop(0, 'rgba(255,255,255,0)');
//       shine.addColorStop(0.5, 'rgba(230, 240, 255, 0.12)');
//       shine.addColorStop(1, 'rgba(255,255,255,0)');
//       ctx.fillStyle = shine;
//       ctx.fillRect(0, height * 0.55, width, height * 0.23);

//       frame++;
//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* ===== 底層：真實海圖 + 80%黑色濾鏡 ===== */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* 80%黑色遮罩 filter */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Canvas 波光動畫，疊在海圖+黑濾鏡上面 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full z-[2]"
        style={{ display: 'block' }}
      />

      {/* 前景額外漸變遮罩，確保文字清楚 */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      {/* 白色斜切底部 */}
      <div
        className="absolute bottom-0 left-0 z-[4] h-28 w-full bg-white"
        style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%, 0 100%)' }}
      />

      {/* 標題與品牌內容 */}
      <div className="relative z-[5] flex h-full w-full flex-col justify-between px-6 pb-20 pt-12 md:px-12">
        <h1 className="text-6xl font-black leading-none text-white md:text-[7vw]">{title}</h1>

        <div className="ml-auto w-full md:w-1/2">
          <h3 className="mb-4 border-b border-white/70 pb-2 text-lg font-medium text-white">
            Past Collaborating Brands
          </h3>

          {brandLogos.length > 0 ? (
            <div className="grid grid-cols-3 gap-4">
              {brandLogos.map((logo, idx) => (
                <div key={idx} className="relative h-15">
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-white/70">Brands coming soon...</p>
          )}
        </div>
      </div>

      <Link
        href="/contact"
        className="absolute bottom-6 left-6 z-[5] inline-block rounded-full border border-white/70 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black md:hidden"
      >
        Contact us
      </Link>
    </section>
  );
}
