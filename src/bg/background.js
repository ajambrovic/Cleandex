//example of using a message handler from the inject scripts
chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    chrome.pageAction.show(sender.tab.id);
    sendResponse();
  });

chrome.browserAction.onClicked.addListener(function (activeTab) {
  var newURL = "https://www.index.hr/najnovije/";
  chrome.tabs.create({ url: newURL });
});