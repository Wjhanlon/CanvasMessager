function saveToLocalStorage(inputId) {
    const value = document.getElementById(inputId).value;
    chrome.storage.local.set({[inputId]: value});
    alert(`${inputId} saved!`);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnCanvasKey').addEventListener('click', () => saveToLocalStorage('CanvasKey'));
});
