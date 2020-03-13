## <h2 class="doc-head">Alarms</h2>

### <h3 class="doc-head">createAlarm()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <h5 class="blue">NOTE: Not all alexa devices support this feature</h5>
  This will create audible alarms for a specific device.
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Label (String): <code>Label to identify the alarm in the Alexa App</code></p>
  <p>Date (String): <code>This must be in this format (Year-Month-Day)</code></p>
  <p>Time (String): <code>This must be in this 24-hour time format (HH:MM)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>createAlarm("Alarm Label", "2019-01-03", "18:10")</code>
</div></div>

---

## <h2 class="doc-head">Reminders</h2>

### <h3 class="doc-head">createReminder()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  <h5 class="blue">NOTE: Not all alexa devices support this feature</h5>
  This will create audible Reminder and read back the label as the reminder message.
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Reminder (String): <code>Reminder message that is spoken back</code></p>
  <p>Date (String): <code>This must be in this format (Year-Month-Day)</code></p>
  <p>Time (String): <code>This must be in this 24-hour time format (HH:MM)</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>createReminder("Take out the trash", "2019-01-03", "18:10")</code>
</div></div>

---

## <h2 class="doc-head">Notifications</h2>

### <h3 class="doc-head">sendAlexaAppNotification()</h3>

<div class="desc-div"><div class="desc-div-title">Description:</div><div class="offset-0-5">
  Sends a push notification via the Alexa Mobile app.
</div></div>

<div class="params-req-div"><div class="params-req-div-title">Required Parameters</div><div class="offset-0-5">
  <p>Message (String): <code>String between 1-400 characters in length</code></p>
</div></div>

<div class="example-div"><div class="example-div-title">Example Usage:</div><div class="offset-0-5">
  <code>sendAlexaAppNotification("I have something important to alert you about")</code>
</div></div>
