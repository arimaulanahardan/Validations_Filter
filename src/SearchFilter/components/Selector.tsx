import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import useFetchCountries from "../hooks/useFetchCountries";
import { createRegex } from "../utils/RegexUtils";
import { ICountryRequest } from "../interfaces/CountryRequest";

const Selector: React.FC = () => {
  const countries = useFetchCountries();
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredCountries, setFilteredCountries] =
    useState<ICountryRequest[]>();
  const [originalCountries, setOriginalCountries] =
    useState<ICountryRequest[]>();
  const [countryNotFound, setCountryNotFound] = useState(false);

  const selectorRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (countries) {
      setFilteredCountries(countries);
      setOriginalCountries(countries);
    }
  }, [countries]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectorRef.current &&
      !selectorRef.current.contains(event.target as Node) &&
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput = e.target.value;
    setInputValue(searchInput);

    if (countries) {
      const regex = createRegex(searchInput);
      const filtered = countries.filter((country) =>
        regex.test(country.name.common)
      );

      setFilteredCountries(filtered);
      setCountryNotFound(filtered.length === 0);
    }
  };

  const handleCountrySelect = (countryName: string) => {
    setSelected(countryName);
    setOpen(false);
    setInputValue("");
  };

  return (
    <div className="w-96 font-medium" ref={selectorRef}>
      <h1 className="mb-2 text-center text-white text-2xl">
        Name Countries
      </h1>
      <div
        onClick={() => setOpen(!open)}
        className={`cursor-pointer hover:bg-gray-200 bg-white w-full p-2 flex items-center justify-between rounded ${
          !selected && "text-gray-400"
        }`}
      >
        {selected
          ? selected.length > 25
            ? selected.substring(0, 25) + "..."
            : selected
          : "Select Country"}
        <BiChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            open && "rotate-180"
          }`}
        />
      </div>
      {open && (
        <div className="mt-2 bg-white overflow-y-auto max-h-60 rounded border border-gray-300">
          <div className="relative" ref={searchInputRef}>
            <AiOutlineSearch
              className="absolute top-3 left-3 text-gray-600 pointer-events-none"
              size={18}
            />
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 pl-8 pr-2 rounded focus:outline-none shadow-lg focus:border-blue-300"
              placeholder="Search country..."
            />
          </div>
          {countryNotFound && (
            <p className="p-2 text-sm text-red-500 text-center italic">Country Not Found</p>
          )}
          <ul>
            {(inputValue ? filteredCountries : originalCountries)
              ?.sort((a, b) => a.name.common.localeCompare(b.name.common))
              ?.map((country) => (
                <li
                  key={country?.name.common}
                  className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                  ${
                    country?.name.common?.toLowerCase() ===
                      selected?.toLowerCase() && "bg-sky-600 text-white"
                  }`}
                  onClick={() => {
                    if (
                      country?.name.common?.toLowerCase() !==
                      selected.toLowerCase()
                    ) {
                      handleCountrySelect(country?.name.common);
                    }
                  }}
                >
                  {country?.name.common}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Selector;
