import { listingsTemplateA } from "../templates/listing.mjs";

const listingsContainer = document.querySelector("#listings");

/**
 * This export search function filters an array of listings by first listening for a submit event, and then returns listings based on filter criteria set. The user can search based on title, name, and listing description.
 * @param {Array} listings An array of objects(listings).
 * @returns {void} Updates the DOM to display filtered listings or an error message if no listings match the search criteria.
 */

export function setupSearch(listings) {
  const searchForm = document.querySelector("form#search");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const searchTerm = form.term.value;
    const term = searchTerm.toLowerCase();

    const filteredListings = listings.filter((listing) => {
      const title = listing.title.toLowerCase();
      const description = listing.description
        ? listing.description.toLowerCase()
        : "";
      const name = listing.seller.name.toLowerCase();

      return (
        title.includes(term) ||
        description.includes(term) ||
        name.includes(term)
      );
    });

    if (filteredListings.length > 0) {
      renderListingSearchTemplate(filteredListings, listingsContainer);
    } else {
      listingsContainer.innerHTML = `<div class="text-center text-white error-styling mt-5 mb-5">
          <p class="">Sorry! Unfortunately, no listings are matching the search term</p>
        </div>`;
    }
  });
}

/**
 * This function renders the filtered listing/search results as HTML.
 * @param {Array} filteredListings An array of filtered objects (listings).
 * @param {*} listingsContainer An empty div container.
 */

function renderListingSearchTemplate(filteredListings, listingsContainer) {
  listingsContainer.innerHTML = "";

  listingsContainer.append(...filteredListings.map(listingsTemplateA));
}
