
document.getElementById('receivedDate').addEventListener("click", submit);
let array1 = ["March 1", "March 2", "Feb 3"];
var array1 = [
    "Mar 15",
    "June 7",
    "april 3",
    "sept 1"
];
for( var i=0; i < array1.length; i++ ) {
    addElement( array1[i] );
}
function addElement ( someDate ) { 
    // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode(someDate); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    newDiv.addEventListener("click", () => {
        //alert("sup");
        document.getElementById('uniquetextfield').value = someDate;}
    );
    // newDiv.setAttribute("onclick", "gototextfield('hi')");
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1"); 
    currentDiv.parentNode.insertBefore(newDiv, currentDiv); 
}
function gototextfield(someDate) {
    alert("sup");
    document.getElementById('uniquetextfield').value = someDate;
}
function submit() {
    var x = document.getElementById('uniquetextfield').value;
    alert(x);
}