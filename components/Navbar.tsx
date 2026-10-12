"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container mt-5 mx-auto px-5 py-2">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/wing_logo.png"
            alt="WING CREATIVE MEDIA 一易媒體創意有限公司"
            width={150}
            height={50}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-800">
          <Link href="/about" className="hover:text-gray-500 transition-colors">About Us</Link>
          <Link href="/services" className="hover:text-gray-500 transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-gray-500 transition-colors">Portfolio</Link>
          <Link href="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
        </nav>

        {/* Mobile 漢堡按鈕 */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm uppercase tracking-wide text-gray-800 border-t pt-4">
          <Link
            href="/about"
            className="hover:text-gray-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-gray-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
