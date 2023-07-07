const API_URL = process.env.PUBLIC_URL + "/accommodationListings.json";

export const fetchAccommodationListings = async () => {
  try {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
