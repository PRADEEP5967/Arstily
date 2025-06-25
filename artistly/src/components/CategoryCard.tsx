import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image: string;
  description: string;
  onClick?: () => void;
}

// Minimal, compact, "antimicrobial" (clean, simple, less surface) design
const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, description, onClick }) => (
  <button
    className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center hover:shadow-md transition focus:ring-2 focus:ring-blue-300"
    onClick={onClick}
    aria-label={`Filter by ${name}`}
    type="button"
  >
    <Image src={image} alt={name} width={40} height={40} className="w-10 h-10 mb-2" />
    <span className="font-semibold text-blue-700 text-base">{name}</span>
    <span className="text-gray-500 text-xs mt-1">{description}</span>
  </button>
);

export default CategoryCard;