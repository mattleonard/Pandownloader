// background.js

// Send clicked button action to content.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// Recieves track data from content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "download_song") {
      findYoutubeUrl(request.name);
    }
  }
);

// Hits YouTube api to find video of track
var findYoutubeUrl = function(songInfo) {
  var songInfo = songInfo.replace(' ', ',');
  var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAxEzRy6NZrnHU7HBpnsiIbreDDhZ6StUw&part=id&type=video&q=" + songInfo;
  var youtubeSnippet = "";

  $.getJSON(url, function(json) {
    youtubeSnippet = json.items[0].id.videoId;
 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "youtube_download", "youtube_snippet": youtubeSnippet});
    });
  });

};