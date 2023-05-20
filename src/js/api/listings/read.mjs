import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/listings";

/**
 * This export function enables a logged in user to retrieve all listings created by other users or themselves from the API by sending a GET request (with token in header).
 * @returns Returns JWT.
 */
export async function getListings() {
  const updateListingURL = `${API_AUCTION_URL}${action}?_seller=true&_bids=true&sort=created&sortOrder=desc`;

  const response = await fetchWithToken(updateListingURL);

  return await response.json();
}

/**
 * This export function enables a logged in user to retreive a single listing. It checks if the URL contains an ID parameter, throwing an error if a number ID is missing. If present, the ID is used to send a GET request (with token in header) to the API, retreiving the listing.
 * @param {number} id A users number ID.
 * @returns Returns JWT.
 */

export async function getListing(id) {
  if (!id) {
    throw new Error("Listing id is required for getting listing");
  }
  const getListingURL = `${API_AUCTION_URL}${action}/${id}?_seller=true&_bids=true`;

  const response = await fetchWithToken(getListingURL);

  return await response.json();
}
