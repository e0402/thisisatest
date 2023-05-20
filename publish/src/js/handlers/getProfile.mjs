import * as profileTemplate from "../templates/profile.mjs";
import * as profileMethods from "../api/profiles/index.mjs";

const url = new URL(location.href);
const name = url.searchParams.get("name");

/**
 * This export function renders individual profiles with "name" as parameter using profiletemplate from templates/profile.mjs.
 */

export async function readProfile() {
  const profile = await profileMethods.getProfile(name);
  const profileContainer = document.querySelector("#profileContainer");

  profileTemplate.renderProfileTemplate(profile, profileContainer);
}
