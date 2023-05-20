export function listingsTemplateB(listingData) {
  const listingsHomePage = document.createElement("div");

  listingsHomePage.innerHTML = `
    <section class="container d-flex align-items-center justify-content-center mb-5" style="margin-top: 100px">
      <div class="card grid-card" style="width: 42rem; cursor: pointer;" data-listing-id="${
        listingData.id
      }">
        <div class="card-body">
          <div class="d-flex mb-3 image-link-styling">
            <span class="profile-link" data-profile-name="${
              listingData.seller.name
            }">
              <img src="${
                listingData.seller.avatar
              }" class="border rounded-circle me-2" alt="N/A" style="height: 40px; width: 40px" />
            </span>
            <div class="seller-margin-top">
              <span class="profile-link text-dark mb-0" data-profile-name="${
                listingData.seller.name
              }">
                <strong>${listingData.seller.name}</strong>
              </span>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center mb-3">
            <div class="text-center">
            <h3 class="mt-3 overflow-title">${listingData.title}</h3>
            </div>
          </div>
          <div class="mx-3">
            <p class="overflow-description">
              ${
                listingData.description
                  ? listingData.description
                  : "Description not included"
              }
            </p>
          </div>
        </div>
        <div class="bg-image hover-overlay ripple rounded-0 image-container" data-mdb-ripple-color="light">
          <img src="${listingData.media}" alt="${
    listingData.description
  }" class="w-100 mb-4" onerror="this.onerror=null;this.src='../media/rolex-login.jpg'; this.alt='Image not found';"/>
          <span class="image-alt visually-hidden">Image not available</span>
              <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              <div class="d-flex justify-content-center">
                <p class="mx-4" style="font-size: 0.68em;">
                  <strong>Created:</strong> ${new Date(
                    listingData.created
                  ).toLocaleString()}
                </p>
                <p class="mx-3" style="font-size: 0.68em;">
                  <strong>Ends at:</strong> ${new Date(
                    listingData.endsAt
                  ).toLocaleString()}
                </p>
              </div>
              <div class="mx-4 mt-3">
                <ul class="list-unstyled d-flex justify-content-between mb-0">
                  <li><i class="fa-solid fa-gavel fa-2x me-0 mb-5" style="color: #000"></i><span class="small ps-2">Bids: ${
                    listingData._count.bids
                  }</span></i></li>
                <li style="margin-top: 0px">
                <a href="../profile/login/" class="btn btn-success">Log in to bid</a>
                </form></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  </section>
    `;

  const card = listingsHomePage.querySelector(".card.grid-card");

  card.addEventListener("click", () => {
    window.location.href = "../profile/login/";
  });

  return listingsHomePage;
}

/**
 * Export template function for rendering all listings as HTML using .map.
 * @param {Array} listingDataList Function parameter indicating list of listings.
 * @param {object} parent Function parameter.
 */

export function renderListingsTemplateHomePage(listingDataList, parent) {
  parent.append(...listingDataList.map(listingsTemplateB));
}
