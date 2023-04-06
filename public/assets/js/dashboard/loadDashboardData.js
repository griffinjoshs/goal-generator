    document.addEventListener("DOMContentLoaded", () => {
        fetch("/user")
          .then((response) => response.json())
          .then((data) => {
            console.log("@" + data.username);
            document.querySelectorAll(".navbar-container").forEach(function (element) {
  element.innerHTML = createNavbar(data.username, 1);
});
     // Update coin count with user data
     document.querySelector('.total-coin-count').innerHTML = '';
     document.querySelector('.total-coin-count').appendChild(createCoinCount(24));
    //  Update progress bar with user data
     document.querySelector('#level-progress').innerHTML = '';
     document.querySelector('#level-progress').appendChild(createProgressBar(61, '#05EA00'));
            // Add event listener to logout button
            document
              .getElementById("logout-form")
              .addEventListener("submit", (event) => {
                event.preventDefault();
                const requestOptions = {
                  method: "DELETE",
                  headers: { "Content-Type": "application/json" },
                };
                fetch("/logout", requestOptions)
                  .then((response) => {
                    if (response.ok) {
                      window.location.href = "/login";
                    }
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });