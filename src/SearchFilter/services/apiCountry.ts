import { ICountryRequest } from "../interfaces/CountryRequest";

export const fetchCountries = async (): Promise<ICountryRequest[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name');
  const data = await response.json();
  return data;
};

