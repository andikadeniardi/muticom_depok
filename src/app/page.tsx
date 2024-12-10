// pages/index.tsx

import Navbar from "../../components/molecules/Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Welcome to My Website
        </h1>
        <p className="text-lg text-center text-blue-100 mt-4">
          This is the content of the page. Tailwind CSS should be applied
          correctly.
        </p>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2024 My Website</p>
      </footer>
    </div>
  );
};

export default Home;
