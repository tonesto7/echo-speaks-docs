## Troubleshooting
 Sometimes you may receive an error message. Hopefully it is one of the below and we already have a fix for you!`

### Status Code 400/401

<p>This failure is almost always due to the expiration of your cookie.  Simply clear the log in information for the Heroku App and log back in to Amazon. This should fix your issue right away.</p>

**Steps to Fix**

1. Log into the https://dashboard.heroku.com website and click on your echo-speaks-xxxxxxx app. 
2. Then click on the **Settings**.
3. Scroll down to the ***Domains and Certificates*** section (pictured below).
4. Click on the link listed next to ***Domain***. 
   This will take you to the Amazon Cookie Retrieval and should look like the second picture below. 
5. Click on Orange ***Clear Login Info*** button to reset login info.

   ![](/static/img/TS-8.JPG)

   ![](/static/img/TS-9.JPG)

### Status Code 404

<p style="color: red;">Failed with status code 404 @line 890 (asyncCommandHandler</p>

  The Heroku service will put an app to sleep once it detects no activity for 30 minutes. 

The Echo Speaks system has a "Heart Beat" that talks to Heroku to keep the app awake. We are dealing with the cloud here, so sometimes there may be a delay in the Heart Beat, resulting in a nap for your server.

**Steps to Fix**

1. To remedy this it is helpful to open the Web Config page, which normally wakes the service up.  Sometimes this may take a couple of minutes. 

2. You can easily navigate to this page by following these steps. We recommend that you create a link to the page in case of any future incidents, then it will be a simple one click fix.

3. Log into the Heroku.com website and click on your app. Then click on ***Settings*** and scroll down to the ***Domains and Certificates*** section (pictured below). 

4. Click on the link listed next to ***Domain***. 
   This will take you to the Amazon Cookie Retrieval and should look like the second picture below. You should then be good to go. 
   If it wants you to log in again, then just do it and you should then be good.

   ![](/static/img/TS-8.JPG)

   ![](/static/img/TS-9.JPG)

--

### /ap/cvf Request Error

<p style="color: red;">/ap/cvf/request error</p>
If you see this error when you are attempting to do the Amazon Login part of the server deployment, We have found this to be due to having had the Amazon 2FA (2 Step Verfication) service activated, and then later turned off.
Unfortunately, once you have had this service turned on, it will have to be on for Echo Speaks to work properly. You may or may not remember ever having it turned on in the past, but with the presence of this error, it is very possible. To remedy this error you will need to turn the 2FA service back on and redeploy the server.
