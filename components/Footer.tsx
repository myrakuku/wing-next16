'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
  // 自動取得當前年份
  const [currentYear, setCurrentYear] = useState<number>(2026); // 預設兜底

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="container mx-auto px-6 py-16 relative z-0">
        <div className="mt-20 pt-10 border-t border-gray-200 text-sm text-gray-500">
          © {currentYear} By Wing Creative Media. All rights reserved.
        </div>
    </footer>
  );
}
