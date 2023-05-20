import { createListing } from "../api/listings/index.mjs";

export function setCreateListingFormListener() {
  const form = document.querySelector("#createListing");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const listingData = {
        title: formData.get("title"),
        description: formData.get("description"),
        media: formData.get("media"),
        endsAt: formData.get("endsAt"),
        tags: formData.get("tags"),
        seller: JSON.parse(localStorage.getItem("profile")).name,
      };

      try {
        await createListing(listingData);
        alert("Your listing was created successfully!");
        window.location.href = "../../listings/";
      } catch (error) {
        alert("Your listing failed to be created: " + error.message);
      }
    });
  }
}
