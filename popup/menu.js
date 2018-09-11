function logError(error) {
    console.error("Error: ${error}");
}

// https://stackoverflow.com/questions/11336663/how-to-make-a-browser-display-a-save-as-dialog-so-the-user-can-save-the-conten
function saveText(text, filename, mimeType, charset) {
    var content = encodeURIComponent(text);
    var dataUri = `data:${mimeType};charset=${charset},${content}`;
    
    var downloader = document.createElement("a");
    downloader.setAttribute("href", dataUri);
    downloader.setAttribute("download", filename);

    if (document.createEvent) {
        var event = document.createEvent("MouseEvents");
        event.initEvent("click", true, true);
        downloader.dispatchEvent(event);
    } else {
        downloader.click();
    }
}

function saveObjectAsJson(object, filename) {
    saveText(JSON.stringify(object), filename, "application/json", "utf-8");
}

function saveTabs(tabs) {
    console.debug("tabs: " + tabs.length);
    saveObjectAsJson(tabs, "tabs.txt");
}

function getAllTabs() {
    // empty query returns all tabs
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query
    return browser.tabs.query({});
}

function exportTabs() {
    console.debug("exportTabs executed");
    getAllTabs().then(saveTabs).catch(logError);
}

function importTabs() {
    console.debug("importTabs executed");
    alert("feature coming soon...");
}

document.addEventListener("click", (e) => {
    if (e.target.id === "tabs-export") {
        exportTabs();
    }

    if (e.target.id === "tabs-import") {
        importTabs();
    }
});
