import { useEffect, useState } from "react";
import { fetchCountries } from "../services/apiCountry";
import { ICountryRequest } from "../interfaces/CountryRequest";

const useFetchCountries = (): ICountryRequest[] => {
  const [countries, setCountries] = useState<ICountryRequest[]>([]);

  useEffect(() => {
    fetchCountries().then((data) => {
      setCountries(data);
    });
  }, []);
  return countries;
};

export default useFetchCountries;
