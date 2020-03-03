### <h4 style="color: #FF6025;">doNotDisturbOn()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Activates Do Not Disturb for the device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---

### <h4 style="color: #FF6025;">doNotDisturbOff()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Disables Do Not Disturb for the device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---

### <h4 style="color: #FF6025;">storeCurrentVolume()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This is not always accurate.  We can not aquire volume unless media is playing or change the volume using SmartThings once<br><br>
Captures current device volume</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---

### <h4 style="color: #FF6025;">restoreLastVolume()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Restores volume to captured volume using storeCurrentVolume()</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---

### <h4 style="color: #FF6025;">setAlarmVolume(value)</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available on device that support alarms and reminders<br><br>
Sets the Echo Devices Alarm and Reminder Notification volume</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>setAlarmVolume(40)</code></pre>

---

### <h4 style="color: #FF6025;">stopAllDevices()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Only send this command to a single device and not all devices<br><br>
Stops audio playback on all echo devices</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>stopAllDevices()</code></pre>

---

### <h4 style="color: #FF6025;">setWakeWord("ECHO")</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Used to change the alexa wake word invocation name</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>WakeWord (String): <code>You can use one of the following: ["ALEXA", "AMAZON", "ECHO", "COMPUTER"]</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setWakeWord("ECHO")</code></pre>

---

### <h4 style="color: #FF6025;">renameDevice("New Device Name")</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Changes the alexa device name under your amazon account</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Device Name (String): <code></code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>renameDevice("New Device Name")</code></pre>

---

### <h4 style="color: #FF6025;">getDeviceActivity()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Updates the activity data for the attributes "wasLastSpokenToDevice" and "lastVoiceActivity" (There can be a minor delay because of Amazon Rate-Limiting)</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>getDeviceActivity()</code></pre>

---

### <h4 style="color: #FF6025;">getBluetoothDevices()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Refreshes all bluetooth devices for the alexa device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>getBluetoothDevices()</code></pre>

---

### <h4 style="color: #FF6025;">connectBluetooth("JBL Pulse 2")</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Will connected a paired bluetooth device by name. (Look at attribute `btDevicesPaired` for a list of paired device names</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>connectBluetooth("JBL Pulse 2")</code></pre>

---

### <h4 style="color: #FF6025;">disconnectBluetooth()</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Will disconnect the the currently connected bluetooth device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>disconnectBluetooth()</code></pre>

---

### <h4 style="color: #FF6025;">removeBluetooth("JBL Pulse 2")</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Removes bluetooth device pairing from alexa device by name. (Look at attribute `btDevicesPaired` for a list of paired device names</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>removeBluetooth("JBL Pulse 2")</code></pre>

---

### <h4 style="color: #FF6025;">executeSequenceCommand(sequenceString)</h4>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Allows you to pass a string of sequences to Amazon as a single command that will be executed one at a time</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Sequence String (String):
<br>
<pre>
- weather
- traffic
- flashbriefing
- goodnews
- goodmorning
- goodnight
- cleanup
- singasong
- tellstory
- funfact
- joke
- playsearch
- calendartoday
- calendartomorrow
- calendarnext
- stop
- stopalldevices
- cannedtts_random::(accepted values below)
  * goodbye
  * confirmations
  * goodmorning
  * compliments
  * birthday
  * goodnight
  * iamhome

- sound::(accepted values below)

  Bells and Buzzer Sounds:

  - bells
  - buzzer
  - church_bell
  - doorbell1
  - doorbell2
  - doorbell3

  Holiday Sounds:

  - xmas_bells
  - halloween_door

  Misc Sounds:

  - air_horn
  - boing1
  - boing2
  - camera
  - squeaky_door
  - ticking_clock
  - trumpet

  Animals Sounds:

  - cat
  - dog
  - lion
  - rooster
  - wolf

  Scifi Sounds:

  - aircraft
  - engines
  - red_alert
  - shields
  - sirens
  - zap

  Crowd sounds:

  - applause
  - cheer

- wait::value (seconds)
- volume::value (0-100)
- speak::message
- announcement::message
- announcementall::message
- pushnotification::message
- amazonmusic::search term
- applemusic::search term
- iheartradio::search term
- pandora::search term
- spotify::search term
- tunein::search term
- cloudplayer::search term
  </pre>

<b>Enter the command in a format exactly like this:</b>

<pre>volume::40,, speak::this is so silly,, wait::60, weather,, cannedtts_random::goodbye,, traffic,, amazonmusic::green day,, volume::30</pre>

Each command::value pair needs to be separated by a double comma `,,` and the separator between the command and value must be command`::`value.

</p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>executeSequenceCommand("volume::50,, speak::This is pretty cool,, volume::30")</code></pre>
