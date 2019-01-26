
**In this section, this we review device attributes and some basic example values.**

### <h3 style="color: #FF6025;"><u>lastUpdated</u>: (String)</h3>
**Description**: Contains the date/time of the last device data refresh.\
**Output**: *`Dec 3, 2018 - 12:47:43 PM`*

---
### <h3 style="color: #FF6025;"><u>deviceStatus</u>: (String)</h3>
**Description**: Contains the current player status.\
**Output**: *`playing_echo_spot_gen1`*

---
### <h3 style="color: #FF6025;"><u>deviceType</u>: (String)</h3>
**Description**: Contains the device type (model number) identifier used by amazon.\
**Output**: *`A10A33FOX2NUBK`*

---
### <h3 style="color: #FF6025;"><u>deviceStyle</u>: (String)</h3>
**Description**: Contains the description from the developer for the current device.\
**Output**: *`Echo Spot`*

---
### <h3 style="color: #FF6025;"><u>deviceFamily</u>: (String)</h3>
**Description**: Contains the device family identifier used by amazon.\
**Output**: *`ROOK`*

---
### <h3 style="color: #FF6025;"><u>doNotDisturb</u>: (String)</h3>
**Description**: Contains the devices current Do not Disturb status.\
**Output**: *`false`*

---
### <h3 style="color: #FF6025;"><u>firmwareVer</u>: (String)</h3>
**Description**: Contains the devices current firmware revision.\
**Output**: *`625533420`*

---
### <h3 style="color: #FF6025;"><u>onlineStatus</u>: (String)</h3>
**Description**: Contains the devices current online status under amazon.\
**Output**: *`online`*

---
### <h3 style="color: #FF6025;"><u>btDeviceConnected</u>: (String)</h3>
**Description**: Contains the current bluetooth device connected to the alexa device.\
**Output**: *`JBL Pulse 2`*

---
### <h3 style="color: #FF6025;"><u>btDevicesPaired</u>: (String)</h3>
**Description**: Contains a list of currently paired (available) bluetooth devices to the alexa device.\
**Output**: *`[AirPods, JBL Pulse 2]`*

---
### <h3 style="color: #FF6025;"><u>currentStation</u>: (String)</h3>
**Description**: Contains a current music source.\
**Output**: *`Holiday Favorites Station`*

---
### <h3 style="color: #FF6025;"><u>currentAlbum</u>: (String)</h3>
**Description**: Contains a current audio album.\
**Output**: *`Dean Martin`*

---
### <h3 style="color: #FF6025;"><u>trackImage</u>: (String)</h3>
**Description**: Contains the current track image url.\
**Output**: *`https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg`*

---
### <h3 style="color: #FF6025;"><u>trackImageHtml</u>: (String)</h3>
**Description**: Contains the current track image as an html object for dashboards.\
**Output**: *`<img src="https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg"/>`*

---
### <h3 style="color: #FF6025;"><u>alarmVolume</u>: (String)</h3>
**Description**: Current alarm/reminder alert volume.\
**Output**: *`47`*

---
### <h3 style="color: #FF6025;"><u>alexaWakeWord</u>: (String)</h3>
**Description**: Contains the devices current wake word.\
**Output**: *`ALEXA`*

---
### <h3 style="color: #FF6025;"><u>wakeWords</u>: (Enum)</h3>
**Description**: Contains list of available alexa wake words.\
**Output**: <pre>["ALEXA","AMAZON","ECHO","COMPUTER"]</pre>

---
### <h3 style="color: #FF6025;"><u>alexaNotifications</u>: (JSON_Object)</h3>
**Description**: Contains list of current device notifications.\

**Output**: <pre>[]</pre>

---
### <h3 style="color: #FF6025;"><u>alexaPlaylists</u>: (JSON_Object)</h3>
**Description**: Contains current playlist in use by the device.\
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
### <h3 style="color: #FF6025;"><u>alexaMusicProviders</u>: (JSON_Object)</h3>
**Description**: Contains list of supported music playback services available.\
**Output**:
<pre>
[
    CLOUDPLAYER: My Library,
    AMAZON_MUSIC: Amazon Music,
    APPLE_MUSIC: Apple Music,
    I_HEART_RADIO: iHeartRadio,
    PANDORA: Pandora,
    TUNEIN: TuneIn
]
</pre>

---
### <h3 style="color: #FF6025;"><u>volumeSupported</u>: (Boolean)</h3>
**Description**: Identifies if device supports volume control actions.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>ttsSupported</u>: (Boolean)</h3>
**Description**: Identifies if device supports text to speech actions.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>musicSupported</u>: (Boolean)</h3>
**Description**: Identifies if device supports music player control actions.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>alarmSupported</u>: (Boolean)</h3>
**Description**: Identifies if device supports alarm management control actions.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>reminderSupported</u>: (Boolean)</h3>
**Description**: Identifies if device supports reminder management control actions.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>lastSpeakCmd</u>: (String)</h3>
**Description**: Contains the text used by the last Speak() command. Useful for replaying the last message.\
**Output**: *`The Front Door Lock is unlocked`*

---
### <h3 style="color: #FF6025;"><u>lastCmdSentDt</u>: (String)</h3>
**Description**: Contains the date/time of the last speak command.\
**Output**: *`Mon Dec 03 09:16:09 EST 2018`*

---
### <h3 style="color: #FF6025;"><u>wasLastSpokeToDevice</u>: (Boolean)</h3>
**Description**: Used to identify if the device was the last device spoken to on your account.\
**Output**: *`true`*

---
### <h3 style="color: #FF6025;"><u>lastSpokenToTime</u>: (Timestamp)</h3>
**Description**: Contains the timestamp of the last command given to the alexa device.\
**Output**: *`1548456169854`*

---
### <h3 style="color: #FF6025;"><u>lastVoiceActivity</u>: (String)</h3>
**Description**: Contains the voice command given to the alexa device.\
**Output**: *`what time is it`*
