import * as listeners from "./handlers/index.mjs";
import { slider } from "./slider/slider.mjs";
import { setupValidation } from "./validation/formValidation.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/login/":
    setupValidation();
    listeners.setFormLoginListener();
    break;
  case "/profile/register/":
    setupValidation();
    listeners.setFormRegistrationListener();
    break;
  case "/listing/create/":
    listeners.setCreateListingFormListener();
    break;
  case "/listing/edit/":
    listeners.setUpdateListingListener();
    break;
  case "/profile/edit/":
    listeners.setUpdateProfileListener();
    break;
  case "/listings/":
    slider();
    listeners.readListings();
    break;
  case "/listing/":
    listeners.readListing();
    break;
  case "/listing/bid/":
    listeners.readBidOnListing();
    listeners.setUpdateProfileListener();
    listeners.setBidOnListingFormListener();
    break;
  case "/profile/":
    listeners.readProfile();
    break;
  case "/index.html":
    slider();
    listeners.readListingsHomePage();
    break;
}
