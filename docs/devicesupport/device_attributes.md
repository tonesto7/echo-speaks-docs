**In this section, this we review device attributes and some basic example values.**

---

### <h4 style="color: #FF6025;"><u>alarmVolume</u>: (String)</h4>

**Description**: Current alarm/reminder alert volume.<br>
**Output**: _`47`_

---

### <h4 style="color: #FF6025;"><u>alarmSupported</u>: (Boolean)</h4>

**Description**: Identifies if device supports alarm management control actions.<br>
**Output**: _`true`_

<!-- ---
### <h4 style="color: #FF6025;"><u>alexaNotifications</u>: (JSON_Object)</h4>
**Description**: Contains list of current device notifications.<br>

**Output**: <pre>[]</pre> -->

---

### <h4 style="color: #FF6025;"><u>alexaPlaylists</u>: (JSON_Object)</h4>

**Description**: Contains current playlist in use by the device.<br>
**Output**:

<pre>
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
</pre>

---

### <h4 style="color: #FF6025;"><u>alexaWakeWord</u>: (String)</h4>

**Description**: Contains the devices current wake word.<br>
**Output**: _`ALEXA`_

---

### <h4 style="color: #FF6025;"><u>btDeviceConnected</u>: (String)</h4>

**Description**: Contains the current bluetooth device connected to the alexa device.<br>
**Output**: _`JBL Pulse 2`_

---

### <h4 style="color: #FF6025;"><u>btDevicesPaired</u>: (String)</h4>

**Description**: Contains a list of currently paired (available) bluetooth devices to the alexa device.<br>
**Output**: _`[AirPods, JBL Pulse 2]`_

---

### <h4 style="color: #FF6025;"><u>currentAlbum</u>: (String)</h4>

**Description**: Contains a current audio album.<br>
**Output**: _`Dean Martin`_

---

### <h4 style="color: #FF6025;"><u>currentStation</u>: (String)</h4>

**Description**: Contains a current music source.<br>
**Output**: _`Holiday Favorites Station`_

---

### <h4 style="color: #FF6025;"><u>deviceFamily</u>: (String)</h4>

**Description**: Contains the device family identifier used by amazon.<br>
**Output**: _`ROOK`_

---

### <h4 style="color: #FF6025;"><u>deviceStatus</u>: (String)</h4>

**Description**: Contains the current player status.<br>
**Output**: _`playing_echo_spot_gen1`_

---

### <h4 style="color: #FF6025;"><u>deviceStyle</u>: (String)</h4>

**Description**: Contains the description from the developer for the current device.<br>
**Output**: _`Echo Spot`_

---

### <h4 style="color: #FF6025;"><u>deviceType</u>: (String)</h4>

**Description**: Contains the device type (model number) identifier used by amazon.<br>
**Output**: _`A10A33FOX2NUBK`_

---

### <h4 style="color: #FF6025;"><u>doNotDisturb</u>: (String)</h4>

**Description**: Contains the devices current Do not Disturb status.<br>
**Output**: _`false`_

---

### <h4 style="color: #FF6025;"><u>followUpMode</u>: (String)</h4>

**Description**: Whether the device immediately waits for another command after executing the first one.<br>
**Output**: _`true`_

---

### <h4 style="color: #FF6025;"><u>firmwareVer</u>: (String)</h4>

**Description**: Contains the devices current firmware revision.<br>
**Output**: _`625533420`_

---

### <h4 style="color: #FF6025;"><u>lastCmdSentDt</u>: (String)</h4>

**Description**: Contains the date/time of the last speak command.<br>
**Output**: _`Mon Dec 03 09:16:09 EST 2018`_

---

### <h4 style="color: #FF6025;"><u>lastSpeakCmd</u>: (String)</h4>

**Description**: Contains the text used by the last Speak() command. Useful for replaying the last message.<br>
**Output**: _`The Front Door Lock is unlocked`_

---

### <h4 style="color: #FF6025;"><u>lastSpokenToTime</u>: (Timestamp)</h4>

**Description**: Contains the timestamp of the last command given to the alexa device.<br>
**Output**: _`1548456169854`_

---

### <h4 style="color: #FF6025;"><u>lastUpdated</u>: (String)</h4>

**Description**: Contains the date/time of the last device data refresh.<br>
**Output**: _`Dec 3, 2018 - 12:47:43 PM`_

---

### <h4 style="color: #FF6025;"><u>lastVoiceActivity</u>: (String)</h4>

**Description**: Contains the last voice command given to the alexa device.<br>
**Output**: _`what time is it`_

---

### <h4 style="color: #FF6025;"><u>onlineStatus</u>: (String)</h4>

**Description**: Contains the devices current online status under amazon.<br>
**Output**: _`online`_

---

### <h4 style="color: #FF6025;"><u>permissions</u>: (Boolean)</h4>

**Description**: Identifies the devices available features.<br>
**Output**: _`[TTS, alarms, amazonMusic, announce, appleMusic, bluetoothControl, doNotDisturb, flashBriefing, followUpMode, iHeartRadio, isEchoDevice, isMultiroomMember, mediaPlayer, microphone, pandoraRadio, reminders, spotify, tuneInRadio, volumeControl, wakeWord]`_

---

### <h4 style="color: #FF6025;"><u>reminderSupported</u>: (Boolean)</h4>

**Description**: Identifies if device supports reminder management control actions.<br>
**Output**: _`true`_

---

### <h4 style="color: #FF6025;"><u>supportedMusic</u>: (String)</h4>

**Description**: Identifies the devices supported music providers.<br>
**Output**: _`Amazon Music, Apple Music, My Library, Pandora, TuneIn, iHeartRadio`_

---

### <h4 style="color: #FF6025;"><u>trackImage</u>: (String)</h4>

**Description**: Contains the current track image url.<br>
**Output**: _`https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg`_

---

### <h4 style="color: #FF6025;"><u>trackImageHtml</u>: (String)</h4>

**Description**: Contains the current track image as an html object for dashboards.<br>
**Output**: _`<img src="https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg"/>`_

---

### <h4 style="color: #FF6025;"><u>ttsSupported</u>: (Boolean)</h4>

**Description**: Identifies if device supports text to speech actions.<br>
**Output**: _`true`_

---

### <h4 style="color: #FF6025;"><u>volumeSupported</u>: (Boolean)</h4>

**Description**: Identifies if device supports volume control actions.<br>
**Output**: _`true`_

---

### <h4 style="color: #FF6025;"><u>wakeWords</u>: (Enum)</h4>

**Description**: Contains list of available alexa wake words.<br>
**Output**: <pre>["ALEXA","AMAZON","ECHO","COMPUTER"]</pre>

---

### <h4 style="color: #FF6025;"><u>wasLastSpokeToDevice</u>: (Boolean)</h4>

**Description**: Used to identify if the device was the last device spoken to on your account.<br>
**Output**: _`true`_

---

### <h4 style="color: #FF6025;"><u>wifiNetwork</u>: (String)</h4>

**Description**: Contains the devices current Wifi Network SSID.<br>
**Output**: _`Echo Speaks Wifi`_
