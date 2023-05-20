//Logout
document.addEventListener("DOMContentLoaded", function () {
  function logout(event) {
    event.preventDefault();

    localStorage.removeItem("token");
    localStorage.removeItem("profile");
    localStorage.removeItem("credits");

    const href = event.target.getAttribute("href");
    if (href) {
      window.location.href = href;
    }
  }

  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", logout);
  }
});
