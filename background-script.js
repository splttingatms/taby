console.debug("background-script loaded");

browser.browserAction.onClicked.addListener(handleClick);

function handleClick(arg1) {
	console.debug("handleClick executed");
	console.debug(`arg1: ${JSON.stringify(arg1)}`);

	browser.sidebarAction.open();
}