import React from "react";

interface FilterBlockProps {
  category: string;
  setCategory: (v: string) => void;
  categories: string[];
  location: string;
  setLocation: (v: string) => void;
  locations: string[];
  priceRange: string;
  setPriceRange: (v: string) => void;
  priceRanges: string[];
}

const FilterBlock: React.FC<FilterBlockProps> = ({
  category,
  setCategory,
  categories,
  location,
  setLocation,
  locations,
  priceRange,
  setPriceRange,
  priceRanges,
}) => (
  <div className="flex flex-wrap gap-4 mb-8">
    <select value={category} onChange={e => setCategory(e.target.value)} className="border rounded px-3 py-2">
      {categories.map(c => <option key={c} value={c}>{c}</option>)}
    </select>
    <select value={location} onChange={e => setLocation(e.target.value)} className="border rounded px-3 py-2">
      {locations.map(l => <option key={l} value={l}>{l}</option>)}
    </select>
    <select value={priceRange} onChange={e => setPriceRange(e.target.value)} className="border rounded px-3 py-2">
      {priceRanges.map(p => <option key={p} value={p}>{p}</option>)}
    </select>
  </div>
);

export default FilterBlock; 