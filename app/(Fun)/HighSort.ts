import { CardsProps } from "@/types/cardsTypes";

export function highSort(arr: CardsProps[]) {
  // Clone the original array
  const newArr = arr.map((item) => ({ ...item }));

  newArr.forEach((item) => {
    let amountArr = item.amount.split(",");
    let newAmount;
    if (amountArr.length === 2) {
      // Concatenate elements of amountArr into one string
      newAmount = amountArr.join("");
      // Update the amount property of the current item in newArr
      item.amount = newAmount;
    }
  });

  // Sort the cloned array
  newArr.sort((a, b) => parseInt(b.amount) - parseInt(a.amount));

  // Return the sorted array
  return newArr;
}
