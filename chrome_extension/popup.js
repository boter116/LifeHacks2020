/*window.addEventListener('load', (event) => {
    chrome.tabs.executeScript(null, {
      file: 'selection.js',  }, () => {
        connect()});
});


function connect() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const port = chrome.tabs.connect(tabs[0].id);
      port.postMessage({ function: 'html' });
      port.onMessage.addListener((response) => {
        html = response.html;
        title = response.title;
        description = response.description;
      });
    });
}
  
const id = document.getElementById('paste')
pasteHighlight();
function pasteHighlight() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
        tab => {
            chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, response => {
                let text = document.getElementById('text');
                text.innerHTML = response.data;
            });
        });
}*/
