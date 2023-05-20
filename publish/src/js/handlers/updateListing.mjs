import { getListing, updateListing } from "../api/listings/index.mjs";

/**
 * This export function listens for a form and if present is then "hydrated" with info from listing being created earlier. Like the create listing form - title, description, tags and media can be updated. The function then listens for a submit event from form button and PUT request from listings/update.mjs is completed.
 */

export async function setUpdateListingListener() {
  const form = document.querySelector("#editListing");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const listing = await getListing(id);

    form.title.value = listing.title;
    form.description.value = listing.description;
    form.tags.value = listing.tags;
    form.media.value = listing.media;

    button.disabled = false;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());
      listingData.id = id;

      try {
        await updateListing(listingData);
        alert("Your listing has been successfully updated!");
        window.location.href = `../../listings/`;
      } catch (error) {
        alert("Failed to update listing: " + error.message);
      }
    });
  }
}
