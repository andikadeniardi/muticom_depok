"use client"; // Menandakan bahwa komponen ini adalah client component

import Link from "next/link";
import { useState } from "react";
import Image from "next/image"; // Impor komponen Image

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-600 shadow-lg font-bold text-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo (Menggunakan Image dari next/image) */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/logomutikom.png" // Path gambar logo Anda
              alt="Logo"
              width={85} // Tentukan lebar logo
              height={10} // Tentukan tinggi logo
              className="object-contain" // Menjaga proporsi gambar
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links (For large screens) */}
        <ul
          className={`lg:flex space-x-8 ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <Link
              href="/"
              className="hover:text-yellow-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-yellow-400 transition duration-300"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="hover:text-yellow-400 transition duration-300"
            >
              Pelatihan
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
