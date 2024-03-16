import { CardsProps } from "@/types/cardsTypes";

export function searchFilterFunction(arr: CardsProps[], searchValue: string) {
  const newArr = arr.map((item) => ({ ...item }));
  const searchTerm = searchValue.toLowerCase();

  // Filter the array based on the name property containing the search term
  const filteredArr = newArr.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return filteredArr;
}
