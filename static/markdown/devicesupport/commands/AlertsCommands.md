## <h3 style="color: #FF6025;">createAlarm(Label, Date, Time)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not all alexa devices support this feature<br><br>
This will create audible alarms for a specific device.</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Label (String): <code>Label to identify the alarm in the Alexa App</code></p>
<p>Date (String): <code>This must be in this format (Year-Month-Day)</code></p>
<p>Time (String): <code>This must be in this 24-hour time format (HH:MM)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>createAlarm("Alarm Label", "2019-01-03", "18:10")</code></pre>

---
## <h3 style="color: #FF6025;">createReminder(Message, Date, Time)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
<code>NOTICE:</code>Not all alexa devices support this feature<br><br>
This will create audible Reminder and read back the label as the reminder message.</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Reminder (String): <code>Reminder message that is spoken back</code></p>
<p>Date (String): <code>This must be in this format (Year-Month-Day)</code></p>
<p>Time (String): <code>This must be in this 24-hour time format (HH:MM)</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example: <code>createReminder("Take out the trash", "2019-01-03", "18:10")</code></pre>

---
## <h3 style="color: #FF6025;">sendAlexaAppNotification(message)</h3>

<div style="background-color: #ebecec; margin: 0 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #9b9b9b; padding: 0.15em 0.5em;"><small><b><i>Description:</i></b></small></div><div style="padding: 0.5em;">
Sends a push notification via the Alexa Mobile app.</div></div>

<div style="background-color: #ebecec; margin: 20px 1em;"><div style="border-radius: 3px 3px 0 0; background-color: #3091d1; padding: 0.15em 0.5em;"><small><b><i>Required Parameters</i></b></small></div><div style="padding: 0.5em;">
<p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<pre style="background-color: #9b9b9b; margin: 0 1em; color: white;">Example Usage: <code>sendAlexaAppNotification("I have something important to alert you about")</code></pre>
