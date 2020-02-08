function saveEvent(event) {
    // api call 
    console.log(event)
    
const month= ["january","february","march","april","may","june","july",
"august","september","october","november","december"];
    if( ((new Date(event.selectionText) !== "Invalid Date") && !isNaN(new Date(event.selectionText)) || month.includes(event.selectionText)))
    {
        alert('True')
    } else {
        alert("False")
    }
   
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