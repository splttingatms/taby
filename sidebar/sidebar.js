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
    document.getElementById("file-selector").click();
}

function handleFiles() {
    if (!this.files || this.files.length < 1) {
        console.warning("no files selected");
    }

    // only process the first file selected
    var file = this.files[0];
    console.debug(`file: ${file}`);
    console.debug(`prop: ${file.name}`);
    console.debug(`prop: ${file.size}`);
    console.debug(`prop: ${file.type}`);

    if (!file.type.match("application/json")) {
        alert("don't understand file");
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        console.debug("reader loaded");
        console.debug(`event: ${JSON.stringify(event)}`);
        console.debug(`event: ${event}`);
        console.debug(`content: ${reader.result}`);
    };
    reader.readAsText(file);
}

// Must wait for the content to finish loading before IDs become available
window.onload = function() {
    document.addEventListener("click", (e) => {
        if (e.target.id === "tabs-export") {
            exportTabs();
        }

        if (e.target.id === "tabs-import") {
            importTabs();
        }
    });

    var fileSelector = document.getElementById("file-selector");
    fileSelector.addEventListener("change", handleFiles, false);
}