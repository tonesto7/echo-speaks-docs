## <h2 class="doc-head">General Speech</h2>

### <h3 class="doc-head">replayText()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Will replay the last text sent to the device.
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  None Accepted
</div></div>

---

## <h2 class="doc-head">Custom Speech</h2>

### <h3 class="doc-head">setVolumeAndSpeak()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <h5 class="blue">NOTE:
    <br>  This command is highly recommend in place of sending an individual command for both volume and speaking.
    <br>  When used it is set to Amazon as a single command and executed in a sequence.
  </h5>
  <p>Sends volume command first, then plays message.</p>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Message (String): <code>Text between 1-400 characters in length</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>setVolumeAndSpeak(47, "The Front door is unlocked")</code>
</div></div>

---

### <h3 class="doc-head">setVolumeSpeakAndRestore()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <h5 class="blue">NOTE:
    <ul>
      <li>This command is highly recommended in place of sending individual commands for setVolume(47), speak("The Front door is unlocked"), and setVolume(30).</li>
      <li>When used it is set to Amazon as a single command and executed in a sequence.</li>
      <li>When the command is called it captures the current volume and restores immediately after the message is played.</li>
    </ul>
  </h5>
  <p>Sends volume command first, then plays message, and restores original volume</p>
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Message (String): <code>Text between 1-400 characters in length</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>setVolumeSpeakAndRestore(50, "The Front door is unlocked", 30)</code>
</div></div>

---


## <h2 class="doc-head">Builin Speech Routines</h2>

### <h3 class="doc-head">playWeather()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Alexa will give the current weather conditions
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:
  <code>playWeather()</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>playWeather(30, 50)</code>
</div></div>

---

### <h3 class="doc-head">playSingASong()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Alexa will sing a random song
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:
  <code>playSingASong()</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>playSingASong(30, 50)</code>
</div></div>

---

### <h3 class="doc-head">playFlashBrief()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Alexa will play the your flash briefing News (If device supports it)
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:
  <code>playFlashBrief()</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>playFlashBrief(30, 50)</code>
</div></div>

---

### <h3 class="doc-head">playGoodNews()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Alexa will play something containing Good News (If device supports it)
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:
  <code>playGoodNews()</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>playGoodNews(30, 50)</code>
</div></div>

---

### <h3 class="doc-head">sayBirthday()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will say a random happy birthday message</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>sayBirthday()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>sayBirthday(30, 50)</code></div></div>

---

### <h3 class="doc-head">sayCompliment()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will say a random compliment message</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage: <code>sayCompliment()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>sayCompliment(30, 50)</code>
</div></div>

---

### <h3 class="doc-head">sayGoodbye()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will say a random goodbye message</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>sayGoodbye()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>sayGoodbye(30, 50)</code></div></div>

---

### <h3 class="doc-head">sayGoodMorning()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will play the your good morning run down</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>sayGoodMorning()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>sayGoodMorning(30, 50)</code></div></div>

---

### <h3 class="doc-head">sayGoodNight()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will say a random good night message</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>sayGoodNight()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>sayGoodNight(30, 50)</code></div></div>

---

### <h3 class="doc-head">sayWelcomeHome()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will say a random welcome home message</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>sayWelcomeHome()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>sayWelcomeHome(30, 50)</code></div></div>

---

### <h3 class="doc-head">playTraffic()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will give the current traffic condition on your way to work</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playTraffic()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playTraffic(30, 50)</code></div></div>

---

### <h3 class="doc-head">playTellStory()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will tell a random story</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playTellStory()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playTellStory(30, 50)</code></div></div>

---

### <h3 class="doc-head">playFunFact()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will tell a random fun fact</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playFunFact()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playFunFact(30, 50)</code></div></div>

---

### <h3 class="doc-head">playJoke()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Alexa will tell a random joke</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playJoke()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playJoke(30, 50)</code></div></div>

---

### <h3 class="doc-head">playCalendarToday()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read all of the calendar events for the day</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playCalendarToday()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playCalendarToday(30, 50)</code></div></div>

---

### <h3 class="doc-head">playCalendarTomorrow()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read all of the calendar events for tomorrow</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playCalendarTomorrow()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playCalendarTomorrow(30, 50)</code></div></div>

---

### <h3 class="doc-head">playCalendarNext()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
<code>NOTE:</code>Only available when you connected calendar accounts to your amazon alexa account<br><br>
Alexa will read the next calendar event</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playCalendarNext()</code></div></div>
<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:<code>playCalendarNext(30, 50)</code></div></div>

---

### <h3 class="doc-head">playAnnouncement(message)</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
This will make an announcement with the message on the device executing the command</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
<p>Message (String): <code>Text between 1-400 characters in length</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Title (String): <code>String between 1-40 characters in length (For Echo Show/Spot Display)</code></p>
<p>Volume (Integer): <code>Number between 0-100</code></p>
<p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playAnnouncement("the garage door has opened", "Door Alert", 40, 30)</code></div></div>

---

### <h3 class="doc-head">playAnnouncementAll(message)</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
This will make an announcement with the message on all echo devices on your account<br><small style="color: red; padding: 0.15em 0;"><b><i>Notice: </i></b>This command is a complicated one.  If you want to announce on all of your echo devices just select one device to send the command to.  Amazon will send it to all devices on it's end.  So a single device can trigger all to speak. I've seen it to where Amazon will rate-limit so if the devices in the announcement so they will not speak.</small></div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
<p>Message (String): <code>Text between 1-400 characters in length</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
<p>Title(String): <code>String between 1-400 characters in length (For Echo Show/Spots Display)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:<code>playAnnouncementAll("the garage door has opened", "Door Alert")</code></div></div>

---

## <h2 class="doc-head">Sounds</h2>

### <h3 class="doc-head">playSoundByName()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Play sounds found in the Alexa Skills Kit Sound Library (Only Sounds who's file name starts with 'amzn_sfx_')
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
<p>Sound File Name (String): <code>String (Should support any alexa skills kit sound that starts with 'amzn_sfx_' | https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html)</code></p>
</div></div>

<div class="params-opt-div"><div class="params-opt-div-title">Optional Parameters</div><div class="offset-0-5">
  <p>Volume (Integer): <code>Number between 0-100</code></p>
  <p>Restore Volume (Integer): <code>Number between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:
  <code>playSoundByName("amzn_sfx_bear_groan_roar_01")</code>
</div></div>

<div class="example-opt-div"><div class="example-opt-div-title">Example w/Optional:
  <code>playSoundByName("amzn_sfx_bear_groan_roar_01", 50, 30)</code>
</div></div>

---
