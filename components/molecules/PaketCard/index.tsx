type PaketCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  price?: string; // Membuat price opsional
};

const PaketCard: React.FC<PaketCardProps> = ({
  title,
  description,
  imageUrl,
  link,
  price,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {price && (
        <p className="text-lg text-blue-600 font-semibold mt-4">{price}</p> // Menampilkan harga jika ada
      )}
      <div className="flex justify-center mt-4">
        <a
          href={link}
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Pelajari lebih lanjut
        </a>
      </div>
    </div>
  );
};

export default PaketCard;
