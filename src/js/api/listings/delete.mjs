import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/listings";
const method = "delete";

/**
 * This export function deletes a users own listings and throws an error if a number ID is missing. It checks if the URL contains an ID parameter, throwing an error if a number ID is missing. If present, the ID is used to send a DELETE request (with token in header) to the API, deleting the listing.
 * @param {number} id A users number ID.
 * @returns Returns JWT.
 */

export async function removeListing(id = 0) {
  if (!id) {
    throw new Error("Listing id is required when deleting a listing");
  }
  const updateListingURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await fetchWithToken(updateListingURL, {
    method,
  });

  return await response.json();
}
