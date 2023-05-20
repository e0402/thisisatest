import { API_AUCTION_URL } from "../constants.mjs";
import { fetchWithToken } from "../fetchWithToken.mjs";

const action = "/profiles";
const method = "put";

/**
 * This export function enables a logged in user to update their own profile. It checks if the URL contains a name parameter, throwing an error if a name is missing. If present, the name is used to send a PUT request (with token in header) to the API, updating the profile.
 * @param {object} profileData
 * @returns Returns JWT.
 */

export async function updateProfile(profileData) {
  console.log(profileData);

  if (!profileData.name) {
    throw new Error("Name is required when updating a post");
  }
  const updateProfileURL = `${API_AUCTION_URL}${action}/${profileData.name}/media`;

  const response = await fetchWithToken(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  window.location.replace("/profile/edit/");

  return await response.json();
}
