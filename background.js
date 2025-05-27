// background.js
function fetchAssignmentsAndText() {
    chrome.storage.local.get(["CanvasKey"], async ({ CanvasKey }) => {
        const courseId = "74999";

        if (!CanvasKey) {
            console.warn("Missing token in chrome.storage");
            return;
        }

        const url = `https://canvas.wpi.edu/api/v1/courses/${courseId}/assignments`;

        try {
            const response = await fetch(url, {
                headers: { Authorization: `Bearer ${CanvasKey}` }
            });

            if (!response.ok) throw new Error(`Canvas API error: ${response.status}`);

            const data = await response.json();
            const assignmentNames = data.map(a => a.name).join("\n");

            console.log("Assignments fetched:\n" + assignmentNames);

            chrome.storage.local.set({ assignments: data });

        } catch (err) {
            console.error("Error fetching assignments:", err);
        }
    });
}



chrome.runtime.onStartup.addListener(fetchAssignmentsAndText);
chrome.runtime.onInstalled.addListener(fetchAssignmentsAndText);
