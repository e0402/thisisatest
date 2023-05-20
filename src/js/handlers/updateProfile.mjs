import { getProfile, updateProfile } from "../api/profiles/index.mjs";

import { load } from "../storage/index.mjs";

/**
 * This export function listens for a form and if present is then "hydrated" with info from account registration earlier. Only avatar can currently be updated. The function then listens for a submit event from form button and PUT request from profile/update.mjs is completed.
 */

export async function setUpdateProfileListener() {
  const form = document.querySelector("#editProfile");
  const setAvatar = document.querySelector("#avatar");
  const firstName = document.querySelector("#firstName");
  const listingCount = document.querySelector("#listingCount");
  const creditsCount = document.querySelector("#creditsCount");
  const winsCount = document.querySelector("#winsCount");

  if (form) {
    const { name, email } = load("profile");
    form.name.value = name;
    form.email.value = email;

    const button = form.querySelector("button");
    button.disabled = true;

    const profile = await getProfile(name);

    form.avatar.value = profile.avatar;

    setAvatar.innerHTML = `<img src="${profile.avatar}"
    class="img-fluid img-thumbnail rounded-circle mb-2"
    style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"></img>`;

    firstName.innerHTML = `${profile.name}`;
    listingCount.innerHTML = `${profile._count.listings}`;
    creditsCount.innerHTML = `${profile.credits}`;
    winsCount.innerHTML = `${profile.wins.length}`;

    button.disabled = false;

    localStorage.setItem("credits", creditsCount.innerHTML);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      profile.name = name;
      profile.email = email;

      updateProfile(profile);
      alert("Profile successfully updated!");
    });
  }
}
