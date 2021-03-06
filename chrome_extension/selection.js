const monthReg = [new RegExp('(((j|J)an)(uary)?)'),new RegExp('(((f|F)eb)(ruary)?)'),new RegExp('(((m|M)ar)(ch)?)'),
    new RegExp('(((a|A)pr)(il)?)'),new RegExp('((m|M)ay)'),new RegExp('(((j|J)un)e?)'),new RegExp('(((j|J)ul)(y)?)'), 
    new RegExp('(((a|A)ug)(ust)?)'),new RegExp('(((s|S)ept)(ember)?)'),new RegExp('(((o|O)ct)(ober)?)'),
    new RegExp('(((n|N)ov)(ember)?)'), new RegExp('(((d|D)ec)(ember)?)')]; // regex for different ways of writing month


const months= ["january","february","march","april","may","june","july",
    "august","september","october","november","december"];
const durations = ["week", "month", "day", "weeks","months", "days", "year", "years"]
const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday",
                "mon", "tues", "wed", "thurs", "fri", "sat", "sun"]

async function saveEvent(event) {
    if(filterDate(event.selectionText) != 'NaN') {
        try{
            let data = {
                word: filterDate(event.selectionText)
            }
            await fetch('http://localhost:5000/', {method: 'post', body: JSON.stringify(data)})
            alert('success')
        } catch(e) {
            alert(e)
        }
}}

// true if date is format "Month xx" or "month" or "mon" or "mon xx"
function filterDate(text) {
    console.log(text);
    if( ((new Date(convertDate(text)) !== "Invalid Date") && !isNaN(new Date(convertDate(text))) 
        || months.some(month => convertDate(text).toLowerCase().includes(month))))
    {
        if(days.some(day => text.toLowerCase().includes(day))){
            let str = text;
            for(let i = 0; i < 14; i++){
                str = str.replace(days[i], '')
                str = str.replace(days[i].toUpperCase(), '')
                str = str.replace(days[i].toLowerCase(), '')
            }
            return str;
        }
        return text;
    }   
    else if (durations.some((duration) => text.toLowerCase().includes(duration) === true )) 
    {
        return text;
    }
    else {
        alert("Not a saveable date!")
        return 'NaN';
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