import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";

/**
 * This export function enables a logged in user to retrieve all profiles created by other users or themselves from the API by sending a GET request (with token in header).
 * @returns Returns JWT.
 */

export async function getProfiles() {
  const updateProfileURL = `${API_AUCTION_URL}${action}`;

  const response = await fetchWithToken(updateProfileURL);

  return await response.json();
}

/**
 * This export function enables a logged in user to retreive a single profile. It checks if the URL contains a "name" parameter, throwing an error if a name is missing. If present, the name is used to send a GET request (with token in header) to the API, retreiving the profile.
 * @param {string} name A users name.
 * @returns Returns JWT.
 */

export async function getProfile(name) {
  if (!name) {
    throw new Error("Profile name is required for getting Profile");
  }
  const getProfileURL = `${API_AUCTION_URL}${action}/${name}`;

  const response = await fetchWithToken(getProfileURL);

  return await response.json();
}
