## <h2 class="doc-head">Alarms</h2>

### <h4 class="doc-head">createAlarm()</h4>

!!! tip "NOTICE"

    Not all alexa devices support this feature

!!! quote "Description"

    This will create audible alarms for a specific device.

!!! summary "Required Parameters"

    - Label (String): <code>Label to identify the alarm in the Alexa App</code>
    - Date (String): <code>This must be in this format (Year-Month-Day)</code>
    - Time (String): <code>This must be in this 24-hour time format (HH:MM)</code>

!!! example "Example Usage"

    - <code>createAlarm("Alarm Label", "2019-01-03", "18:10")</code>

---

## <h2 class="doc-head">Reminders</h2>

### <h4 class="doc-head">createReminder()</h4>

!!! tip "NOTICE"

    Not all alexa devices support this feature

!!! quote "Description"

    This will create audible Reminder and read back the label as the reminder message.

!!! summary "Required Parameters"

    - Reminder (String): <code>Reminder message that is spoken back</code>
    - Date (String): <code>This must be in this format (Year-Month-Day)</code>
    - Time (String): <code>This must be in this 24-hour time format (HH:MM)</code>

!!! example "Example Usage"

    - <code>createReminder("Take out the trash", "2019-01-03", "18:10")</code>

---

## <h2 class="doc-head">Notifications</h2>

### <h4 class="doc-head">sendAlexaAppNotification()</h4>

!!! quote "Description"

    Sends a push notification via the Alexa Mobile app.

!!! summary "Required Parameters"

    - Message (String): <code>String between 1-400 characters in length</code>

!!! example "Example Usage"

    - <code>sendAlexaAppNotification("I have something important to alert you about")</code>
