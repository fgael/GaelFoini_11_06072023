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

export const fetchAccommodationById = async (id) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const accommodation = data.find((item) => item.id === id);
    return accommodation;
  } catch (error) {
    console.error("Error fetching accommodation data:", error);
    throw error;
  }
};
