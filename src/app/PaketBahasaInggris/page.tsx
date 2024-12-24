"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";

const PaketBahasaInggris = () => {
  const router = useRouter(); // Initialize router

  const handleBackClick = () => {
    router.back(); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto p-4">
        {/* Header Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-blue-600">
            Paket Pelatihan Bahasa Inggris
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Pilih paket pelatihan Bahasa Inggris yang sesuai dengan kebutuhan
            Anda. Kami menawarkan berbagai paket untuk meningkatkan kemampuan
            berbahasa Inggris di berbagai bidang, dari Phonics, Grammar hingga
            TOEFL dan Business English.
          </p>
        </section>

        {/* Section Paket Pelatihan Bahasa Inggris */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Phonics (Levels 1-6 Combined) */}
            <PaketCard
              title="Phonics Level 1-7"
              description="Pelatihan lengkap untuk menguasai fonetik dan pengucapan bahasa Inggris, dari (usia 4-5thn). Cocok untuk pemula hingga yang ingin memperbaiki pengucapan dan kefasihan membaca."
              imageUrl="/paket1.jpeg"
              price="Rp 150.000/bulan"
              link="https://wa.me/6285776601878?text=Saya%20tertarik%20dengan%20Paket%20Phonics%20Level%201%20sampai%206"
              duration="3 Bulan/Level"
            />

            {/* Grammar Level 1-6 Combined */}
            <PaketCard
              title="Grammar Level 1-6"
              description="Grammar bahasa Inggris mulai (usia 5-11thn). Pelatihan ini mencakup penggunaan tenses, kalimat majemuk, modals, passive voice, conditional sentences, dan masih banyak lagi."
              imageUrl="/paket2.jpeg"
              price="Rp 200.000/bulan"
              link="https://wa.me/6285776601878?text=Saya%20tertarik%20dengan%20Paket%20Grammar%20Level%201%20sampai%206"
              duration="6 Bulan/Level"
            />

            {/* TOEFL Preparation */}
            <PaketCard
              title="TOEFL Preparation"
              description="Pelatihan ini mempelajari soal-soal untuk persiapan ujian TOEFL dengan pelatihan komprehensif mencakup Listening, Reading, Speaking, dan Writing untuk mencapai skor tinggi."
              imageUrl="/paket3.jpeg"
              price="Rp 250.000/bulan"
              link="https://wa.me/6285776601878?text=Saya%20tertarik%20dengan%20Paket%20TOEFL%20Preparation"
              duration="6 Bulan"
            />

            {/* Business English */}
            <PaketCard
              title="Business English"
              description="(Program Karyawan) Pelatihan Business English untuk menguasai bahasa Inggris yang diperlukan dalam dunia bisnis, mencakup komunikasi profesional, menulis email, dan presentasi."
              imageUrl="/paket4.jpeg"
              price="Rp 250.000/bulan"
              link="https://wa.me/6285776601878?text=Saya%20tertarik%20dengan%20Paket%20Business%20English"
              duration="6 Bulan"
            />
          </div>

          {/* Tombol Back */}
          <section className="text-center mt-8">
            <button
              onClick={handleBackClick}
              className="bg-gray-600 text-white py-2 px-6 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Kembali
            </button>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaketBahasaInggris;
