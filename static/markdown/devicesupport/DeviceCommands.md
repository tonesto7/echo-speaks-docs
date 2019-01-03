### Commands

---
#### `replayText()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Will replay the last text sent to the device.</div></div>
  
<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
#### `doNotDisturbOn()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Activates Do Not Disturb for the device</div></div>
  
<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
#### `doNotDisturbOff()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Disables Do Not Disturb for the device</div></div>
  
<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
#### `setVolumeAndSpeak(volume, message)`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This command is highly recommend in place of sending an individual command for both volume and speaking.
When used it is set to Amazon as a single command and executed in a sequence
</div></div>
  
<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
<p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setVolumeAndSpeak(47, "The Front door is unlocked")</code></pre>


---
#### `setVolumeSpeakAndRestore(volume, message)`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This command is highly recommended in place of sending individual commands for setVolume(47), speak("The Front door is unlocked"), and setVolume(30).
When used it is set to Amazon as a single command and executed in a sequence
<br><br>
When the command is called it captures the current volume and restores immediately after the message is played.
<br>
</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
<p>Message (String): <code>String between 1-400 characters in length</code></p>
<p>Restore Volume (Integer): <code>Between 0 - 100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setVolumeSpeakAndRestore(50, "The Front door is unlocked", 30)</code></pre>

---
#### `setAlarmVolume(value)`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available on device that support alarms and reminders<br>
Sets the Echo Devices Alarm and Reminder Notification volume</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>setAlarmVolume(40)</code></pre>

---
#### `playWeather()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will give the current weather conditions</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
<p>Restore Volume (Integer): <code>Between 0 - 100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playWeather()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playWeather(30, 50)</code></pre>

---
#### `playSingASong()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will sing a random song</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
<p>Restore Volume (Integer): <code>Between 0 - 100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playSingASong()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playSingASong(30, 50)</code></pre>

---
#### `playFlashBrief()`

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will play the your flash briefing (If device supports it)</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0 - 100</code></p>
<p>Restore Volume (Integer): <code>Between 0 - 100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playFlashBrief()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playFlashBrief(30, 50)</code></pre>

---
#### `playGoodMorning()`

-   *Alexa will play the your good morning run down*

---
#### `playTraffic()`

-   *Alexa will give the current traffic condition on your way to work*

---
#### `playTellStory()`

-   *Alexa will tell a random story*

---
#### `searchMusic(String searchPhrase, String providerId, volume=null, sleepSeconds=null)`

-   Used to play music from the desired music provider
-   The available providerId\'s are \[CLOUDPLAYER, AMAZON\_MUSIC, I\_HEART\_RADIO, PANDORA, SPOTIFY, TUNEIN\]
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * ProviderId (String): "AMAZON_MUSIC"`\
` * Volume (Integer): 30`

-   Example Usage: searchMusic(\"thriller\", \"AMAZON\_MUSIC\", 30)

---
#### `searchAmazonMusic("search_string_here")`

-   Used to search and play music from Amazon Music
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchAmazonMusic(\"thriller\", 30)

---
#### `searchAppleMusic("search_string_here")`

-   Used to search and play music from Amazon Music
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchAppleMusic(\"thriller\", 30)

---
#### `searchPandora("search_string_here")`

-   Used to search and play music from Pandora Music
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchPandora(\"thriller\", 30)

---
#### `searchIheart("search_string_here")`

-   Used to search and play music from iHeartRadio
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchIheart(\"thriller\", 30)

---
#### `searchSiriusXm("search_string_here")`

-   Used to search and play from Sirius XM Radio
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchSiriusXm(\"thriller\", 30)

---
#### `searchSpotify("search_string_here")`

-   Used to search and play music from Spotify Music
-   Accepted Parameters:

` * SearchPhrase (String): "thriller"`\
` * Volume (Integer): 30`

-   Example Usage: searchSpotify(\"thriller\", 30)

---
#### `searchTuneIn("search_string_here")`

-   Used to search and play music from TuneIn Radio
-   Accepted Parameters:

` * SearchPhrase (String): "WNIC"`\
` * Volume (Integer): 30`

-   Example Usage: searchPandora(\"WNIC\")

---
#### `createAlarm("Alarm Label", "2018-11-14", "15:10")`

-   This will create audible alarms for a specific device.
-   Required Parameters:

` * 1. Label (String): It's used to visually identify the alarm in the Alexa App`\
` * 2. Date (String) This must be in this format (Year-Mon-Day)`\
` * 2. Time (String) This must be in this 24-hour time format (HH:MM)`

-   Example Usage: createAlarm("Alarm Label\", \"2018-12-03\", \"15:10\")

---
#### `createReminder("Reminder Message", "2018-11-14", "15:40")`

-   This will create audible Reminder and read back the label as the reminder message
-   Required Parameters:

` * 1. Label (String): It's used to visually identify the alarm in the Alexa App`\
` * 2. Date (String) This must be in this format (Year-Mon-Day)`\
` * 2. Time (String) This must be in this 24-hour time format (HH:MM)`

-   Example Usage: createReminder(\"Remember to feed the dogs\", \"2018-12-03\", \"15:10\")

---
#### `setWakeWord("ECHO")`

-   You can change the Wake Word for the device
-   You can use the attribute \"wakeWords\" to get the list of available words but currently they will only be \[\"ALEXA\",\"AMAZON\",\"ECHO\",\"COMPUTER\"\]
-   Accepted Parameters:

` * wakeword (String): "ECHO"`

-   Example Usage: setWakeWord(\"ECHO\")
