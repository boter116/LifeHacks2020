const monthReg = [new RegExp('(((j|J)an)(uary)?)'),new RegExp('(((f|F)eb)(ruary)?)'),new RegExp('(((m|M)ar)(ch)?)'),
    new RegExp('(((a|A)pr)(il)?)'),new RegExp('((m|M)ay)'),new RegExp('(((j|J)un)e?)'),new RegExp('(((j|J)ul)(y)?)'), 
    new RegExp('(((a|A)ug)(ust)?)'),new RegExp('(((s|S)ept)(ember)?)'),new RegExp('(((o|O)ct)(ober)?)'),
    new RegExp('(((n|N)ov)(ember)?)'), new RegExp('(((d|D)ec)(ember)?)')]; // regex for different ways of writing month


const months= ["january","february","march","april","may","june","july",
    "august","september","october","november","december"];
const durations = ["week", "month", "day", "weeks","months", "days", "year", "years"]

async function saveEvent(event) {
    if(filterDate(event.selectionText)) {
        try{
            await fetch('http://localhost:5000/')
            alert('success')
        } catch(e) {
            alert('err')
        }
}}


// true if date is format "Month xx" or "month" or "mon" or "mon xx"
function filterDate(text) {
    text = convertDate(text);
    console.log(text);
    if( ((new Date(text) !== "Invalid Date") && !isNaN(new Date(text)) 
        || months.some(month => text.toLowerCase().includes(month))))
    {
        return true;
    } 
    else if (durations.some((duration) => text.toLowerCase().includes(duration) === true )) 
    {
        return true;
    }
    else {
        alert("Not a saveable date!")
        return false;
    }
}

// if accepted by regex returns changed month if rejected, return self
function convertDate(monthtext) {
    for (let i = 0; i < 12; i++) {
        if (monthReg[i].test(monthtext))
            return months[i];
    }
    return monthtext;
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