
## <h2 class="doc-head">Playback</h2>

### <h4 class="doc-head">stopAllDevices()</h4>

!!! tip "NOTICE"

    Only send this command to a single device and not all devices

!!! quote "Description"

    Stops audio playback on all echo devices

!!! summary "Required Parameters"

    - None Accepted


!!! example "Example Usage"

    - <code>stopAllDevices()</code>

---

### <h4 class="doc-head">togglePlayback()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control

!!! quote "Description"

  Used to toggle between playing and stopped state

!!! example "Example Usage"

    - <code>togglePlayback()</code>

---

## <h2 class="doc-head">Music Search</h2>

### <h4 class="doc-head">searchMusic()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control amd has access to a valid music streaming service.

!!! quote "Description"

    Used to play music from the desired music provider by using a specific search phrase.

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

    - ProviderId (String): <code>[CLOUDPLAYER, AMAZON_MUSIC, APPLE_MUSIC, I_HEART_RADIO, PANDORA, SPOTIFY, TUNEIN]</code>

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchMusic("thriller", "AMAZON_MUSIC")</code>
    - <code>searchMusic("thriller on the upstairs", "AMAZON_MUSIC", 40)</code>
    - <code>searchMusic("thriller on the upstairs", "AMAZON_MUSIC", 40, 300)</code>

---

### <h4 class="doc-head">searchAmazonMusic()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control

!!! quote "Description"

    Used to play music from Amazon Music provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>String between 0-100 characters in length</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Between 0-100</code>
    - sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchAmazonMusic("thriller")</code>
    - <code>searchAmazonMusic("thriller on the upstairs", 40)</code>
    - <code>searchAmazonMusic("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchAppleMusic()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control and connected to Apple Music Skill.

!!! quote "Description"

    Used to play music from Apple Music provider.
    <br>
    I have alse discovered that when trying to play songs I had to add the word song to the search phrase.

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>String between 0-100 characters in length.</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Between 0-100</code>
    - sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchAppleMusic("thriller")</code>
    - <code>searchAppleMusic("thriller on the upstairs", 40)</code>
    - <code>searchAppleMusic("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchPandora()</h4>

!!! tip "NOTICE"

    Not available on all devices. Requires connection of Pandora skill.

!!! quote "Description"

    Used to play music from Pandora Radio provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length.</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchPandora("thriller")</code>
    - <code>searchPandora("thriller on the upstairs", 40)</code>
    - <code>searchPandora("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchIheart()</h4>

!!! tip "NOTICE"

    Not available on all devices. Requires connection of iHeart Radio skill.

!!! quote "Description"

    Used to play music from iHeartRadio provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchIheart("thriller")</code>
    - <code>searchIheart("thriller on the upstairs", 40)</code>
    - <code>searchIheart("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchSiriusXm()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control and Requires Sirius XM subscription.

!!! quote "Description"

    - Used to play music from Sirius XM provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length.</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - SleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchSiriusXm("thriller")</code>
    - <code>searchSiriusXm("thriller on the upstairs", 40)</code>
    - <code>searchSiriusXm("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchSpotify()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control and Requires Spotify subscription.

!!! quote "Description"

    - Used to play music from Spotify provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length.</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchSpotify("thriller")</code>
    - <code>searchSpotify("thriller on the upstairs", 40)</code>
    - <code>searchSpotify("thriller on the upstairs", 40, 300)</code>

---

### <h4 class="doc-head">searchTuneIn()</h4>

!!! tip "NOTICE"

    Not available on all devices. Only works on devices that support music playback control and connected to Tune-In Radio Skill.

!!! quote "Description"

    - Used to play music from Tune-In Radio provider

!!! summary "Required Parameters"

    - SearchPhrase (String): <code>Text between 0-100 characters in length.</code>

        !!! tip "Tips"

            This can be song name, playlist, artist.
            <br>
            You can also add an audio group in the search to have it played under a group of alexa devices.
            <br>
            I have discovered that when trying to play songs I had to add the word song to the search phrase.

!!! info "Optional Parameters"

    - Volume (Integer): <code>Number between 0-100</code>
    - sleepSeconds (Integer): <code>Number of seconds to play the music (Sleep timer)</code>

!!! example "Example Usage"

    - <code>searchTuneIn("thriller")</code>
    - <code>searchTuneIn("thriller on the upstairs", 40)</code>
    - <code>searchTuneIn("thriller on the upstairs", 40, 300)</code>

---

## <h2 style="color: #FF6025;">Music Testing</h2>

  <p>I've recently added a Music Search Test section to the main page of the SmartThings/Hubitat app.</p>

---
