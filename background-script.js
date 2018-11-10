console.debug("background-script loaded");

// click on browser toolbar button
browser.browserAction.onClicked.addListener(handleClick);

function handleClick(currentTab) {
    if (typeof browser.sidebarAction === 'undefined'
        || typeof browser.sidebarAction.open == 'undefined') {
        console.debug("sidebarAction not supported");
        // sidebarAction is not implemented on Firefox for Android so use Extension Page instead
        // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/sidebarAction/open
        browser.tabs.create({
            url: "/ext-page/page.html"
        });
    } else {
        browser.sidebarAction.open();
    }
}