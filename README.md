# Pandora Downloader Chrome Extension
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

Disclaimer
------------
THIS SOFTWARE IS PROVIDED BY THE MATT LEONARD AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
IN NO EVENT SHALL THE MATT LEONARD OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY
OF SUCH DAMAGE.