/**
 * This export function is an HTML profile template with dynamic values inserted to retrieve individual profile info from each user. The function then returns profile.
 * @param {object} profileData Function parameter.
 * @returns Listings is returned.
 */

export function profileTemplateA(profileData) {
  const profile = document.createElement("div");
  profile.innerHTML += `<section class="h-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-md-12 col-lg-7 card-container">
        <div class="card">
          <div class="rounded-top text-white d-flex flex-column align-items-center green" style="height: 280px">
            <img src="${profileData.avatar}" class="img-fluid img-thumbnail rounded-circle mb-3 mt-5" style="width: 150px; height: 150px; object-fit: cover;"></img>
            <h5 class="text-black text-center">${profileData.name}</h5>
          </div>
          <div class="p-4 text-black" style="background-color: #f8f9fa">
            <div class="d-flex justify-content-center text-center py-1">
              <div>
                <p class="mb-1 h5">${profileData._count.listings}</p>
                <p class="small text-muted mb-0">Listings</p>
              </div>
              <div class="px-3">
                <p class="mb-1 h5">${profileData.credits}</p>
                <p class="small text-muted mb-0">Credits</p>
              </div>
              <div>
                <p class="mb-1 h5">${profileData.wins.length}</p>
                <p class="small text-muted mb-0">Wins</p>
              </div>
            </div>
          </div>
          <div class="card-body p-4 text-black">
            <div class="mb-5">
            <div class="p-4" style="background-color: #f8f9fa">
                <form>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27">Username:</label>
                    <input type="text" disabled name="name" placeholder="${profileData.name}" class="form-control form-control-lg" />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example27">Email:</label>
                    <input type="email" disabled name="email" placeholder="${profileData.email}" class="form-control form-control-lg" />
                  </div>
                </form>
                  <div class="d-flex justify-content-center align-items-center mt-5">
                    <a
                      href="../../listings/"
                      class="btn btn-two btn-lg btn-outline-success"
                      width=""
                      style="
                        padding: 8px;
                        border-radius: 0.65rem;
                        text-decoration: none;
                      "
                      ;
                      >Back to feed</a
                    >
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;
  return profile;
}

/**
 * Export template function for rendering single profile as HTML using .map.
 * @param {object} profileData Function parameter indicating single profile.
 * @param {object} parent Function parameter.
 */

export function renderProfileTemplate(profileData, parent) {
  parent.append(profileTemplateA(profileData));
}
