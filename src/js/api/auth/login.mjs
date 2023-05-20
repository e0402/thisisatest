import { API_AUCTION_URL } from "../constants.mjs";
import * as storage from "../../storage/index.mjs";

const action = "/auth/login";
const method = "post";

/**
 * This export function is logging in an already registered account by fetching and sending the object with info to the login URL. Then the user info(name/email) and access token is stored seperately in local storage.
 * @param {object} profile Object data from logging form.
 * @throws {Error} Throws an error if the login attempt was unsuccessful.
 */

export async function login(profile) {
  const loginURL = API_AUCTION_URL + action;
  const body = JSON.stringify(profile);
  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  if (!response.ok) {
    throw new Error("The user info provided is not yet registered.");
  }

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
}
