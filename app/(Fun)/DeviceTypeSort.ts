import { CardsProps } from "@/types/cardsTypes";

export function DeviceTypeSort(arr: CardsProps[], filterKind: string) {
  const newArr = arr.map((item) => ({ ...item }));

  // Sort the array
  newArr.sort((a, b) => {
    // If the campaign_os_target of a contains the filterKind but not b, place a before b
    if (
      a.campaign_os_target.includes(filterKind) &&
      !b.campaign_os_target.includes(filterKind)
    ) {
      return -1;
    }
    // If the campaign_os_target of b contains the filterKind but not a, place b before a
    else if (
      !a.campaign_os_target.includes(filterKind) &&
      b.campaign_os_target.includes(filterKind)
    ) {
      return 1;
    }
    // Otherwise, keep the order unchanged
    else {
      return 0;
    }
  });

  // Return the sorted array
  return newArr;
}
