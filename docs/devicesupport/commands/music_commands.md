
## <h2 class="doc-head">Playback</h2>

### <h3 class="doc-head">stopAllDevices()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
    <p>Stops audio playback on all echo devices</p>
    <h5 class="blue">NOTE: Only send this command to a single device and not all devices</h5>
</div></div>
<div class="params-div"><div class="params-div-title">Parameters</div><div class="offset-0-5">
  None Accepted
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>stopAllDevices()</code>
</div></div>

---

### <h3 class="doc-head">togglePlayback()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to toggle between playing and stopped state</p>
  <h5 class="blue">NOTE: Not available on all devices. Only works on devices that support music playback control</h5>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>togglePlayback()</code>
</div></div>


---

## <h2 class="doc-head">Music Search</h2>

### <h3 class="doc-head">searchMusic()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from the desired music provider by using a specific search phrase</p>
  <h5 class="blue">NOTE: Not available on all devices. Only works on devices that support music playback control</h5>
  <h5 style="darkgray">NOTE: I have discovered that when trying to play songs I had to add the word song to the search phrase</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="blue">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length</code>
  <p>ProviderId (String): <code>[CLOUDPLAYER, AMAZON_MUSIC, APPLE_MUSIC, I_HEART_RADIO, PANDORA, SPOTIFY, TUNEIN]</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>searchMusic("thriller", "AMAZON_MUSIC")</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5">
  <code>searchMusic("thriller on the upstairs", "AMAZON_MUSIC", 40, 300)</code>
</div></div>



---

### <h3 class="doc-head">searchAmazonMusic()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Used to play music from Amazon Music provider
  <h5 class="note">NOTE: Not available on all devices. Only works on devices that support music playback control</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>SearchPhrase (String): <code>String between 0-100 characters in length</code></p>
  <h5 class="note">NOTE: This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <h5 class="darkgray">NOTE: I have discovered that when trying to play songs I had to add the word song to the search phrase</h5>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Between 0-100</code></p>
  <p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchAmazonMusic("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchAmazonMusic("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchAppleMusic()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from Apple Music provider</p>
  <h5 class="blue">NOTE: Not available on all devices. Only works on devices that support music playback control and Apple Music</h5>
  <h5 style="darkgray">NOTE: I have discovered that when trying to play songs I had to add the word song to the search phrase</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">NOTE: This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>String between 0-100 characters in length.</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Between 0-100</code></p>
  <p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchAppleMusic("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchAppleMusic("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchPandora()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from Pandora Radio provider</p>
  <h5 class="blue">NOTE: Not available on all devices. Requires connection of Pandora skills</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length.</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchPandora("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchPandora("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchIheart()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from iHeartRadio provider</p>
  <h5 class="blue">NOTE: Not available on all devices. Requires connection of iHeart Radio Skill</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length</code>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchIheart("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchIheart("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchSiriusXm()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from Sirius XM provider</p>
  <h5 class="blue">NOTE: Not available on all devices.  Requires Sirius XM subscription.</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length.</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchSiriusXm("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchSiriusXm("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchSpotify()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from Spotify provider</p>
  <h5 class="blue">NOTE: Not available on all devices. Requires Spotify subscription.</h5>
  <h5 style="darkgray">NOTE: I have discovered that when trying to play songs I had to add the word song to the search phrase.</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length.</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchSpotify("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchSpotify("thriller on the upstairs", 40, 300)</code></div></div>

---

### <h3 class="doc-head">searchTuneIn()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Used to play music from Tune-In Radio provider</p>
  <h5 class="blue">NOTE: Not available on all devices. Only works on devices that support music playback control and Tune-In Radio</h5>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="note">This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</h5>
  <p>SearchPhrase (String): <code>Text between 0-100 characters in length.</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5"><code>searchTuneIn("thriller")</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:</div><div class="offset-0-5"><code>searchTuneIn("thriller on the upstairs", 40, 300)</code></div></div>

---

## <h2 style="color: #FF6025;">Music Testing</h2>

  <p>I've recently added a Music Search Test section to the main page of the SmartThings/Hubitat app.</p>

---


