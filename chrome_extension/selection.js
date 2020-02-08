function saveEvent(event) {
    // api call 
    console.log(event)
    alert(event.selectionText)
}

chrome.contextMenus.create({
    title: "Save: %s",
    contexts: ["selection"],
    onclick: (event) => saveEvent(event)
});
// chrome.extension.onMessage.addListener((request, sender, sendResponse) =>{
//     if (request.method == "getSelection") {
  
//     else
//         sendResponse({});
// });