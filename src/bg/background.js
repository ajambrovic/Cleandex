chrome.browserAction.onClicked.addListener(function (activeTab) {
  var newURL = "https://www.index.hr/najnovije/";
  chrome.tabs.create({ url: newURL });
});