function createNavbar(username, level) {
  return `
  <nav class="navbar bg-second p-0">
  <div class="container-fluid h-100 px-0" style="position: relative">
  <div class="nav-left p-0 m-0 h-100 d-flex align-items-center justify-content-left">
  <div class="level p-0 m-0 h-100 flex-grow-1">
        <div
          class="navbar-brand bg-primary d-flex justify-content-left align-items-center"
          href="#"
          style="height: 100%; max-width: 250px"
        >
          <div
            class="current-level d-flex align-items-center justify-content-center mh-100"
          >
            <div
              class="level-square bg-warning d-flex justify-content-center align-items-center"
              style="width: 57px; height: 57px"
            >
              <h6 class="h2 text-dark">
              ${level}
              </h6>
            </div>
            <div>
              <div class="username h4">
                <h3 class="px-2 text-light">
                @${username}
                </h3>
              </div>
              <div id="level-progress"></div>

              
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div class="total-coin-count" style='min-width: 120px'></div>

    </div>
    <div class="nav-right p-0 m-0 h-100 d-flex align-items-center justify-content-between w-25">
    <button class='h1 notifications-dropdown p-0 m-0' style='background: none; border: none'>
    <i class="fa-solid fa-bell"></i>
    </button>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#navbar-offcanvas"
      aria-controls="navbar-offcanvas"
      style="border: none; outline: none"
    >
      <span class="navbar-toggler-icon" style="font-size: 30px"></span>
    </button>
    </div>
    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="navbar-offcanvas"
      aria-labelledby="navbar-offcanvas-label"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="navbar-offcanvas-label">Menu</h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    `;
}

document.querySelectorAll(".navbar-container").innerHTML = ''

document.querySelectorAll(".navbar-container").forEach(function (element) {
  element.innerHTML = createNavbar('username', 0, 0);
});
