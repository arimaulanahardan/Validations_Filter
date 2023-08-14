export interface ICountryRequest {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: NativeName;
    };
  }
}

interface NativeName {
  official: string;
  common: string;
}

