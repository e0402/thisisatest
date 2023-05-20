import { load } from "../storage/index.mjs";

/**
 * This export function is getting the freshest value for the token and returns the correct header thats used for API requests.
 * @returns Returns header.
 */

export function headers() {
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

/**
 * This export function returns fetch and is setting the headers.
 * @param {string} url API method URL
 * @param {object} options Optional parameter for modifying request. In this case "spreading" the body.
 * @returns Returns fetch.
 */
export async function fetchWithToken(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: headers(),
  });
}
