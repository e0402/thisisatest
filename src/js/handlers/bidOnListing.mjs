import { bidOnListing } from "../api/listings/bid.mjs";

export function setBidOnListingFormListener() {
  const bidForm = document.querySelector("#bidOnListing");
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const bidId = params.get("id");

  if (bidForm) {
    bidForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      try {
        const bid = event.target.amount.value;

        await bidOnListing(bidId, Number(bid));

        alert("Your bid was successfully submitted!");
      } catch (error) {
        alert("Your bid failed to be submitted: " + error.message);
      }
    });
  }
}
