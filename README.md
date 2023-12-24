# Avalog Chrome Extension

## Overview
Avalog is a Chrome extension developed during a hackathon to assist users in identifying and safeguarding against spam emails. The extension checks sender addresses in the active Gmail tab, displaying detected email addresses in a popup. Additionally, it adds a warning for potentially suspicious emails, enhancing user email security.

## Features
- **Check Senders:** Click the "Check Senders" button to scan sender addresses in the active Gmail tab.
- **Popup Display:** Detected email addresses are shown in a popup, providing users with a clear overview of senders and potential threats.
- **Warning for Suspicious Emails:** Emails identified as potentially suspicious are marked with a warning, alerting users to exercise caution.

## Installation
1. Clone or download the Avalog repository.
   ```bash
   git clone https://github.com/your-username/Avalog.git
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click on "Load unpacked" and select the directory where the extension files are located.
5. Avalog should now be added to your Chrome browser.

## Usage

1. Open Gmail in a Chrome tab.
2. Click on the Avalog extension icon in the Chrome toolbar.
3. Click the "Check Senders" button to initiate the scanning process.
4. Detected email addresses will be displayed in a popup, with warnings for suspicious emails.

## Files

- `popup.html`: HTML file defining the structure of the extension popup.
- `style.css`: CSS file providing styling for the popup.
- `popup.js`: JavaScript file containing logic for initiating the scanning process, parsing emails, and communicating with the background script.
- `manifest.json`: JSON file specifying extension metadata and configuration.

## Contributing/User Input

Input to enťance Avalog are highly appreciated. Feel free to open issues or submit pull requests to improve the extension's functionality and security features.


## Acknowledgments

Special thanks to the developers and contributors who participated in the Avalog hackathon.
