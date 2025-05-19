document.getElementById("Info-button").addEventListener("click", () => {
    showView("info");
});

document.getElementById("back-button").addEventListener("click", () => {
    showView("main");
});

function showView(view) {
    document.getElementById("main-view").style.display = view === "main" ? "block" : "none";
    document.getElementById("info").style.display = view === "info" ? "block" : "none";
}

document.getElementById("Settings-button").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});