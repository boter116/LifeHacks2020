function saveEvent() {
    // api call 
}


chrome.extension.onMessage.addListener((request, sender, sendResponse) =>{
    if (request.method == "getSelection") {
    if (window.getSelection().toString() == "boolean")
    {
    chrome.contextMenus.create({
        title: "Save: %s",
        contexts: ["selection"],
        onclick: saveEvent
    });
    } }
    else
        sendResponse({});
});