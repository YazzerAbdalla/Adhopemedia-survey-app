export const detectDeviceType = (userAgent: string) => {
  if (userAgent.match(/iPad|iPhone|iPod/i)) {
    return "iOS";
  } else if (userAgent.match(/Android/i)) {
    return "Android";
  } else if (userAgent.match(/Macintosh|Windows|Linux/i)) {
    return "Web";
  } else {
    return "Unknown";
  }
};
