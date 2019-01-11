## <h3 style="color: #FF6025;">searchMusic(searchPhrase, providerId)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Only works on devices that support music playback control<br><br>
Used to play music from the desired music provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
<p>ProviderId (String): <code>ProviderId's allowed [CLOUDPLAYER, AMAZON_MUSIC, APPLE_MUSIC, I_HEART_RADIO, PANDORA, SPOTIFY, TUNEIN]</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchMusic("thriller", "AMAZON_MUSIC")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchMusic("thriller on the upstairs", "AMAZON_MUSIC", 40, 300)</code></pre>

<p style="color: yellow"><b>Info:</b> I have discovered that when trying to play songs I had to add the word song to the search phrase.

---
## <h3 style="color: #FF6025;">searchAmazonMusic(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Only works on devices that support music playback control<br><br>
Used to play music from Amazon Music provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchAmazonMusic("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchAmazonMusic("thriller on the upstairs", 40, 300)</code></pre>

<p style="color: yellow"><b>Info:</b> I have discovered that when trying to play songs I had to add the word song to the search phrase.

---
## <h3 style="color: #FF6025;">searchAppleMusic(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Only works on devices that support music playback control and Apple Music<br><br>
Used to play music from Apple Music provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchAppleMusic("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchAppleMusic("thriller on the upstairs", 40, 300)</code></pre>

<p style="color: yellow"><b>Info:</b> I have discovered that when trying to play songs I had to add the word song to the search phrase.

---
## <h3 style="color: #FF6025;">searchPandora(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Requires connection of Pandora skills<br><br>
Used to play music from Pandora Radio provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchPandora("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchPandora("thriller on the upstairs", 40, 300)</code></pre>

---
## <h3 style="color: #FF6025;">searchIheart(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Requires connection of iHeart Radio Skill<br><br>
Used to play music from iHeartRadio provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchIheart("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchIheart("thriller on the upstairs", 40, 300)</code></pre>

---
## <h3 style="color: #FF6025;">searchSiriusXm(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices.  Requires Sirius XM subscription.<br><br>
Used to play music from Sirius XM provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchSiriusXm("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchSiriusXm("thriller on the upstairs", 40, 300)</code></pre>

---
## <h3 style="color: #FF6025;">searchSpotify(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Requires Spotify subscription.<br><br>
Used to play music from Spotify provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchSpotify("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchSpotify("thriller on the upstairs", 40, 300)</code></pre>

<p style="color: yellow"><b>Info:</b> I have discovered that when trying to play songs I had to add the word song to the search phrase.

---
## <h3 style="color: #FF6025;">searchTuneIn(searchPhrase)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not available on all devices. Only works on devices that support music playback control and Tune-In Radio<br><br>
Used to play music from Tune-In Radio provider</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>SearchPhrase (String): <code>String between 0-100 characters in length.  This can be song name, playlist, artist.<br>You can also add an audio group in the search to have it played under a group of alexa devices.</code></p>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>searchTuneIn("thriller")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>searchTuneIn("thriller on the upstairs", 40, 300)</code></pre>

---
## <h3 style="color: #FF6025;">Testing</h3>

I've recently added a Music Search Test section to the main page of the SmartThings/Hubitat app.
