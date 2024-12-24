"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";

const PaketAkuntansi = () => {
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
            Paket Pelatihan Akuntansi & Pajak
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Pilih paket pelatihan akuntansi dan pajak yang sesuai dengan
            kebutuhan Anda. Kami menyediakan berbagai pilihan pelatihan untuk
            meningkatkan kemampuan Anda di bidang akuntansi dan perpajakan.
          </p>
        </section>

        {/* Section Paket Pelatihan Akuntansi & Pajak */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Paket Pelatihan 1: Introduction to Accounting */}
            <PaketCard
              title="Introduction to Accounting (Tingkat Dasar/Pemula)"
              description="Pelatihan dasar akuntansi untuk pemula. Pelajari konsep dasar akuntansi, pembukuan, dan laporan keuangan untuk memahami cara perusahaan mencatat transaksi dan menyusun laporan keuangan."
              imageUrl="/paket1.jpeg"
              price="Rp 800.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Introduction%20to%20Accounting"
            />

            {/* Paket Pelatihan 2: Komputer Akuntansi Perusahaan Jasa */}
            <PaketCard
              title="Komputer Akuntansi Perusahaan Jasa"
              description="Pelatihan untuk mengelola akuntansi pada perusahaan jasa. Pelajari cara menggunakan perangkat lunak akuntansi untuk mencatat transaksi, menghitung pajak, dan menyusun laporan keuangan untuk perusahaan jasa."
              imageUrl="/paket2.jpeg"
              price="Rp 950.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Komputer%20Akuntansi%20Perusahaan%20Jasa"
            />

            {/* Paket Pelatihan 3: Komputer Akuntansi Perusahaan Dagang */}
            <PaketCard
              title="Komputer Akuntansi Perusahaan Dagang"
              description="Pelatihan ini bertujuan untuk mengelola akuntansi pada perusahaan dagang. Fokus pada penggunaan perangkat lunak untuk mencatat transaksi jual beli, persediaan barang, dan pembuatan laporan keuangan perusahaan dagang."
              imageUrl="/paket3.jpeg"
              price="Rp 950.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Komputer%20Akuntansi%20Perusahaan%20Dagang"
            />

            {/* Paket Pelatihan 4: Komputer Akuntansi Perusahaan Manufaktur */}
            <PaketCard
              title="Komputer Akuntansi Perusahaan Manufaktur"
              description="Pelatihan Komputer Akuntansi Perusahaan Manufaktur ini untuk mengelola akuntansi pada perusahaan manufaktur. Pelajari cara mencatat transaksi produksi, biaya pokok produksi, dan laporan keuangan perusahaan manufaktur."
              imageUrl="/paket4.jpeg"
              price="Rp 950.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Komputer%20Akuntansi%20Perusahaan%20Manufaktur"
            />

            {/* Paket Pelatihan 5: Financial Modelling & Financial Statement & Analysis */}
            <PaketCard
              title="Financial Modelling & Financial Statement & Analysis"
              description="Pelatihan untuk membangun model keuangan dan menganalisis laporan keuangan perusahaan. Pelajari cara membuat proyeksi keuangan, analisis rasio, dan pengambilan keputusan berbasis data keuangan."
              imageUrl="/paket1.jpeg"
              price="Rp 1.000.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Financial%20Modelling%20dan%20Analisis%20Laporan%20Keuangan"
            />

            {/* Paket Pelatihan 6: Perpajakan */}
            <PaketCard
              title="Perpajakan"
              description="Pelatihan Perpajakan ini mempelajari mengenai sistem perpajakan di Indonesia, termasuk cara menghitung pajak, penyusunan laporan pajak, dan kepatuhan pajak untuk individu maupun perusahaan. Dalam pelatihan ini, Anda akan mempelajari berbagai jenis pajak yang berlaku di Indonesia."
              imageUrl="/paket2.jpeg"
              price="Rp 950.000"
              duration="Durasi: 10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Perpajakan"
            />
          </div>

          {/* Back Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={handleBackClick}
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
            >
              Kembali
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PaketAkuntansi;
