export interface CityListItemType {
  id: number;
  name: string;
  state?: string;
  slug?: string;
  country: string;
  coord: { lon: number; lat: number };
}
export type CitiesList = CityListItemType[];
