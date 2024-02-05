export type Location_Type = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
};

export type Current_Type = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  daily_chance_of_rain: number;
  time: string;
};

export type Data_Type = {
  location: Location_Type;
  current: Current_Type;
};

export type Weekly_Data_Type = {
  date: string;
  day: Current_Type;
};

export type PressureUnit = "mbar" | "mmHg" | "inHg" | "atm" | "hPa";
export type TemperatureUnit = "Celsius" | "Fahrenheit";
export type WindSpeedUnit = "km/h" | "m/s" | "mi/h" | "ft/s" | "kn";
export type Settings_Type = {
  pressureUnit: PressureUnit;
  temperatureUnit: TemperatureUnit;
  windSpeedUnit: WindSpeedUnit;
};

export type Search_Item_Type = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};
