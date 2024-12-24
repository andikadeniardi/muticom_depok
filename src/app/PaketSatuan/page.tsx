"use client";

import { useRouter } from "next/navigation"; // Import useRouter
import Footer from "../../../components/molecules/Footer";
import Navbar from "../../../components/molecules/Navbar";
import PaketCard from "../../../components/molecules/PaketCard";

const PaketSatuan = () => {
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
            Paket Pelatihan Jaringan
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Pilih paket pelatihan jaringan yang sesuai dengan kebutuhan Anda.
            Kami menawarkan berbagai pilihan untuk memperdalam pengetahuan Anda
            dalam berbagai topik teknologi dan jaringan.
          </p>
        </section>

        {/* Section Paket Pelatihan Jaringan */}
        <section className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Paket Pelatihan 1: MS Word */}
            <PaketCard
              title="Microsoft Word"
              description="Pelatihan Microsoft Word mulai dari dasar hingga tingkat lanjut. Pelajari cara membuat, mengedit, dan memformat dokumen, serta memanfaatkan fitur-fitur canggih seperti mail merge dan template."
              imageUrl="/paket1.jpeg"
              price="Rp 800.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Microsoft%20Word"
            />

            {/* Paket Pelatihan 2: MS Excel */}
            <PaketCard
              title="Microsoft Excel"
              description="Pelatihan Excel dari dasar hingga tingkat lanjut, mencakup penggunaan rumus, analisis data, pembuatan grafik, dan dashboard menggunakan Power Pivot dan Power Query."
              imageUrl="/paket2.jpeg"
              price="Rp 800.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Microsoft%20Excel"
            />

            {/* Paket Pelatihan 3: MS PowerPoint */}
            <PaketCard
              title="Microsoft PowerPoint"
              description="Pelatihan untuk membuat presentasi yang menarik dengan PowerPoint. Pelajari cara menggunakan template, animasi, dan transisi untuk membuat presentasi profesional."
              imageUrl="/paket3.jpeg"
              price="Rp 800.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Microsoft%20PowerPoint"
            />

            {/* Paket Pelatihan 4: MS Access */}
            <PaketCard
              title="Microsoft Access"
              description="Pelatihan dalam penggunaan database dengan Microsoft Access. Anda akan mempelajari cara membuat, mengelola, dan memanipulasi database dengan menggunakan query dan form."
              imageUrl="/paket4.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Microsoft%20Access"
            />

            {/* Paket Pelatihan 5: MS Project */}
            <PaketCard
              title="Microsoft Project"
              description="Pelatihan untuk mempelajari manajemen proyek menggunakan Microsoft Project. Pelajari cara membuat jadwal proyek, melacak kemajuan, dan mengelola sumber daya proyek."
              imageUrl="/paket1.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Microsoft%20Project"
            />

            {/* Paket Pelatihan 6: SQL Server */}
            <PaketCard
              title="SQL Server"
              description="Pelatihan SQL Server untuk memahami konsep dasar database, query, dan pemrograman SQL untuk manipulasi dan pengelolaan data dalam database."
              imageUrl="/paket2.jpeg"
              price="Rp 2.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20SQL%20Server"
            />

            {/* Paket Pelatihan 7: HTML & PHP */}
            <PaketCard
              title="HTML & PHP"
              description="Pelatihan dasar untuk web development dengan HTML dan PHP. Pelajari cara membuat halaman web statis dan dinamis serta menghubungkan web ke database."
              imageUrl="/paket3.jpeg"
              price="Rp 2.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20HTML%20dan%20PHP"
            />

            {/* Paket Pelatihan 8: C++ */}
            <PaketCard
              title="C++ Programming"
              description="Pelatihan dasar hingga menengah mengenai pemrograman dengan C++, termasuk pemahaman struktur data, algoritma, dan pembuatan aplikasi berbasis C++."
              imageUrl="/paket4.jpeg"
              price="Rp 2.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20C%2B%2B%20Programming"
            />

            {/* Paket Pelatihan 9: LAN */}
            <PaketCard
              title="Local Area Network (LAN)"
              description="Pelatihan untuk memahami konsep dasar jaringan LAN, termasuk instalasi dan konfigurasi perangkat jaringan seperti switch dan router untuk membangun jaringan lokal."
              imageUrl="/paket1.jpeg"
              price="Rp 1.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20LAN"
            />

            {/* Paket Pelatihan 10: Jaringan Komputer */}
            <PaketCard
              title="Jaringan Komputer"
              description="Pelatihan Jaringan Komputer ini memberikan pemahaman menyeluruh untuk memahami konsep jaringan komputer secara menyeluruh, termasuk TCP/IP, subnetting, routing, dan troubleshooting jaringan."
              imageUrl="/paket2.jpeg"
              price="Rp 1.000.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Jaringan%20Komputer"
            />

            {/* Paket Pelatihan 11: Teknisi Komputer */}
            <PaketCard
              title="Teknisi Komputer"
              description="Pelatihan Teknisi Komputer ini untuk menjadi teknisi komputer yang handal, mencakup perakitan PC, pemeliharaan perangkat keras, dan pemecahan masalah perangkat keras komputer."
              imageUrl="/paket3.jpeg"
              price="Rp 1.000.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Teknisi%20Komputer"
            />

            {/* Paket Pelatihan 12: Adobe Photoshop */}
            <PaketCard
              title="Adobe Photoshop"
              description="Pelatihan Adobe Photoshop untuk memahami dasar-dasar dan teknik lanjutan dalam desain grafis menggunakan Adobe Photoshop, termasuk pengeditan gambar dan pembuatan desain visual."
              imageUrl="/paket4.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Adobe%20Photoshop"
            />

            {/* Paket Pelatihan 13: CorelDRAW */}
            <PaketCard
              title="CorelDRAW"
              description="Pelatihan desain grafis menggunakan CorelDRAW untuk membuat ilustrasi dan desain vektor profesional seperti logo, brosur, dan poster."
              imageUrl="/paket1.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20CorelDRAW"
            />

            {/* Paket Pelatihan 14: Illustrator */}
            <PaketCard
              title="Adobe Illustrator"
              description="Memahami teknik desain grafis menggunakan Adobe Illustrator. Fokus pada pembuatan desain vektor dan ilustrasi digital untuk berbagai kebutuhan visual."
              imageUrl="/paket2.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Adobe%20Illustrator"
            />

            {/* Paket Pelatihan 15: InDesign */}
            <PaketCard
              title="Adobe InDesign"
              description="Pelatihan untuk desain layout publikasi, seperti brosur, majalah, dan buku menggunakan Adobe InDesign. Pelajari teknik tata letak dan pencetakan."
              imageUrl="/paket3.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Adobe%20InDesign"
            />

            {/* Paket Pelatihan 16: AutoCAD 2D */}
            <PaketCard
              title="AutoCAD 2D"
              description="Pelatihan Autoca 2D ini untuk membuat gambar teknik 2D menggunakan AutoCAD, ideal untuk arsitek dan profesional desain teknik."
              imageUrl="/paket4.jpeg"
              price="Rp 1.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20AutoCAD%202D"
            />

            {/* Paket Pelatihan 17: AutoCAD 3D */}
            <PaketCard
              title="AutoCAD 3D"
              description="Pelatihan untuk menggambar dan mendesain objek tiga dimensi menggunakan AutoCAD, termasuk teknik modeling dan rendering 3D."
              imageUrl="/paket1.jpeg"
              price="Rp 1.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20AutoCAD%203D"
            />

            {/* Paket Pelatihan 18: Dreamweaver */}
            <PaketCard
              title="Dreamweaver"
              description="Pelatihan untuk membuat dan mengelola website menggunakan Adobe Dreamweaver. Fokus pada desain web responsif dan penggunaan HTML/CSS."
              imageUrl="/paket2.jpeg"
              price="Rp 2.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Dreamweaver"
            />

            {/* Paket Pelatihan 19: Web Design */}
            <PaketCard
              title="Web Design"
              description="Pelatihan untuk membuat dan merancang website yang menarik dan responsif, mencakup desain UI/UX dan penggunaan berbagai alat web."
              imageUrl="/paket3.jpeg"
              price="Rp 2.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Web%20Design"
            />

            {/* Paket Pelatihan 20: Flash */}
            <PaketCard
              title="Adobe Flash"
              description="Pelatihan untuk membuat animasi dan aplikasi multimedia menggunakan Adobe Flash. Ideal untuk pengembangan konten interaktif dan animasi."
              imageUrl="/paket4.jpeg"
              price="Rp 2.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Adobe%20Flash"
            />

            {/* Paket Pelatihan 21: ERP */}
            <PaketCard
              title="ERP (Enterprise Resource Planning)"
              description="Pelatihan ERP ini mengajarkan konsep dan implementasi sistem ERP. Anda akan belajar bagaimana ERP dapat mengintegrasikan berbagai proses bisnis."
              imageUrl="/paket1.jpeg"
              price="Rp 2.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20ERP"
            />

            {/* Paket Pelatihan 22: Visual Basic .NET */}
            <PaketCard
              title="Visual Basic .NET"
              description="Mempelajari pengembangan aplikasi desktop, cara membuat aplikasi menggunakan antarmuka grafis dan koneksi database. Fokus kami adalah pada penggunaan .NET Framework untuk pengembangan aplikasi."
              imageUrl="/paket2.jpeg"
              price="Rp 2.600.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Visual%20Basic%20.NET"
            />

            {/* Paket Pelatihan 23: Power Pivot */}
            <PaketCard
              title="Power Pivot"
              description="Pelatihan Power Pivot ini bertujuan untuk menganalisis data menggunakan Power Pivot. Pelajari cara membuat model data yang kompleks dan menganalisisnya dengan fitur analitik canggih."
              imageUrl="/paket3.jpeg"
              price="Rp 1.500.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Power%20Pivot"
            />

            {/* Paket Pelatihan 24: Power Query/BI */}
            <PaketCard
              title="Power Query/BI"
              description="Pelatihan untuk menganalisis data menggunakan Power Query dan membuat visualisasi menggunakan Power BI. Pelajari cara mengimpor, mengubah, dan menyajikan data untuk keputusan berbasis data."
              imageUrl="/paket4.jpeg"
              price="Rp 2.000.000"
              duration="10 x 1.5 jam"
              link="https://wa.me/6281316907115?text=Saya%20tertarik%20dengan%20Paket%20Power%20Query%20dan%20Power%20BI"
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

export default PaketSatuan;
