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
            bidang teknologi informasi.
          </p>
        </section>

        {/* Section Paket Pelatihan Komputer */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Paket Pelatihan 1 */}
            <PaketCard
              title="Paket Dasar Komputer"
              description="Pelatihan untuk pemula yang mencakup dasar-dasar penggunaan komputer, sistem operasi, dan aplikasi perkantoran."
              imageUrl="/images/basic-computer.jpg"
              price="Rp 1.000.000"
              link="/paket/dasar-komputer"
            />

            {/* Paket Pelatihan 2 */}
            <PaketCard
              title="Paket Microsoft Office"
              description="Pelatihan mendalam mengenai penggunaan Microsoft Word, Excel, PowerPoint, dan Outlook."
              imageUrl="/images/microsoft-office.jpg"
              price="Rp 1.200.000"
              link="/paket/microsoft-office"
            />

            {/* Paket Pelatihan 3 */}
            <PaketCard
              title="Paket Desain Grafis"
              description="Pelatihan untuk menjadi ahli desain grafis menggunakan software seperti Adobe Photoshop dan Illustrator."
              imageUrl="/images/graphic-design.jpg"
              price="Rp 2.500.000"
              link="/paket/desain-grafis"
            />

            {/* Paket Pelatihan 4 */}
            <PaketCard
              title="Paket Web Development"
              description="Pelatihan untuk membangun website menggunakan HTML, CSS, JavaScript, dan tools web development lainnya."
              imageUrl="/images/web-development.jpg"
              price="Rp 3.000.000"
              link="/paket/web-development"
            />

            {/* Paket Pelatihan 5 */}
            <PaketCard
              title="Paket Jaringan Komputer"
              description="Pelatihan untuk memahami konsep jaringan komputer, setting jaringan, dan troubleshooting."
              imageUrl="/images/networking.jpg"
              price="Rp 2.200.000"
              link="/paket/jaringan-komputer"
            />

            {/* Paket Pelatihan 6 */}
            <PaketCard
              title="Paket Sistem Operasi"
              description="Pelatihan mengenai instalasi, konfigurasi, dan penggunaan sistem operasi Windows dan Linux."
              imageUrl="/images/operating-system.jpg"
              price="Rp 2.000.000"
              link="/paket/sistem-operasi"
            />

            {/* Paket Pelatihan 7 */}
            <PaketCard
              title="Paket Keamanan Jaringan"
              description="Pelatihan mengenai pengamanan jaringan komputer, firewall, dan enkripsi data."
              imageUrl="/images/network-security.jpg"
              price="Rp 2.500.000"
              link="/paket/keamanan-jaringan"
            />

            {/* Paket Pelatihan 8 */}
            <PaketCard
              title="Paket IT Support"
              description="Pelatihan untuk menjadi teknisi IT yang mampu memberikan dukungan teknis untuk perangkat keras dan perangkat lunak."
              imageUrl="/images/it-support.jpg"
              price="Rp 2.800.000"
              link="/paket/it-support"
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
