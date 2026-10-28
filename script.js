
const themeButton = document.getElementById("theme-toggle");
const copyright = document.getElementById("copyright");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
});

copyright.textContent =
    `© ${new Date().getFullYear()} My Portfolio. Built with HTML, CSS and JavaScript.`;
