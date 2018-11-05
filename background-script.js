console.debug("background-script loaded");

var os = "";
browser.runtime.getPlatformInfo()
    .then((info) => {
        os = info.os;
    });

browser.browserAction.onClicked.addListener(handleClick);

function handleClick(currentTab) {
    console.debug("handleClick executed");

    console.debug(`os: ${os}`);
    if (os.match("android")) {
        // sidebarAction.open() is not implemented on Firefox for Android
        // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
        browser.tabs.create({
            url: "/ext-page/page.html"
        });
    } else {
        browser.sidebarAction.open();
    }
}