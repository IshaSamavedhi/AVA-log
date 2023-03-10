let scrapeEmails = document.getElementById
('scrapeEmails');
let list = document.getElementById('emailList');

// Handler to receive emails from content script
chrome.runtime.onMessage.addListener((request,
    sender, sendResponse) => {

        // Get emails
        let emails = request.emails;
        
        // Display emails on popup
        if (emails == null || emails.length == 0) {
            // No emails
            let li = document.createElement('li');
            li.innerText = "No emails found";
            list.appendChild(li);
        } else {
            // Display emails
            emails.forEach((email) => {
                let li = document.createElement('li');
                li.innerText = email;
                list.appendChild(li);
            });
        }
});

scrapeEmails.addEventListener("click", async () => {

    // Get current active (gmail) tab
    let [tab] = await chrome.tabs.query({active:
    true, currentWindow: true})

    // Execute script to parse emails
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: scrapeSenderAddresses,
    });
})

// Function to scrape emails
function scrapeSenderAddresses() {
    
    // RegEx to parse emails from html code
    const emailRegEx = /\bzF" email="\b[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim
    // email regEx format: /[\w\.=-]+@[\w\.-]+\.[\w]{2,3}/gim

    // Parse emails from the HTML 
    let unfilteredEmails = document.body.innerHTML.match
    (emailRegEx);

    // RegEx to parse emails from html code

    for(var i = 0; i < unfilteredEmails.length; i++) {
        unfilteredEmails[i] = unfilteredEmails[i].substr(unfilteredEmails[i].indexOf("zF\" email=\"") + 11, unfilteredEmails[i].length - 1);
    }

    let emails = unfilteredEmails;

    // Send emails to popup
    chrome.runtime.sendMessage({emails});
}