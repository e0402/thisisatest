export function bidOnListingTemplate(listingData) {
  const listings = document.createElement("div");

  listings.innerHTML = `
    <div id="allBidsContainer"></div>
    <div class="text-center mt-5">
      <h2 style="font-size: 3em; margin: 70px 0 30px 0;">${
        listingData.title
      }</h2>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <p class="mx-4" style="font-size: 1em;">
        <strong>Created:</strong> ${new Date(
          listingData.created
        ).toLocaleString()}
      </p>
      <p class="mx-3" style="font-size: 1em;">
        <strong>Ends at:</strong> ${new Date(
          listingData.endsAt
        ).toLocaleString()}
      </p>
    </div>
    <section class="container d-flex align-items-center justify-content-center mb-5" style="margin-top: 30px">
      <div class="card" style="width: 100%;">
        <div class="row">
          <div class="col-md-8">
            <div class="card-body">
              <!-- Data -->
              <div>
                <div>
                </div>
                <div class="d-flex mb-3">
                  <a href="">
                    <img src="${
                      listingData.seller.avatar
                    }" class="border rounded-circle me-2" alt="N/A" style="height: 40px; width: 40px" />
                  </a>
                  <div>
                    <a href="" class="text-dark mb-0">
                      <a href="../profile/?name=${
                        listingData.seller.name
                      }"><strong>${listingData.seller.name}</strong></a>
                    </a>
                    <a href="" class="text-muted d-block" style="margin-top: -6px"></a>
                  </div>
                </div>
              </div>
              <!-- Description -->
              <div>
              <p class="overflow-description">
              ${
                listingData.description
                  ? listingData.description
                  : "Description not included"
              }
            </p>
              </div>
            </div>
          </div>
          <div class="col-md-5" style="width: 100%">
            <!-- Media -->
            <div class="bg-image hover-overlay ripple rounded-0" data-mdb-ripple-color="light">
              <img src="${listingData.media}" alt="${
    listingData.description
  }" class="w-100 mb-4" onerror="this.onerror=null;this.src='../media/rolex-login.jpg'; this.alt='No image';"/>
                  <span class="image-alt visually-hidden">Image not available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  //List of all bids
  if (listingData.bids.length > 0) {
    const bidsContainer = document.querySelector("#allBidsOnListing");
    bidsContainer.classList.add("text-center");
    bidsContainer.style.backgroundColor = "#f8f9fa";
    bidsContainer.style.padding = "25px 25px";
    bidsContainer.style.marginBottom = "30px";
    bidsContainer.innerHTML = `<h3 class="mb-3"><strong>Bids:</strong> ${listingData._count.bids}</h3>`;
    listingData.bids.forEach((bid) => {
      const bidText = document.createElement("p");
      bidText.innerHTML = `<strong>Bidder:</strong> ${bid.bidderName}<br><strong>Amount:</strong> ${bid.amount} credits`;
      bidsContainer.append(bidText);
    });
    listings.append(bidsContainer);
  }

  return listings;
}

/**
 * Export template function for rendering single listing as HTML using .map.
 * @param {object} listingData Function parameter indicating single listing.
 * @param {object} parent Function parameter.
 */

export function renderBidOnListingTemplate(listingData, parent) {
  parent.append(bidOnListingTemplate(listingData));
}
