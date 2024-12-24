"use client";
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";

const PaketPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Paket Pelatihan Kami
        </h1>

        {/* Section Paket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Paket Pelatihan Komputer */}
          <PaketCard
            title="Paket Komputer"
            description="Pelatihan paket komputer ini mencakup dasar-dasar penggunaan komputer, pengoperasian perangkat lunak, dan aplikasi produktivitas untuk membantu peserta menguasai keterampilan teknologi komputer dasar."
            imageUrl="/paket1.jpeg"
            link="/PaketKomputer"
          />

          {/* Paket Pelatihan Komputer Satuan  */}
          <PaketCard

            title="Paket Komputer Satuan"
            description="Materi yang dibahas mencakup dasar-dasar perangkat keras dan perangkat lunak komputer, pengelolaan file, penggunaan aplikasi produktivitas seperti Microsoft Office, serta troubleshooting dasar untuk mengatasi masalah komputer."
            imageUrl="/paket2.jpeg"
            link="/PaketKomputerSatuan"

          />
          {/* Paket Pelatihan Bahasa Inggris */}
          <PaketCard
            title="Paket Bahasa Inggris"
            description="Pelatihan ini dirancang untuk meningkatkan kemampuan komunikasi peserta dalam bahasa Inggris, termasuk kemampuan berbicara, mendengarkan, membaca, dan menulis dalam konteks profesional dan sehari-hari."
            imageUrl="/paket3.jpeg"
            link="/PaketBahasaInggris"
          />

          {/* Paket Pelatihan Akuntansi/Pajak */}
          <PaketCard
            title="Paket Akuntansi/Pajak"
            description="Pelatihan ini memberikan pemahaman tentang dasar-dasar akuntansi serta keterampilan dalam mengelola kewajiban pajak untuk individu dan perusahaan, termasuk pemahaman pelaporan pajak dan peraturan perpajakan."
            imageUrl="/paket4.jpeg"
            link="/PaketAkuntansi"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaketPage;
