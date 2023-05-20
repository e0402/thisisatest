import { removeListing } from "../api/listings/index.mjs";

/**
 * This export function is an HTML listings template with dynamic values inserted to retrieve all listings info from each listing author. The function also listens for a click event from whole card, profile link or delete button. If delete button is clicked, page reloads, before returning listings.
 *
 * @param {object} listingData Function parameter.
 * @returns Listings is returned.
 */

export function listingsTemplateA(listingData) {
  const listings = document.createElement("div");
  const name = JSON.parse(localStorage.getItem("profile")).name;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("d-flex", "justify-content-end", "mt-2");

  if (listingData.seller.name === name) {
    buttonsContainer.innerHTML = `
      <button class="btn me-1 delete-button btn-delete" data-id="${listingData.id}"><i class="fa-regular fa-trash-can"></i></button>
      <a href="../listing/edit/?id=${listingData.id}" class="btn btn-edit me-1"><i class="fa-regular fa-pen-to-square"></i></a>
    `;
  }

  listings.innerHTML = `
    <section class="container d-flex align-items-center justify-content-center mb-5" style="margin-top: 100px">
      <div class="card grid-card" style="width: 42rem; cursor: pointer;" data-listing-id="${
        listingData.id
      }">
      <div class="card-body">
      <div class="d-flex image-link-styling">
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
    
      <div class="card-actions">
        ${buttonsContainer.outerHTML}
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
  </div>
    <div class="mx-4 mt-3">
      <ul class="list-unstyled d-flex justify-content-between mb-0">
        <li><i class="fa-solid fa-gavel fa-2x me-0 mb-5" style="color: #000"></i><span class="small ps-2">Bids: ${
          listingData._count.bids
        }</span></li>
        <li style="margin-top: 0px">
          <a href="../listing/bid/?id=${
            listingData.id
          }" class="btn btn-success">View listing</a>
        </li>
      </ul>
   </div>
  </div>
</div>
</div>
</section>
  `;

  // Add event listeners for profile links and card click
  listings.querySelectorAll(".profile-link").forEach((profileLink) => {
    profileLink.addEventListener("click", (event) => {
      event.stopPropagation(); // Stop event propagation
      const profileName = event.currentTarget.getAttribute("data-profile-name");
      window.location.href = `../profile/?name=${profileName}`;
    });
  });

  listings
    .querySelector(".card.grid-card")
    .addEventListener("click", (event) => {
      const listingId = event.currentTarget.getAttribute("data-listing-id");
      window.location.href = `../listing/bid/?id=${listingId}`;
    });

  //Delete button add event listener
  const deleteButton = listings.getElementsByClassName("delete-button")[0];
  if (deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      removeListing(listingData.id);

      setTimeout(() => {
        location.reload();
      }, 200);
    });
  }

  return listings;
}

/**
 * Export template function for rendering all listings as HTML using .map.
 * @param {Array} listingDataList Function parameter indicating list of listings.
 * @param {object} parent Function parameter.
 */

export function renderListingsTemplate(listingDataList, parent) {
  parent.append(...listingDataList.map(listingsTemplateA));
}

/**
 * Export template function for rendering single listing as HTML using .map.
 * @param {object} listingData Function parameter indicating single listing.
 * @param {object} parent Function parameter.
 */

export function renderListingTemplate(listingData, parent) {
  parent.append(listingsTemplateA(listingData));
}
