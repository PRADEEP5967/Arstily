import React, { useState, useRef, useEffect } from "react";

interface MultiSelectDropdownProps {
  label: string;
  options: string[];
  value: string[];
  onChange: (selected: string[]) => void;
  placeholder?: string;
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({ label, options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <label className="block font-medium mb-1">{label}</label>
      <button
        type="button"
        className="w-full border rounded px-3 py-2 text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {value.length > 0 ? value.join(", ") : (placeholder || "Select...")}
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-48 overflow-auto">
          {options.map((option) => (
            <label key={option} className="flex items-center px-3 py-2 hover:bg-blue-50 cursor-pointer">
              <input
                type="checkbox"
                checked={value.includes(option)}
                onChange={e => {
                  if (e.target.checked) onChange([...value, option]);
                  else onChange(value.filter((v) => v !== option));
                }}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown; 