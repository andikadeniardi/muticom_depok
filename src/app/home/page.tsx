"use client";

import Image from "next/image";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";
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
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8"></h1>

        {/* Section Paket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Paket Pelatihan Komputer */}
          <PaketCard
            title="Paket Komputer"
            description="Pelatihan paket komputer ini mencakup dasar-dasar penggunaan komputer, pengoperasian perangkat lunak, dan aplikasi produktivitas untuk membantu peserta menguasai keterampilan teknologi komputer dasar."
            imageUrl="/paket1.jpeg"
            link="/PaketKomputer"
          />

          {/* Paket Pelatihan Jaringan */}
          <PaketCard
            title="Paket Jaringan"
            description="Pelatihan paket jaringan ini akan memberikan keterampilan praktis dalam merancang, mengelola, dan mengatasi masalah jaringan komputer, serta memahami konsep dasar seperti TCP/IP, DNS, dan lainnya. Jadi silahkan dipilih sesuai minat."
            imageUrl="/paket2.jpeg"
            link="/paket/networking"
          />

          {/* Paket Pelatihan Bahasa Inggris */}
          <PaketCard
            title="Paket Bahasa Inggris"
            description="Pelatihan ini dirancang untuk meningkatkan kemampuan komunikasi peserta dalam bahasa Inggris, termasuk kemampuan berbicara, mendengarkan, membaca, dan menulis dalam konteks profesional dan sehari-hari."
            imageUrl="/paket3.jpeg"
            link="/paket/english-language"
          />

          {/* Paket Pelatihan Akuntansi/Pajak */}
          <PaketCard
            title="Paket Akuntansi/Pajak"
            description="Pelatihan ini memberikan pemahaman tentang dasar-dasar akuntansi serta keterampilan dalam mengelola kewajiban pajak untuk individu dan perusahaan, termasuk pemahaman pelaporan pajak dan peraturan perpajakan."
            imageUrl="/paket4.jpeg"
            link="/paket/accounting-tax"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
