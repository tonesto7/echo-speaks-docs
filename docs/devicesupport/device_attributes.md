**In this section, this we review device attributes and some basic example values.**

---

### <h4 class="doc-head">alarmVolume: (String)</h4>

!!! quote "Description"

    Current alarm/reminder alert volume.

    !!! example "Example Output"

        **47**

---

### <h4 class="doc-head">alarmSupported: (Boolean)</h4>

!!! quote "Description"

    Identifies if device supports alarm management control actions.

    !!! example "Example Output"

        **true**


---

### <h4 class="doc-head">alexaPlaylists: (JSON_Object)</h4>

!!! quote "Description"

    Contains current playlist in use by the device.

    !!! example "Example Output"

    ``` json
        {
           "Home Audio": [
              {
                  "title": "Home Audio",
                  "playlistId": "a1553cd7-f732-4f7e-ac3c-995b94860e57",
                  "entryList": null,
                  "version": "1",
                  "trackCount": 0
              }
           ]
        }
    ```

---

### <h4 class="doc-head">alexaWakeWord: (String)</h4>

!!! quote "Description"

    Contains the devices current wake word.

    !!! example "Example Output"

        **ALEXA**

---

### <h4 class="doc-head">audioTrackData: (JSON_Object)</h4>

!!! quote "Description"

    Contains current music track data as JSON.

    !!! example "Example Output"

    ``` json
        {
          "title": "Blinding Lights",
          "artist": "The Weeknd",
          "album": "After Hours [Explicit]",
          "albumArtUrl": "https://m.media-amazon.com/images/I/81XiZxda-8L._UL600_.jpg",
          "mediaSource":"Amazon Music"
        }
    ```

---

### <h4 class="doc-head">btDeviceConnected: (String)</h4>

!!! quote "Description"

    Contains the current bluetooth device connected to the alexa device.

    !!! example "Example Output"

        **JBL Pulse 2**

---

### <h4 class="doc-head">btDevicesPaired: (String)</h4>

!!! quote "Description"

    Contains a list of currently paired (available) bluetooth devices to the alexa device.

    !!! example "Example Output"

        **[AirPods, JBL Pulse 2]**

---

### <h4 class="doc-head">currentAlbum: (String)</h4>

!!! quote "Description"

    Contains a current audio album.

    !!! example "Example Output"

        **Dean Martin**

---

### <h4 class="doc-head">currentStation: (String)</h4>

!!! quote "Description"

    Contains a current music source.

    !!! example "Example Output"

        **Holiday Favorites Station**

---

### <h4 class="doc-head">deviceFamily: (String)</h4>

!!! quote "Description"

    Contains the device family identifier used by amazon.

    !!! example "Example Output"

        **ROOK**

---

### <h4 class="doc-head">deviceStatus: (String)</h4>

!!! quote "Description"

    Contains the current player status.

    !!! example "Example Output"

        **playing_echo_spot_gen1**

---

### <h4 class="doc-head">deviceStyle: (String)</h4>

!!! quote "Description"

    Contains the description from the developer for the current device.

    !!! example "Example Output"

        **Echo Spot**

---

### <h4 class="doc-head">deviceType: (String)</h4>

!!! quote "Description"

    Contains the device type (model number) identifier used by amazon.

    !!! example "Example Output"

        **A10A33FOX2NUBK**

---

### <h4 class="doc-head">doNotDisturb: (String)</h4>

!!! quote "Description"

    Contains the devices current Do not Disturb status.

    !!! example "Example Output"

        _`false`_

---

### <h4 class="doc-head">followUpMode: (String)</h4>

!!! quote "Description"

    Whether the device immediately waits for another command after executing the first one.

    !!! example "Example Output"

        **true**

---

### <h4 class="doc-head">firmwareVer: (String)</h4>

!!! quote "Description"

    Contains the devices current firmware revision.

    !!! example "Example Output"

        **625533420**

---

### <h4 class="doc-head">lastAnnouncement: (String)</h4>

!!! quote "Description"

    Contains the text used by the last playAnnouncement() command. Useful for replaying the last announcement message.

    !!! example "Example Output"

        **The Front Door Lock is unlocked**

---

### <h4 class="doc-head">lastCmdSentDt: (String)</h4>

!!! quote "Description"

    Contains the date/time of the last speak command.

    !!! example "Example Output"

        **Mon Dec 03 09:16:09 EST 2018**

---

### <h4 class="doc-head">lastSpeakCmd: (String)</h4>

!!! quote "Description"

    Contains the text used by the last Speak() command. Useful for replaying the last message.

    !!! example "Example Output"

        **The Front Door Lock is unlocked**

---

### <h4 class="doc-head">lastSpokenToTime: (Timestamp)</h4>

!!! quote "Description"

    Contains the timestamp of the last command given to the alexa device.

    !!! example "Example Output"

        **1548456169854**

---

### <h4 class="doc-head">lastUpdated: (String)</h4>

!!! quote "Description"

    Contains the date/time of the last device data refresh.

    !!! example "Example Output"

        **Dec 3, 2018 - 12:47:43 PM**

---

### <h4 class="doc-head">lastVoiceActivity: (String)</h4>

!!! quote "Description"

    Contains the last voice command given to the alexa device.

    !!! example "Example Output"

        **what time is it**

---

### <h4 class="doc-head">onlineStatus: (String)</h4>

!!! quote "Description"

    Contains the devices current online status under amazon.

    !!! example "Example Output"

        **online**

---

### <h4 class="doc-head">permissions: (Boolean)</h4>

!!! quote "Description"

    Identifies the devices available features.

    !!! example "Example Output"

    **[TTS, alarms, amazonMusic, announce, appleMusic, bluetoothControl, doNotDisturb, flashBriefing, followUpMode, iHeartRadio, isEchoDevice, isMultiroomMember, mediaPlayer, microphone, pandoraRadio, reminders, spotify, tuneInRadio, volumeControl, wakeWord]**

---


### <h4 class="doc-head">supportedMusic: (String)</h4>

!!! quote "Description"

    Identifies the devices supported music providers.

    !!! example "Example Output"

        **Amazon Music, Apple Music, My Library, Pandora, TuneIn, iHeartRadio**

---

### <h4 class="doc-head">trackImage: (String)</h4>

!!! quote "Description"

    Contains the current track image url.

    !!! example "Example Output"

        **https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg**

---

### <h4 class="doc-head">trackImageHtml: (String)</h4>

!!! quote "Description"

    Contains the current track image as an html object for dashboards.

    !!! example "Example Output"

        **<img src="https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg"/>**

---

### <h4 class="doc-head">wakeWords: (Enum)</h4>

!!! quote "Description"

    Contains list of available alexa wake words.

    !!! example "Example Output"

        **["ALEXA","AMAZON","ECHO","COMPUTER"]**

---

### <h4 class="doc-head">wasLastSpokeToDevice: (Boolean)</h4>

!!! quote "Description"

    Used to identify if the device was the last device spoken to on your account.

    !!! example "Example Output"

        **true**

---
