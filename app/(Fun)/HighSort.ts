import { CardsProps } from "@/types/cardsTypes";

export function highSort(arr: CardsProps[]) {
  arr.forEach((item) => {
    let amountArr = item.amount.split(",");
    let newAmount;
    if (amountArr.length === 2) {
      console.log("🚀 ~ arr.forEach ~ amountArr:", amountArr);
      // Concatenate elements of amountArr into one string
      newAmount = amountArr.join("");
      console.log("🚀 ~ arr.forEach ~ newAmount:", newAmount);
      // Update the amount property of the current item in arr
      item.amount = newAmount;
    }
  });
  // Use the sort() method to sort the array in place
  arr.sort((a, b) => parseInt(b.amount) - parseInt(a.amount));
  // arr.map((a) => a.amount.toString())
  // Return the sorted array
  return arr;
}
