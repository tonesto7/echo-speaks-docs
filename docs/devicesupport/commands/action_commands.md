## <h2 class="doc-head">Do Not Disturb</h2>

### <h4 class="doc-head">doNotDisturbOn()</h4>

!!! quote "Description"

    Activates Do Not Disturb for the device


!!! summary "Required Parameters"

    None Accepted

---

### <h4 class="doc-head">doNotDisturbOff()</h4>

!!! quote "Description"

    Disables Do Not Disturb for the device

!!! summary "Required Parameters"

    None Accepted

---

## <h2 class="doc-head">Volume Control</h2>

### <h4 class="doc-head">storeCurrentVolume()</h4>

!!! tip "NOTICE"

    This is not always accurate. Aquiring the volume level requires media to have been playing or you send a volume change using SmartThings at least once.

!!! quote "Description"

    - Captures current device volume

!!! summary "Required Parameters"

    - None Accepted

---

### <h4 class="doc-head">restoreLastVolume()</h4>

!!! quote "Description"

    - Restores volume to captured volume using storeCurrentVolume()

!!! summary "Required Parameters"

    - None Accepted

---

### <h4 class="doc-head">setAlarmVolume()</h4>

!!! tip "NOTICE"

    Only available on devices that support alarms and/or reminders

!!! quote "Description"

    - Sets the Echo Devices Alarm and Reminder Notification volume

!!! summary "Required Parameters"

    - Volume (Integer): <code>Number value between 0-100</code>

!!! example "Example Usage"

    - <code>setAlarmVolume(40)</code>

---

## <h2 class="doc-head">Change Wake Word</h2>

### <h4 class="doc-head">setWakeWord()</h4>

!!! quote "Description"

    - Change the alexa wake word used to get Alexa to respond to commands

!!! summary "Required Parameters"

    - WakeWord (String): <code>["ALEXA", "AMAZON", "ECHO", "COMPUTER"]</code>

        !!! tip "Tips"

            At this time you can only use 5 names below

!!! example "Example Usage"

    - <code>setWakeWord("ECHO")</code>

---

## <h2 class="doc-head">Rename Device</h2>

### <h4 class="doc-head">renameDevice()</h4>

!!! quote "Description"

    - Changes the alexa device name under your amazon account

!!! summary "Required Parameters"

    - Device Name (String): <code>Any alphanumeric text accepted</code>

!!! example "Example Usage"

    - <code>renameDevice("New Device Name")</code>

---

## <h2 class="doc-head">Device Activity</h2>

### <h4 class="doc-head">getDeviceActivity()</h4>

!!! quote "Description"

    Updates the activity data for the attributes "wasLastSpokenToDevice" and "lastVoiceActivity" (There can be a minor delay because of Amazon Rate-Limiting)

!!! summary "Required Parameters"

    - None Accepted

!!! example "Example Usage"

    - <code>getDeviceActivity()</code>

---

## <h2 class="doc-head">Bluetooth Control</h2>

### <h4 class="doc-head">getBluetoothDevices()</h4>

!!! quote "Description"

    - Refreshes all bluetooth devices for the alexa device

!!! summary "Required Parameters"

    - None Accepted

!!! example "Example Usage"

    - <code>getBluetoothDevices()</code>

---

### <h4 class="doc-head">connectBluetooth()</h4>

!!! quote "Description"

    Will connected a paired bluetooth device by name. (Look at attribute `btDevicesPaired` for a list of paired device names

!!! summary "Required Parameters"

    - Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code>

!!! example "Example Usage"

    - <code>connectBluetooth("JBL Pulse 2")</code>

---

### <h4 class="doc-head">disconnectBluetooth()</h4>

!!! quote "Description"

    - Disconnects the bluetooth device currently connected to the Alexa device

!!! summary "Required Parameters"

    - None Accepted

!!! example "Example Usage"

    - <code>disconnectBluetooth()</code>

---

### <h4 class="doc-head">removeBluetooth()</h4>

!!! quote "Description"

    Removes bluetooth device pairing from alexa device by name. (Look at attribute `btDevicesPaired` for a list of paired device names

!!! summary "Required Parameters"

    - Device Name (String): <code>Look at attribute `btDevicesPaired` for a list of paired device names</code>

!!! example "Example Usage"

    - <code>removeBluetooth("JBL Pulse 2")</code>

---

## <h2 class="doc-head">Sequences</h2>

### <h4 class="doc-head">executeSequenceCommand()</h4>

!!! quote "Description"

    Allows you to send a custom sequence of actions to Amazon as a single command that will be executed one at a time by Amazon.

!!! summary "Required Parameters"

    <p>Available Sequence Items (String):</p>
    <h5>General Items:</h5>
    ```
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
      - wait::value (seconds)
      - volume::value (0-100)
      - speak::message
      - announcement::message
      - announcementall::message
      - pushnotification::message
    ```

    <h5>Canned TTS Speech:</h5>
    ```
      - cannedtts_random::(accepted values below)
        * goodbye
        * confirmations
        * goodmorning
        * compliments
        * birthday
        * goodnight
        * iamhome
    ```

    <h5>Sounds:</h5>
    ```
      - sound::(accepted values below)

        Bells and Buzzer Sounds:
        * bells
        * buzzer
        * church_bell
        * doorbell1
        * doorbell2
        * doorbell3

        Holiday Sounds:
        * xmas_bells
        * halloween_door

        Misc Sounds:
        * air_horn
        * boing1
        * boing2
        * camera
        * squeaky_door
        * ticking_clock
        * trumpet

        Animals Sounds:
        * cat
        * dog
        * lion
        * rooster
        * wolf

        Scifi Sounds:
        * aircraft
        * engines
        * red_alert
        * shields
        * sirens
        * zap

        Crowd sounds:
        * applause
        * cheer
    ```

    <h5>Music:</h5>
    ```
      - cloudplayer::search term
    ```

    <h4>Enter the command in a format exactly like this:</h4>
    ```volume::40,, speak::this is so silly,, wait::60, weather,, cannedtts_random::goodbye,, traffic,, amazonmusic::green day,, volume::30```

    !!! tip "NOTE"

        Each command::value pair needs to be separated by a double comma `,,` and the separator between the command and value must be command`::`value

!!! example "Example Usage"

    - <code>executeSequenceCommand("volume::50,, speak::This is pretty cool,, volume::30")</code>
