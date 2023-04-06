// color changer
// Select the html element
const htmlElement = document.querySelector("html");

// Function to toggle between light and dark mode
// toggle color modes
// window.onload = () => {
const toggleBgColor = document.querySelector("#toggle-bgColor");

const storedTheme = localStorage.getItem("theme");

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
};

const themeChanger = () => {
  if (toggleBgColor.checked) {
    setTheme("dark");
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty("--second-color", "#1c1c1c");
    document.documentElement.style.setProperty("--third-color", "#212529");
    document.documentElement.style.setProperty("--forth-color", "#8e8e8e54");
    document.documentElement.style.setProperty("--main-text-color", "white");
  } else {
    setTheme("light");
    document.documentElement.style.setProperty("--main-color", "#e4e4e4");
    document.documentElement.style.setProperty("--second-color", "#F5F5F5");
    document.documentElement.style.setProperty("--third-color", "white");
    document.documentElement.style.setProperty("--forth-color", "#e4e4e4");
    document.documentElement.style.setProperty("--main-text-color", "black");
  }
};

toggleBgColor.addEventListener("change", themeChanger);

if (storedTheme) {
  document.documentElement.setAttribute("data-bs-theme", storedTheme);
  toggleBgColor.checked = storedTheme === "dark";
}

themeChanger();
