const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">&copy; MutiaraKomputerDepok.</p>
        <div className="flex justify-center space-x-6">
          <a href="/home" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/tentang" className="text-white hover:text-gray-300">
            Tentang
          </a>
          <a href="/pelatihan" className="text-white hover:text-gray-300">
            Pelatihan
          </a>
          <a href="kontak" className="text-white hover:text-gray-300">
            Kontak
          </a>
        </div>
        <div className="mt-4">
          <p className="text-sm">Follow us: @mutikom</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
