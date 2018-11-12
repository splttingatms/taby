# Taby
A WebExtension for saving and restoring tabs.

## Development

### Firefox

#### Method 1 (Recommended): web-ext
Official documentation can be found here: [Getting started with web-ext](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext)

1. Install web-ext using the following command: `npm-install --global web-ext`
1. Run Firefox with add-on temporarily installed:
    * Firefox Desktop: `web-ext run`
    * Firefox for Android: `web-ext run --target=firefox-android --android-device=XXX`

#### Method 2: Temporary Add-on
Official documentation can be found here: [Temporary Installation in Firefox](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox).

1. Open Firefox and enter "about:debugging" in the URL bar.
1. Click "Load Temporary Add-on" and select any file inside the extension's directory.

### Publish
Overall steps can be found here: [Submitting an Add-On](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/Distribution/Submitting_an_add-on)

1. Package the extension [docs](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/web-ext_command_reference#web-ext_build): `web-ext build`
1. Upload to AMO following the form: https://addons.mozilla.org/en-US/developers/addons
