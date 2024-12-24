"use client";

import Navbar from "../../../components/molecules/Navbar";
import Footer from "../../../components/molecules/Footer";

const Kontak = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto p-4">
        {/* Header Section */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold text-blue-600">Kontak Kami</h1>
          <p className="text-lg text-gray-600 mt-4">
            Jika Anda tertarik untuk mendaftar pelatihan atau memiliki
            pertanyaan lebih lanjut, silakan hubungi kami melalui informasi
            kontak di bawah ini.
          </p>
        </section>

        {/* Informasi Kontak dan Pendaftaran Pelatihan */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">
            Informasi Kontak & Pendaftaran
          </h2>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">
              Jl. M. Nasir No.10, Cilodong, Kec. Cilodong, Kota Depok, Jawa
              Barat 16414
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Nomor Telepon WA/Telegram : 0813 1690 7115 (Komputer) 0857 7660
              1878 (Bahasa)
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Email: mutikom2020@gmail.com/mutikomoke@gmail.com
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Untuk mendaftar pelatihan, Anda dapat menghubungi kami melalui
              email atau telepon, atau langsung datang ke alamat kami.
            </p>
          </div>
        </section>

        {/* Lokasi di Peta */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">
            Lokasi Kami
          </h2>
          <div className="mt-4">
            <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg shadow-md">
              {/* Ganti dengan embed peta atau gambar lokasi */}
              <iframe
                className="w-full h-full"
                src="/lokasimutikom.PNG"
                frameBorder="0"
                allowFullScreen
                title="Lokasi Kami"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontak;
