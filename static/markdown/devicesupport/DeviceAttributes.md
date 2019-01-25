**In this section, this we review device attributes and some basic example values.**

## <h5 style="color: #FF6025;"><u>lastUpdated: (String)</u></h5>
**Description**: Contains the date/time of the last device data refresh.\
**Output**: *`Dec 3, 2018 - 12:47:43 PM`*

## <h5 style="color: #FF6025;"><u>deviceStatus: (String)</u></h5>
**Description**: Contains the current player status.\
**Output**: *`playing_echo_spot_gen1`*

## <h5 style="color: #FF6025;"><u>deviceType: (String)</u></h5>
**Description**: Contains the device type (model number) identifier used by amazon.\
**Output**: *`A10A33FOX2NUBK`*

## <h5 style="color: #FF6025;"><u>deviceStyle: (String)</u></h5>
**Description**: Contains the description from the developer for the current device.\
**Output**: *`Echo Spot`*

## <h5 style="color: #FF6025;"><u>deviceFamily: (String)</u></h5>
**Description**: Contains the device family identifier used by amazon.\
**Output**: *`ROOK`*

## <h5 style="color: #FF6025;"><u>doNotDisturb: (String)</u></h5>
**Description**: Contains the devices current Do not Disturb status.\
**Output**: *`false`*

## <h5 style="color: #FF6025;"><u>firmwareVer: (String)</u></h5>
**Description**: Contains the devices current firmware revision.\
**Output**: *`625533420`*

## <h5 style="color: #FF6025;"><u>onlineStatus: (String)</u></h5>
**Description**: Contains the devices current online status under amazon.\
**Output**: *`online`*

## <h5 style="color: #FF6025;"><u>btDeviceConnected: (String)</u></h5>
**Description**: Contains the current bluetooth device connected to the alexa device.\
**Output**: *`JBL Pulse 2`*

## <h5 style="color: #FF6025;"><u>btDevicesPaired: (String)</u></h5>
**Description**: Contains a list of currently paired (available) bluetooth devices to the alexa device.\
**Output**: *`[AirPods, JBL Pulse 2]`*

## <h5 style="color: #FF6025;"><u>currentStation: (String)</u></h5>
**Description**: Contains a current music source.\
**Output**: *`Holiday Favorites Station`*

## <h5 style="color: #FF6025;"><u>currentAlbum: (String)</u></h5>
**Description**: Contains a current audio album.\
**Output**: *`Dean Martin`*

## <h5 style="color: #FF6025;"><u>trackImage: (String)</u></h5>
**Description**: Contains the current track image url.\
**Output**: *`https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg`*

## <h5 style="color: #FF6025;"><u>trackImageHtml: (String)</u></h5>
**Description**: Contains the current track image as an html object for dashboards.\
**Output**: *`<img src="https://m.media-amazon.com/images/I/71mwv+MFxSL.UL600.jpg"/>`*

## <h5 style="color: #FF6025;"><u>alarmVolume: (String)</u></h5>
**Description**: Current alarm/reminder alert volume.\
**Output**: *`47`*

## <h5 style="color: #FF6025;"><u>alexaWakeWord: (String)</u></h5>
**Description**: Contains the devices current wake word.\
**Output**: *`ALEXA`*

## <h5 style="color: #FF6025;"><u>wakeWords: (Enum)</u></h5>
**Description**: Contains list of available alexa wake words.\
**Output**: *`["ALEXA","AMAZON","ECHO","COMPUTER"]`*

## <h5 style="color: #FF6025;"><u>alexaNotifications: (JSON_Object)</u></h5>
**Description**: Contains list of current device notifications.\
**Output**: *`[]`*

## <h5 style="color: #FF6025;"><u>alexaPlaylists: (JSON_Object)</u></h5>
**Description**: Contains current playlist in use by the device.\
**Output**:
>`{`\
`   "Home Audio": [`\
`      {`\
`          "title": "Home Audio",`\
`          "playlistId": "a1553cd7-f732-4f7e-ac3c-995b94860e57",`\
`          "entryList": null,`\
`          "version": "1",`\
`          "trackCount": 0`\
`      }`\
`   ]`\
`}`

## <h5 style="color: #FF6025;"><u>alexaMusicProviders: (JSON_Object)</u></h5>
**Description**: Contains list of supported music playback services available.\
**Output**:  
>`[`\
`  CLOUDPLAYER: My Library,`\
`  AMAZON_MUSIC: Amazon Music,`\
`  APPLE_MUSIC: Apple Music,`\
`  I_HEART_RADIO: iHeartRadio,`\
`  PANDORA: Pandora,`\
`  TUNEIN: TuneIn`\
`]`

## <h5 style="color: #FF6025;"><u>volumeSupported: (Boolean)</u></h5>
**Description**: Identifies if device supports volume control actions.\
**Output**: `true`*

## <h5 style="color: #FF6025;"><u>ttsSupported: (Boolean)</u></h5>
**Description**: Identifies if device supports text to speech actions.\
**Output**: *`true`*

## <h5 style="color: #FF6025;"><u>musicSupported: (Boolean)</u></h5>
**Description**: Identifies if device supports music player control actions.\
**Output**: *`true`*

## <h5 style="color: #FF6025;"><u>alarmSupported: (Boolean)</u></h5>
**Description**: Identifies if device supports alarm management control actions.\
**Output**: *`true`*

## <h5 style="color: #FF6025;"><u>reminderSupported: (Boolean)</u></h5>
**Description**: Identifies if device supports reminder management control actions.\
**Output**: *`true`*

## <h5 style="color: #FF6025;"><u>lastSpeakCmd: (String)</u></h5>
**Description**: Contains the text used by the last Speak() command. Useful for replaying the last message.\
**Output**: *`The Front Door Lock is unlocked`*

## <h5 style="color: #FF6025;"><u>lastCmdSentDt: (String)</u></h5>
**Description**: Contains the date/time of the last speak command.\
**Output**: *`Mon Dec 03 09:16:09 EST 2018`*

## <h5 style="color: #FF6025;"><u>wasLastSpokeToDevice: (Boolean)</u></h5>
**Description**: Used to identify if the device was the last device spoken to on your account.\
**Output**: *`true`*

## <h5 style="color: #FF6025;"><u>lastSpokenToTime: (Timestamp)</u></h5>
**Description**: Contains the timestamp of the last command given to the alexa device.\  
**Output**: *`1548456169854`*

## <h5 style="color: #FF6025;"><u>lastVoiceActivity: (String)</u></h5>
**Description**: Contains the voice command given to the alexa device.\
**Output**: *`what time is it`*
