"use client";

import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import Image from "next/image";

const Tentang = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto p-4">
        {/* Header Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-blue-600">Tentang Kami</h1>
          <p className="text-balance text-lg text-gray-600 mt-4">
            Kami adalah lembaga pendidikan yang bergerak dalam bidang
            peningkatan kualitas dan mutu Sumber Daya Manusia di bidang
            Teknologi Informasi dan Bahasa.
          </p>
        </section>

        {/* Misi Kami Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">
            Misi Kami
          </h2>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Mempersiapkan Sumber Daya Yang Handal Pada Bidang Komputer Seiring
              Perkembangan Jaman. Menjadi LKP Bersekala Nasional. Menjadi Pusat
              Informasi Teknologi dan LifeTime Learning Bagi Masyarakat Budaya
              Kerja Cerdas, Kerja Keras, Kerja Tuntas, dan Kerja Iklas Membina
              Peserta didik untuk Berkembang Menjadi Tenaga Profesional
              Menyelenggarakan Pendidikan dan Pelatihan dan Pengabdian
              Masyarakat.
            </p>
          </div>
        </section>

        {/* Visi Kami Section */}
        <section className="mt-16 bg-white py-12">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">
            Visi Kami
          </h2>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600">
              Menjadi Sebuah Lembaga Pendidikan Yang Dapat Menciptakan
              Pendidikan Sumber Daya Manusia Cerdas Teknologi Profesional dan
              Sukses Berwirausaha
            </p>
          </div>
        </section>

        {/* Tim Kami Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">
            Tim Kami
          </h2>
          <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contoh Anggota Tim */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/team-member1.jpg"
                alt="Anggota Tim 1"
                width={128} // Tentukan ukuran gambar
                height={128} // Tentukan ukuran gambar
                className="mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">???</h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-gray-500 mt-2">????</p>
            </div>
            {/* Anggota Tim 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/team-member2.jpg"
                alt="Anggota Tim 2"
                width={128} // Tentukan ukuran gambar
                height={128} // Tentukan ukuran gambar
                className="mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">????</h3>
              <p className="text-gray-600">???</p>
              <p className="text-gray-500 mt-2">??</p>
            </div>
            {/* Anggota Tim 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/team-member3.jpg"
                alt="Anggota Tim 3"
                width={128} // Tentukan ukuran gambar
                height={128} // Tentukan ukuran gambar
                className="mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">???</h3>
              <p className="text-gray-600">???</p>
              <p className="text-gray-500 mt-2">???</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tentang;
