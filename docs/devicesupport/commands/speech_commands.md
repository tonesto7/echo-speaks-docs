### <h4 style="color: #FF6025;">replayText()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Will replay the last text sent to the device.</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---

### <h4 style="color: #FF6025;">setVolumeAndSpeak(volume, message)</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This command is highly recommend in place of sending an individual command for both volume and speaking.
When used it is set to Amazon as a single command and executed in a sequence.

Sends volume command first, then plays message.

</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setVolumeAndSpeak(47, "The Front door is unlocked")</code></pre>

---

### <h4 style="color: #FF6025;">setVolumeSpeakAndRestore(volume, message)</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This command is highly recommended in place of sending individual commands for setVolume(47), speak("The Front door is unlocked"), and setVolume(30).
When used it is set to Amazon as a single command and executed in a sequence<br>
When the command is called it captures the current volume and restores immediately after the message is played.

Sends volume command first, then plays message, and restores original volume
<br>

</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Message (String): <code>String between 1-400 characters in length</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setVolumeSpeakAndRestore(50, "The Front door is unlocked", 30)</code></pre>

---

### <h4 style="color: #FF6025;">playWeather()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will give the current weather conditions</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playWeather()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playWeather(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playSoundByName(name)</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Play sounds found in the Alexa Skills Kit Sound Library (Only Sounds who's file name starts with 'amzn_sfx_')</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Sound File Name (String): <code>String (Should support any alexa skills kit sound that starts with 'amzn_sfx_' | https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html)</code></p>
</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playSoundByName("amzn_sfx_bear_groan_roar_01")</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playSoundByName("amzn_sfx_bear_groan_roar_01", 50, 30)</code></pre>

---

### <h4 style="color: #FF6025;">playSingASong()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will sing a random song</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playSingASong()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playSingASong(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playFlashBrief()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will play the your flash briefing News (If device supports it)</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playFlashBrief()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playFlashBrief(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playGoodNews()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will play something containing Good News (If device supports it)</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playGoodNews()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playGoodNews(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayBirthday()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will say a random happy birthday message</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayBirthday()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayBirthday(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayCompliment()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will say a random compliment message</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayCompliment()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayCompliment(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayGoodbye()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will say a random goodbye message</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayGoodbye()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayGoodbye(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayGoodMorning()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will play the your good morning run down</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayGoodMorning()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayGoodMorning(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayGoodNight()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will say a random good night message</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayGoodNight()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayGoodNight(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">sayWelcomeHome()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will say a random welcome home message</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>sayWelcomeHome()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>sayWelcomeHome(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playTraffic()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will give the current traffic condition on your way to work</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playTraffic()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playTraffic(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playTellStory()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will tell a random story</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playTellStory()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playTellStory(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playFunFact()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will tell a random fun fact</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playFunFact()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playFunFact(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playJoke()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Alexa will tell a random joke</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playJoke()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playJoke(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playCalendarToday()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read all of the calendar events for the day</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playCalendarToday()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playCalendarToday(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playCalendarTomorrow()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read all of the calendar events for tomorrow</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playCalendarTomorrow()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playCalendarTomorrow(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playCalendarNext()</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read the next calendar event</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playCalendarNext()</code></pre>
<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Optional: <code>playCalendarNext(30, 50)</code></pre>

---

### <h4 style="color: #FF6025;">playAnnouncement(message)</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
This will make an announcement with the message on the device executing the command</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Title (String): <code>String between 1-40 characters in length (For Echo Show/Spot Display)</code></p>
<p>Volume (Integer): <code>Between 0-100</code></p>
<p>Restore Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playAnnouncement("the garage door has opened", "Door Alert", 40, 30)</code></pre>

---

### <h4 style="color: #FF6025;">playAnnouncementAll(message)</h4>

<div class="desc-div"><div class="desc-div-title"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
This will make an announcement with the message on all echo devices on your account<br><small style="color: red; padding: 0.15em 0;"><b><i>Notice: </i></b>This command is a complicated one.  If you want to announce on all of your echo devices just select one device to send the command to.  Amazon will send it to all devices on it's end.  So a single device can trigger all to speak. I've seen it to where Amazon will rate-limit so if the devices in the announcement so they will not speak.</small></div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<div class="params-div"><div class="params-div-title"><small><b><i>Optional Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Title(String): <code>String between 1-400 characters in length (For Echo Show/Spots Display)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>playAnnouncementAll("the garage door has opened", "Door Alert")</code></pre>
