## <h2 class="doc-head">General Speech</h2>

### <h4 class="doc-head">replayText()</h4>

!!! quote "Description"

    Will replay the last text sent to the device.

!!! summary "Required Parameters"

    - None Accepted

---

## <h2 class="doc-head">Custom Speech</h2>

### <h4 class="doc-head">setVolumeAndSpeak()</h4>

!!! tip "NOTICE"

    This command is highly recommend in place of sending an individual command for both volume and speaking.<br>When used it is set to Amazon as a single command and executed in a sequence.

!!! quote "Description"

    Sends volume command first, then plays message.

!!! summary "Required Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Message (String): <code>Text between 1-400 characters in length</code>

!!! example "Example Usage"

    - <code>setVolumeAndSpeak(47, "The Front door is unlocked")</code>

---

### <h4 class="doc-head">voiceCmdAsText()</h4>


!!! quote "Description"

    Simulates a voice initiated command.
    Can be used to do anything you can prompt by saying 'alexa'

!!! summary "Required Parameters"

    - Command Message (String): <code>Text between 1-400 characters in length</code>

!!! example "Example Usage"

    - <code>voiceCmdAsText("Tell FordPass to lock my truck")</code>

---

### <h4 class="doc-head">parallelSpeak()</h4>


!!! quote "Description"

    Used by the main app to indentify simultaenous speech commands and merging them to into a single command to be sent to amazon

!!! summary "Required Parameters"

    - Message (String): <code>Text between 1-400 characters in length</code>

!!! example "Example Usage"

    - <code>parallelSpeak("The Front door is unlocked")</code>

---

### <h4 class="doc-head">setVolumeSpeakAndRestore()</h4>

!!! tip "NOTICE"

    - This command is highly recommended in place of sending individual commands for setVolume(47), speak("The Front door is unlocked"), and setVolume(30).
    - When used it is set to Amazon as a single command and executed in a sequence.
    - When the command is called it captures the current volume and restores immediately after the message is played.

!!! quote "Description"

    Sends volume command first, then plays message, and restores original volume

!!! summary "Required Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Message (String): <code>Text between 1-400 characters in length</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>setVolumeSpeakAndRestore(50, "The Front door is unlocked", 30)</code>

---

## <h2 class="doc-head">Builin Speech Routines</h2>

### <h4 class="doc-head">playWeather()</h4>

!!! quote "Description"

    Alexa will give the current weather conditions

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playWeather()</code>
    - <code>playWeather(30)</code>
    - <code>playWeather(30, 50)</code>

---

### <h4 class="doc-head">playSingASong()</h4>

!!! quote "Description"

    Alexa will sing a random song

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playSingASong()</code>
    - <code>playSingASong(30)</code>
    - <code>playSingASong(30, 50)</code>

---

### <h4 class="doc-head">playFlashBrief()</h4>

!!! quote "Description"

    Alexa will play the your flash briefing News (If device supports it)

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playFlashBrief()</code>
    - <code>playFlashBrief(30)</code>
    - <code>playFlashBrief(30, 50)</code>

---

### <h4 class="doc-head">playGoodNews()</h4>

!!! quote "Description"

    Alexa will play something containing Good News (If device supports it)

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playGoodNews()</code>
    - <code>playGoodNews(30)</code>
    - <code>playGoodNews(30, 50)</code>

---

### <h4 class="doc-head">sayBirthday()</h4>

!!! quote "Description"

    Alexa will say a random happy birthday message

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayBirthday()</code>
    - <code>sayBirthday(30)</code>
    - <code>sayBirthday(30, 50)</code>

---

### <h4 class="doc-head">sayCompliment()</h4>

!!! quote "Description"

    Alexa will say a random compliment message

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayCompliment()</code>
    - <code>sayCompliment(30)</code>
    - <code>sayCompliment(30, 50)</code>

---

### <h4 class="doc-head">sayGoodbye()</h4>

!!! quote "Description"

    Alexa will say a random goodbye message

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayGoodbye()</code>
    - <code>sayGoodbye(30)</code>
    - <code>sayGoodbye(30, 50)</code>

---

### <h4 class="doc-head">sayGoodMorning()</h4>

!!! quote "Description"

    Alexa will play the your good morning run down

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayGoodMorning()</code>
    - <code>sayGoodMorning(30)</code>
    - <code>sayGoodMorning(30, 50)</code>

---

### <h4 class="doc-head">sayGoodNight()</h4>

!!! quote "Description"

    Alexa will say a random good night message

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayGoodNight()</code>
    - <code>sayGoodNight(30)</code>
    - <code>sayGoodNight(30, 50)</code>

---

### <h4 class="doc-head">sayWelcomeHome()</h4>

!!! quote "Description"

    Alexa will say a random welcome home message

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>sayWelcomeHome()</code>
    - <code>sayWelcomeHome(30)</code>
    - <code>sayWelcomeHome(30, 50)</code>

---

### <h4 class="doc-head">playTraffic()</h4>

!!! quote "Description"

    Alexa will give the current traffic condition on your way to work

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playTraffic()</code>
    - <code>playTraffic(30)</code>
    - <code>playTraffic(30, 50)</code>

---

### <h4 class="doc-head">playTellStory()</h4>

!!! quote "Description"

    Alexa will tell a random story

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playTellStory()</code>
    - <code>playTellStory(30)</code>
    - <code>playTellStory(30, 50)</code>

---

### <h4 class="doc-head">playFunFact()</h4>

!!! quote "Description"

    Alexa will tell a random fun fact

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playFunFact()</code>
    - <code>playFunFact(30)</code>
    - <code>playFunFact(30, 50)</code>

---

### <h4 class="doc-head">playJoke()</h4>

!!! quote "Description"

    Alexa will tell a random joke

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playJoke()</code>
    - <code>playJoke(30)</code>
    - <code>playJoke(30, 50)</code>

---

### <h4 class="doc-head">playCalendarToday()</h4>

!!! tip "NOTICE"

    Only available when you connected calendar accounts to your amazon alexa account

!!! quote "Description"

    Alexa will read all of the calendar events for the day

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playCalendarToday()</code>
    - <code>playCalendarToday(30)</code>
    - <code>playCalendarToday(30, 50)</code>

---

### <h4 class="doc-head">playCalendarTomorrow()</h4>

!!! tip "NOTICE"

    Only available when you connected calendar accounts to your amazon alexa account

!!! quote "Description"

    Alexa will read all of the calendar events for tomorrow

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playCalendarTomorrow()</code>
    - <code>playCalendarTomorrow(30)</code>
    - <code>playCalendarTomorrow(30, 50)</code>

---

### <h4 class="doc-head">playCalendarNext()</h4>

!!! tip "NOTICE"

    Only available when you connected calendar accounts to your amazon alexa account

!!! quote "Description"

    Alexa will read the next calendar event

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playCalendarNext()</code>
    - <code>playCalendarNext(30)</code>
    - <code>playCalendarNext(30, 50)</code>

---

### <h4 class="doc-head">playAnnouncement(message)</h4>

!!! quote "Description"

    This will make an announcement with the message on the device executing the command

!!! summary "Required Parameters"

    - Message (String): <code>Text between 1-400 characters in length</code>

!!! info "Optional Parameters"

    - Title (String): <code>String between 1-40 characters in length (For Echo Show/Spot Display)</code>
    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playAnnouncement("the garage door has opened")</code>
    - <code>playAnnouncement("the garage door has opened", "Door Alert")</code>
    - <code>playAnnouncement("the garage door has opened", "Door Alert", 40)</code>
    - <code>playAnnouncement("the garage door has opened", "Door Alert", 40, 30)</code>

---

### <h4 class="doc-head">playAnnouncementAll(message)</h4>

!!! quote "Description"

    This will make an announcement with the message on all echo devices on your account
    <br>
    <small style="color: red; padding: 0.15em 0;"><b><i>Notice: </i></b>This command is a complicated one.  If you want to announce on all of your echo devices just select one device to send the command to.  Amazon will send it to all devices on it's end.  So a single device can trigger all to speak. I've seen it to where Amazon will rate-limit so if the devices in the announcement so they will not speak.</small>

!!! summary "Required Parameters"

    - Message (String): <code>Text between 1-400 characters in length</code>

!!! info "Optional Parameters"

    - Title(String): <code>String between 1-400 characters in length (For Echo Show/Spots Display)</code>

!!! example "Example Usage"

    - <code>playAnnouncementAll("the garage door has opened")</code>
    - <code>playAnnouncementAll("the garage door has opened", "Door Alert")</code>

---

## <h2 class="doc-head">Sounds</h2>

### <h4 class="doc-head">playSoundByName()</h4>

!!! quote "Description"

    Play sounds found in the Alexa Skills Kit Sound Library (Only Sounds who's file name starts with 'amzn_sfx_')

!!! summary "Required Parameters"

    - Sound File Name (String): <code>String (Should support any alexa skills kit sound that starts with 'amzn_sfx_' | https://developer.amazon.com/docs/custom-skills/ask-soundlibrary.html)</code>

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - Restore Volume (Integer): <code>Number between 0-100</code>

!!! example "Example Usage"

    - <code>playSoundByName("amzn_sfx_bear_groan_roar_01")</code>
    - <code>playSoundByName("amzn_sfx_bear_groan_roar_01", 50)</code>
    - <code>playSoundByName("amzn_sfx_bear_groan_roar_01", 50, 30)</code>

---
