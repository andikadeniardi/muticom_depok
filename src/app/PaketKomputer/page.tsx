"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";

const PaketKomputer = () => {
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
            Paket Pelatihan Komputer
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Pilih paket pelatihan komputer yang sesuai dengan kebutuhan Anda.
            Kami menawarkan berbagai paket untuk mengembangkan keterampilan di
            bidang teknologi informasi yang bisa disesuaikan dengan tingkat
            kemampuan Anda.
          </p>
        </section>

        {/* Section Paket Pelatihan Komputer */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Paket Pelatihan 1 */}
            <PaketCard
              title="Introduction to Computer (Tingkat Dasar/Pemula) Start Usia 5th"
              description="Pelatihan untuk mengenal komputer dan sistem operasi, serta aplikasi perkantoran dasar seperti Word dan Excel. Cocok untuk pemula atau anak-anak usia 5 tahun ke atas yang ingin belajar menggunakan komputer untuk kegiatan sehari-hari."
              imageUrl="/paket1.jpeg"
              price="Rp 800.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Pelatihan%20Dasar%20Komputer"
              duration="8 x 1.5 jam"
            />

            {/* Paket Pelatihan 2 */}
            <PaketCard
              title="Paket Administrasi Perkantoran (Tingkat Menengah)"
              description="Pelatihan untuk pemula dalam menggunakan Microsoft Word, Excel, dan PowerPoint. Paket ini cocok bagi Anda yang baru mulai bekerja dengan aplikasi perkantoran dan ingin meningkatkan keterampilan dasar dalam mengelola dokumen, data, dan presentasi."
              imageUrl="/paket2.jpeg"
              price="Rp 1.600.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Administrasi%20Perkantoran%20Tingkat%20Menengah"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 3 */}
            <PaketCard
              title="Paket Administrasi Perkantoran (Tingkat Lanjutan)"
              description="Meningkatkan keterampilan dalam Microsoft Word, Excel, PowerPoint (intermediate), serta Outlook dan MS Teams. Peserta juga akan mempelajari penggunaan browser dan internet untuk kebutuhan administrasi yang lebih kompleks dan kolaboratif di lingkungan kerja."
              imageUrl="/paket3.jpeg"
              price="Rp 2.000.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Administrasi%20Perkantoran%20Tingkat%20Lanjutan"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 4 */}
            <PaketCard
              title="Paket Data Analyst (Tingkat Mahir)"
              description="Pelatihan untuk menjadi Data Analyst profesional dengan fokus pada penggunaan Excel Power Query dan Power Pivot (Dashboard) untuk mengolah data. Anda juga akan mempelajari pembuatan visualisasi data menggunakan Ms.Power BI, alat analisis data yang dibutuhkan di industri."
              imageUrl="/paket4.jpeg"
              price="Rp 3.500.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Data%20Analyst"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 5 */}
            <PaketCard
              title="Paket Design Grafis Illustrator & Photoshop"
              description="Pelatihan intensif mengenai desain grafis menggunakan Adobe Illustrator dan Photoshop. Didesain untuk membantu Anda mempelajari teknik desain visual untuk pembuatan logo, brosur, poster, dan materi pemasaran lainnya."
              imageUrl="/paket1.jpeg"
              price="Rp 2.000.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Design%20Grafis%20Illustrator%20dan%20Photoshop"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 6 */}
            <PaketCard
              title="Paket AutoCAD 2D & 3D"
              description="Paket pelatihan Autocad ini untuk mempelajari teknik desain dalam dunia industri. Teknik ini menggunakan AutoCAD 2D dan 3D, sangat cocok untuk mereka yang berkarir di bidang arsitektur dan desain teknik, serta yang tertarik membuat gambar teknik profesional."
              imageUrl="/paket2.jpeg"
              price="Rp 2.500.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20AutoCAD%202D%20dan%203D"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 7 */}
            <PaketCard
              title="Paket Web Master Admin, Programming, Design"
              description="Pelatihan komprehensif untuk mengelola dan mengembangkan website. Program ini mencakup berbagai aspek, mulai dari administrasi web, desain UI/UX, hingga pengembangan backend dan pemrograman web."
              imageUrl="/paket3.jpeg"
              price="Rp 2.600.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Web%20Master"
              duration="16 x 1.5 jam"
            />

            {/* Paket Pelatihan 8 */}
            <PaketCard
              title="Paket Animasi 3D Max, Adobe Premiere"
              description="Pelatihan untuk membuat animasi 3D dan mengedit video dengan menggunakan software 3D Max dan Adobe Premiere. Program ini cocok bagi Anda yang ingin mengembangkan karir di bidang pembuatan animasi dan produksi film."
              imageUrl="/paket4.jpeg"
              price="Rp 2.600.000"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Animasi%203D%20Max%20dan%20Adobe%20Premiere"
              duration="16 x 1.5 jam"
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

export default PaketKomputer;
