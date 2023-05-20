import * as templates from "../templates/index.mjs";
import * as listingMethods from "../api/listings/index.mjs";
import { setupSearch } from "../filters/search.mjs";
import { filterListings } from "../filters/filtering.mjs";

/**
 * This export function renders all listings using listingtemplate from templates/listing.mjs. The setupSearch and filterListings functions are also called here.
 */

export async function readListings() {
  const listings = await listingMethods.getListings();
  const listingsContainer = document.querySelector("#listings");

  setupSearch(listings);
  filterListings(listings);

  templates.renderListingsTemplate(listings, listingsContainer);
}
