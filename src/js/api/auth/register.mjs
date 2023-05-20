import { API_AUCTION_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

/**
 * This export function is sending the object data from the registration form to the register URL/API.
 * @param {object} profile Object data from registration form.
 * @returns {object} The response from the register API.
 */

export async function register(profile) {
  const registerURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (!response.ok) {
    throw new Error("The account registration failed");
  }

  const result = await response.json();

  return result;
}
