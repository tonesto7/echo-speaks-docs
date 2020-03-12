## <h2 class="doc-head">Do Not Disturb</h2>

### <h3 class="doc-head">doNotDisturbOn()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Activates Do Not Disturb for the device
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  None Accepted
</div></div>

---

### <h3 class="doc-head">doNotDisturbOff()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Disables Do Not Disturb for the device
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  None Accepted
</div></div>

---

## <h2 class="doc-head">Volume Control</h2>

### <h3 class="doc-head">storeCurrentVolume()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Captures current device volume</p>
  <p class="note">NOTE: This is not always accurate. Aquiring the volume level requires media to have been playing or you send a volume change using SmartThings at least once.</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  None Accepted
</div></div>

---

### <h3 class="doc-head">restoreLastVolume()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Restores volume to captured volume using storeCurrentVolume()</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>None Accepted</p>
</div></div>

---

### <h3 class="doc-head">setAlarmVolume(value)</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
    <p>Sets the Echo Devices Alarm and Reminder Notification volume</p>
    <p class="note">NOTE: Only available on devices that support alarms and/or reminders</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
    <p>Volume (Integer): <code>Number value between 0-100</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>setAlarmVolume(40)</code>
</div></div>

---

## <h2 class="doc-head">Change Wake Word</h2>

### <h3 class="doc-head">setWakeWord("ECHO")</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Change the alexa wake word used to get Alexa to respond to commands</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <h5 class="blue">NOTE: At this time you can only use 5 names below</h5>
  <p>WakeWord (String): <code>["ALEXA", "AMAZON", "ECHO", "COMPUTER"]</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>setWakeWord("ECHO")</code>
</div></div>

---

## <h2 class="doc-head">Rename Device</h2>

### <h3 class="doc-head">renameDevice("New Device Name")</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Changes the alexa device name under your amazon account</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Device Name (String): <code>Any alphanumeric text accepted</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>renameDevice("New Device Name")</code>
</div></div>

---

## <h2 class="doc-head">Device Activity</h2>

### <h3 class="doc-head">getDeviceActivity()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Updates the activity data for the attributes "wasLastSpokenToDevice" and "lastVoiceActivity" (There can be a minor delay because of Amazon Rate-Limiting)</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>None Accepted</p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>getDeviceActivity()</code>
</div></div>

---

## <h2 class="doc-head">Bluetooth Control</h2>

### <h3 class="doc-head">getBluetoothDevices()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Refreshes all bluetooth devices for the alexa device</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>None Accepted</p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>getBluetoothDevices()</code>
</div></div>

---

### <h3 class="doc-head">connectBluetooth("JBL Pulse 2")</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
Will connected a paired bluetooth device by name. (Look at attribute `btDevicesPaired` for a list of paired device names</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>connectBluetooth("JBL Pulse 2")</code>
</div></div>

---

### <h3 class="doc-head">disconnectBluetooth()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Disconnects the bluetooth device currently connected to the Alexa device</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>None Accepted</p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>disconnectBluetooth()</code>
</div></div>

---

### <h3 class="doc-head">removeBluetooth("JBL Pulse 2")</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Removes bluetooth device pairing from alexa device by name. (Look at attribute `btDevicesPaired` for a list of paired device names
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>removeBluetooth("JBL Pulse 2")</code>
</div></div>

---

### <h3 class="doc-head">executeSequenceCommand(sequenceString)</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <p>Allows you to send a custom sequence of actions to Amazon as a single command that will be executed one at a time by Amazon.</p>
</div></div>

<div class="params-div"><div class="params-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Sequence String (String):</p>

   | **General Commands** |
   | : --------- |
   | weather |
  | traffic |
  | flashbriefing |
  | goodnews |
  | goodmorning |
  | goodnight |
  | cleanup |
  | singasong |
  | tellstory |
  | funfact |
  | joke |
  | playsearch |
  | calendartoday |
  | calendartomorrow |
  | calendarnext |
  | stop |
  | stopalldevices |

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

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>executeSequenceCommand("volume::50,, speak::This is pretty cool,, volume::30")</code>
</div></div>
