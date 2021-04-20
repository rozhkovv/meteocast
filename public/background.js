chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log(request);
  // Callback for that request
  chrome.action.setIcon({path: request.icon});
});
