import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/listings";
const method = "put";

/**
 * This export function enables a logged in user to update a listing created by themselves. It checks if the URL contains an ID parameter, throwing an error if a number ID is missing. If present, the ID is used to send a PUT request (with token in header) to the API, updating the listing.
 * @param {object} listingData
 * @returns Returns JWT.
 */

export async function updateListing(listingData) {
  if (!listingData.id) {
    throw new Error("Listing id is required when updating a listing");
  }
  const updateListingURL = `${API_AUCTION_URL}${action}/${listingData.id}`;

  const tagsArray = listingData.tags.split(",");

  const response = await fetchWithToken(updateListingURL, {
    method,
    body: JSON.stringify({
      title: listingData.title,
      description: listingData.description,
      media: listingData.media,
      tags: tagsArray,
    }),
  });

  return await response.json();
}
