import { login } from "../api/auth/login.mjs";

/**
 * Listens for a submit event from form button and calls the login function from auth/login.mjs file. Login data is sent to the API.
 */

export function setFormLoginListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await login(profile);

        alert("Login successful! One moment please...");

        window.location.href = "../../listings/";
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    });
  }
}
