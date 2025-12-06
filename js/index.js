
function toggleTheme() {
    var body = document.querySelector("body");
    body.classList.toggle("light-mode");
}

var btn = document.querySelector("#theme-toggle");
btn.onclick = toggleTheme;
