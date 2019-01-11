## <h3 style="color: #FF6025;">doNotDisturbOn()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Activates Do Not Disturb for the device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
## <h3 style="color: #FF6025;">doNotDisturbOff()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Disables Do Not Disturb for the device</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
## <h3 style="color: #FF6025;">storeCurrentVolume()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>This is not always accurate.  We can not aquire volume unless media is playing or change the volume using SmartThings once<br><br>
Captures current device volume</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
## <h3 style="color: #FF6025;">restoreLastVolume()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Restores volume to captured volume using storeCurrentVolume()</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
## <h3 style="color: #FF6025;">setAlarmVolume(value)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTE:</code>Only available on device that support alarms and reminders<br><br>
Sets the Echo Devices Alarm and Reminder Notification volume</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Volume (Integer): <code>Between 0-100</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>setAlarmVolume(40)</code></pre>

---
## <h3 style="color: #FF6025;">stopAllDevices()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Only send this command to a single device and not all devices<br><br>
Stops audio playback on all echo devices</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

---
## <h3 style="color: #FF6025;">setWakeWord("ECHO")</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Used to change the alexa wake word invocation name</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>WakeWord (String): <code>You can use one of the following: ["ALEXA", "AMAZON", "ECHO", "COMPUTER"]</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>setWakeWord("ECHO")</code></pre>

---
## <h3 style="color: #FF6025;">stopAllDevices()</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Only send this command to a single device and not all devices<br><br>
Stops audio playback on all echo devices</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
None Accepted</div></div>

