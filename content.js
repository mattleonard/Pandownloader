// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "clicked_browser_action") {
      var trackInfo = scrapeSongInfo();
      chrome.runtime.sendMessage({"message": "download_song", "name": trackInfo});
    } else if(request.message === "youtube_download") {
      downloadSong(request.youtube_snippet);
    }
  }
);

// Pulls songs data from DOM and sends it to background.js
var scrapeSongInfo = function() {
  var songTitle = $(".songTitle").text();
  var artistName = $("a.artistSummary").text();
  return songTitle + ' ' + artistName;
}

// Insert link for download and clicks
var downloadSong = function(youtube_snippet) {
  $('#download-song').remove();
  $(body).append("<a download id='download-song' style='display: none;' href='http://youtubeinmp3.com/fetch/?video=http://www.youtube.com/watch?v=" + youtube_snippet + "'></a>");
  $('#download-song')[0].click();
}