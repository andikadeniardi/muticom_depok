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
              height={30} // Tentukan tinggi logo
              className="object-contain" // Menjaga proporsi gambar
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 focus:outline-none"
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
          className={`hidden lg:flex space-x-8 lg:space-x-8 transition-all duration-300 ease-in-out`}
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
              href="/tentang"
              className="hover:text-yellow-400 transition duration-300"
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              href="/pelatihan"
              className="hover:text-yellow-400 transition duration-300"
            >
              Pelatihan
            </Link>
          </li>
          <li>
            <Link
              href="/kontak"
              className="hover:text-yellow-400 transition duration-300"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown menu on small screens (Hamburger menu opens) */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center py-4 bg-white shadow-lg">
          <Link
            href="/"
            className="py-2 text-lg text-blue-600 hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="py-2 text-lg text-blue-600 hover:text-yellow-400"
          >
            Tentang
          </Link>
          <Link
            href="/services"
            className="py-2 text-lg text-blue-600 hover:text-yellow-400"
          >
            Pelatihan
          </Link>
          <Link
            href="/contact"
            className="py-2 text-lg text-blue-600 hover:text-yellow-400"
          >
            Kontak
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
