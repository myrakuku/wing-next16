import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <section>
      {/* 撕裂邊 Banner */}
      <div className="relative h-[30vh] mt-20 bg-black tear-edge overflow-hidden">
        {/* Banner 背景圖 mv2.jpg */}
        <Image
          src="/image/contact/mv2.jpg"
          alt="contact banner background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[10vw] md:text-[7vw] font-black text-white">CONTACT US</h1>
        </div>
      </div>

      <div className="container mt-10 mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Address */}
          <div>
            <h3 className="text-2xl font-bold border-b pb-2 mb-4">Address</h3>
            <p className="text-gray-700">
              608 WING HING INDUSTRIAL BUILDING,<br />
              14 HING YIP STREET<br />
              KWUN TONG, KOWLOON<br />
              HONG KONG
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold border-b pb-2 mb-4">Contact</h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <Phone size={20} />
                +852 6652 2352
              </p>
              <p className="flex items-center gap-3">
                <Mail size={20} />
                vt@wingcreativemedia.com
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 h-[400px] grayscale">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.873241123041!2d114.22472211510317!3d22.31221118532317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDE4JzQ0LjAiTiAxMTTCsDEzJzMwLjAiRQ!5e0!3m2!1sen!2shk!4v..."
            width="100%"
            height="100%"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
