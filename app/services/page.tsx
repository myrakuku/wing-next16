"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from "framer-motion";
import service_1 from '../../public/image/services/service_1.jpeg';
import service_2 from '../../public/image/services/service_2.jpeg';
import service_3 from '../../public/image/services/service_3.jpeg';
import service_4 from '../../public/image/services/service_4.jpeg';

const services = [
  {
    title: "VIDEO PRODUCTION",
    quoteText: "ask for quote",
    imgSrc: service_1,
    slug: "", 
  },
  {
    title: "PHOTO SHOOTING",
    quoteText: "ask for quote",
    imgSrc: service_2,
    slug: "",
  },
  {
    title: "AI VIDEO & ANIMATION",
    quoteText: "ask for quote",
    imgSrc: service_3,
    slug: "",
  },
  {
    title: "MODELS & TALENTS",
    quoteText: "ask for quote",
    imgSrc: service_4,
    slug: "",
  },
];

// PPT滑入動畫設定，和About頁保持一樣規格，TS無錯
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

// 卡片延遲彈出 stagger
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};


export default function ServicesPage() {
  return (
    <main className="py-16 px-4 bg-white">
      {/* 標題 */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-black tracking-widest uppercase text-black">
          OUR SERVICES
        </h1>
      </motion.div>

      {/* 服務卡片 Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {services.map((item, idx) => (
          <motion.div key={idx} variants={slideUp}>
            <Link
              href={`/services/${item.slug}`}
              className="relative overflow-hidden group block"
            >
              {/* 圖片 */}
              <div className="h-[20vh] md:h-[60vh]">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  className="object-cover grayscale transition duration-500 group-hover:scale-105"
                />
              </div>
              {/* 底部深色文字條 */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                <h3 className="text-white text-lg font-medium uppercase">{item.title}</h3>
                <p className="text-gray-200 text-sm mt-1">{item.quoteText}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact us 按鈕 */}
      <motion.div
        variants={slideUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mt-12"
      >
        <Link
          href="/contact"
          className="inline-block border border-black px-6 py-2 rounded-full text-black hover:bg-black hover:text-white transition"
        >
          Contact us
        </Link>
      </motion.div>
    </main>
  );
}