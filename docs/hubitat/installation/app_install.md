### <h3 style="color: #FF6025;">Step 1:</h3>
Proceed to your Hubitat Dashboard

![screenshot](img/he_app_install_1.png)

---
### <h3 style="color: #FF6025;">Step 2:</h3>
Navigate to the Apps Code Section of the by clicking on **`Apps Code`** tab at the left of your screen:

![screenshot](img/he_app_install_2.jpg)

---
### <h3 style="color: #FF6025;">Step 3:</h3>
Create a new smartapp by clicking on the `+New App` button found in the top right corner of this page:

![screenshot](img/he_app_install_3.png)

---
### <h3 style="color: #FF6025;">Step 4:</h3>
Click on the `Import` button at the top of the page:

![screenshot](img/he_app_install_4.png)

* Copy this URL into the window: `https://raw.githubusercontent.com/tonesto7/echo-speaks/master/apps/tonesto7/echo-speaks.src/echo-speaks.groovy`
* Click `Import`
* Click `Save`

---
### <h3 style="color: #FF6025;">Step 5:</h3>
You will now enable the Apps OAuth configuration. Please click on the **`OAuth`** button and scroll to the bottom of the next screen.

![screenshot](img/he_app_install_5.png)

---
### <h3 style="color: #FF6025;">Step 6:</h3>
On the **OAuth** page click the **`Enable OAuth in App`** button as seen below:

![screenshot](img/he_app_install_6.png)

---
### <h3 style="color: #FF6025;">Step 7:</h3>
Finally, click on **`Update`**.

![screenshot](img/he_app_install_7.png)

---
### <h3 style="color: #FF6025;">Step 8:</h3>
Repeat Steps 3 & 4 for the Actions Child App: ```https://raw.githubusercontent.com/tonesto7/echo-speaks/master/apps/echo-speaks-actions.groovy```

---
### <h3 style="color: #FF6025;">Step 9:</h3>
Repeat Steps 3 & 4 for the Zone Child App: ```https://raw.githubusercontent.com/tonesto7/echo-speaks/master/apps/echo-speaks-zones.groovy```

---
### <h3 style="color: #FF6025;">Step 10:</h3>
Continue Device Driver Install Here:

[Device Manual Install](./hubitat/installation/device_install)
