# Pandownloader Chrome Extension
-------------------------------------
This chrome extension allows you to download a Youtube version of the currently playing song on Pandora. I got annoyed with how long it took to copy the track info, find a youtube track and then go to a converter site so I automated it!

##### How it achieves this:
- Grabs song title and artists name through jQuery
- Hits the YouTube API and finds the first video that matches the track info
- Then passes the video url to http://youtubeinmp3.com/api/ and downloads the resulting track

However sometimes this script will download the webpage of the converting site instead of an MP3 file. I believe it may be YoutubeInMP3's response when the track isn't in their database yet. If this happens, I usually wait 10-20 seconds, while they convert the new track, and then try again. It will usually download the MP3 after a certain amount of time.

#### Installation
I read somewhere that the Chrome Web Store doesn't allow extensions that download from YouTube. You can however install this script in development mode if you would like to use it!
- First download all the files of this project (unzip them if they are in a zip file)
- Put them somewhere in your filesystem where they can live permanently
- Then open Chrome and go to "Window" > "Extensions"
- Check the developer mode checkbox in the top right of the page
- Then click 'Load unpacked extension...' and navigate to where you put the files
- Then enable the extension and you should be good to go!

Feel free to improve this script! I look forward to your pull requests!