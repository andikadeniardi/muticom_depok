"use client";

import Image from "next/image";
import Navbar from "../../../components/molecules/Navbar";
import Footer from "../../../components/molecules/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Selamat datang di LKP/LPK MUTIKOM (Mutiara Komputer) Depok
        </h1>
        <p className="text-balance text-xl text-center text-blue-400 mt-4">
          Kami adalah lembaga pendidikan yang bergerak dalam bidang peningkatan
          kualitas dan mutu Sumber Daya Manusia di bidang Teknologi Informasi
          dan Bahasa.
        </p>

        {/* Gambar Section */}
        <section className="mt-8 text-center">
          <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
            {/* Gambar lokal yang ditampilkan menggunakan next/image */}
            <Image
              src="/bannerhome.png"
              alt="Product Image"
              layout="fill" // Gambar akan mengisi div dengan layout yang sesuai
              objectFit="cover" // Menyesuaikan ukuran gambar agar tetap sesuai dengan proporsi
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
