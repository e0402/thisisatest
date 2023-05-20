import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/listings";
const method = "post";

/**
 * This export function enables a logged in user to create a new listing by sending a POST request (with token in header) to the API with object data from the create listing form.
 * @param {object} listingData Object data from create listing form.
 * @returns Returns JWT.
 */

export async function createListing(listingData) {
  const createListingURL = API_AUCTION_URL + action;

  const tags = listingData.tags.split(",").map((tag) => tag.trim());
  const mediaLinks = listingData.media.split(",").map((link) => link.trim());

  const response = await fetchWithToken(createListingURL, {
    method,
    body: JSON.stringify({
      title: listingData.title,
      description: listingData.description,
      media: mediaLinks,
      endsAt: listingData.endsAt,
      tags: tags,
    }),
  });

  return await response.json();
}
