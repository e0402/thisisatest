import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/listings";
const method = "post";

/**
 * This export function enables a logged in user to create a new listing by sending a POST request (with token in header) to the API with object data from the create listing form.
 * @param {object} listingData Object data from create listing form.
 * @returns Returns JWT.
 */

export async function bidOnListing(id, amount) {
  const bidOnListingURL = `${API_AUCTION_URL}${action}/${id}/bids?_bids=true`;

  const response = await fetchWithToken(bidOnListingURL, {
    method,
    body: JSON.stringify({ amount: amount }),
  });

  if (response.ok) {
    setTimeout(function () {
      location.reload();
    }, 250);
    return true;
  } else {
    alert(response.error);
  }
}
