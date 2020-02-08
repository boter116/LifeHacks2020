function pasteHighlight() {
    chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT},
        tab => {
            chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, response => {
                let text = document.getElementById('text');
                text.innerHTML = response.data;
            });
        });
}