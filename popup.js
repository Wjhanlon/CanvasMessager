document.getElementById("Info-button").addEventListener("click", () => {
    showView("info");
});

document.getElementById("back-button").addEventListener("click", () => {
    showView("main");
});

document.getElementById("Settings-button").addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
});

function showView(view) {
    document.getElementById("main-view").style.display = view === "main" ? "block" : "none";
    document.getElementById("info").style.display = view === "info" ? "block" : "none";
}

// Load assignments and display them as tiles
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get("assignments", (result) => {
        const assignments = result.assignments || [];
        const container = document.getElementById("assignments-list");

        if (!container) return;

        container.innerHTML = ""; // Clear previous content

        if (assignments.length === 0) {
            container.innerText = "No assignments found.";
            return;
        }

        assignments.forEach(a => {
            const tile = document.createElement("div");
            tile.className = "tile";

            tile.innerHTML = `
                <div class="title">${a.name}</div>
                <div class="due">${a.due_at ? `Due: ${new Date(a.due_at).toLocaleString()}` : "No due date"}</div>
            `;

            container.appendChild(tile);
        });
    });
});
