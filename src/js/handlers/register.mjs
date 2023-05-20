import { register } from "../api/auth/register.mjs";

/**
 * Listening for a submit event from form button and calls the register function from auth/register.mjs file. Registration data is sent to the API.
 */

export function setFormRegistrationListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await register(profile);
        alert("Account registration was successful!");
        window.location.href = "../login/";
      } catch (error) {
        alert("Account registration failed: " + error.message);
      }
    });
  }
}
