type PaketCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  price?: string; // Membuat price opsional
  duration?: string; // Add duration here as a required field
};

const PaketCard: React.FC<PaketCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  price,
  duration, // Add duration to destructure
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {price && (
        <p className="text-lg text-blue-600 font-semibold mb-4">{price}</p>
      )}
      <p className="text-gray-600 mb-4">Durasi: {duration}</p>{" "}
      {/* Display duration */}
      <div className="flex justify-center">
        <a
          href={link}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Ikuti Paket Pelatihan
        </a>
      </div>
    </div>
  );
};

export default PaketCard;
