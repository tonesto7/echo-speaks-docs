**There will be times when you may receive an error message!
Hopefully you will find a fix from one of the items below!**

---
## <h3 style="color: #FF6025;">Status Code 400/401</h3>

<p>This failure is almost always due to the expiration of your cookie.  Simply clear the log in information for the Heroku App and log back in to Amazon. This should fix your issue right away.</p>

**Steps to Fix**

### <h3 style="color: #FF6025;">Step 1:</h3>
Log into the https://dashboard.heroku.com website and click on your echo-speaks-xxxxxxx app.

### <h3 style="color: #FF6025;">Step 2:</h3>
Then click on the **Settings**.

### <h3 style="color: #FF6025;">Step 3:</h3>
Scroll down to the ***Domains and Certificates*** section (pictured below).

### <h3 style="color: #FF6025;">Step 4:</h3>
Click on the link listed next to ***Domain***.

![screenshot](https://tonesto7.github.io/echo-speaks-docs/static/img/TS-8.JPG)

This will take you to the Amazon Cookie Retrieval page which looks similar to the picture below.
If it shows 'Authentication Good` then you should then be good to go.

If you are directed to log in again, then just do it and you should then be good.

![screenshot](https://tonesto7.github.io/echo-speaks-docs/static/img/TS-9.JPG)

---
## <h3 style="color: #FF6025;">Status Code 404 (DEPRECATED)</h3>

<p style="color: red;">Failed with status code 404 @line 890 (asyncCommandHandler)</p>

  The Heroku service will put an app to sleep once it detects no activity for 30 minutes. 

The Echo Speaks system has a "Heart Beat" that talks to Heroku to keep the app awake. We are dealing with the cloud here, so sometimes there may be a delay in the Heart Beat, resulting in a nap for your server.

**Steps to Fix**

### <h3 style="color: #FF6025;">Step 1:</h3>
To remedy this it is helpful to open the Web Config page. Which normally wakes the service up.  Sometimes this may take a couple of minutes. 

### <h3 style="color: #FF6025;">Step 2:</h3>
You can easily navigate to this page by following these steps. We recommend that you create a link to the page in case of any future incidents, then it will be a simple one click fix.

### <h3 style="color: #FF6025;">Step 3:</h3>
Log into the Heroku.com website and click on your app. Then click on ***Settings*** and scroll down to the ***Domains and Certificates*** section (pictured below). 

### <h3 style="color: #FF6025;">Step 4:</h3>
Click on the link listed next to ***Domain***.

![screenshot](https://tonesto7.github.io/echo-speaks-docs/static/img/TS-8.JPG)

This will take you to the Amazon Cookie Retrieval page which looks similar to the picture below.
If it shows 'Authentication Good` then you should then be good to go.

If you are directed to log in again, then just do it and you should then be good.

![screenshot](https://tonesto7.github.io/echo-speaks-docs/static/img/TS-9.JPG)

---
## <h3 style="color: #FF6025;">/ap/cvf Request Error</h3>

If you see this error when you are attempting to do the Amazon Login part of the server deployment, We have found this to be due to having had the Amazon 2FA (2 Step Verfication) service activated, and then later turned off.
Unfortunately, once you have had this service turned on, it will have to be on for Echo Speaks to work properly. You may or may not remember ever having it turned on in the past, but with the presence of this error, it is very possible. To remedy this error you will need to turn the 2FA service back on and redeploy the server.

---
##### <h3 style="color: #FF6025;">Didn't See your Issue here?:</h3>
You can view open issues or create a new one by following this guide:

[Reporting Issues](https://tonesto7.github.io/echo-speaks-docs/#/docs/support/reportIssues)
