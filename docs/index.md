---
title: Echo Speaks Documentation
summary: A brief description of my document.
authors:
  - A. Santilli
date: 2020-03-11
some_url: https://tonesto7.github.io/echo-speaks-docs/#
---

<h3 style="font-size: 40px;"><img style="vertical-align: middle;" src="img/EchoSpeaks.png"></img> Echo Speaks</h3>
### <h3 style="color: #FF6025;">About the Project</h3>

**_Echo Speaks_** is a utilitarian smartapp and device handler that allows you to discover, select, and use the Amazon Alexa Devices directly in your Smart Home Environment. It will give you the ability to wake your Alexa devices remotely to speak any text that you wish for almost any given scenario. Gone are the days of using expensive speakers connected to your hub. The day that you have all been waiting for has arrived.

|                    |                                    |
| :----------------- | ---------------------------------- |
| **Author:**        | Anthony Santilli                   |
| **Documentation:** | Jason Headley and Anthony Santilli |
| **Contributor:**   | Tony Fleisher (@TonyFleisher)      |

### <h3 style="color: #FF6025;">Software (Current Release)</h3>

The SmartThings | Hubitat Apps/SmartApps & Device code is found on the GitHub site:

| **_Apps/SmartApps:_** | **_Source Code URL:_**                                                                                                                           | **_Version_** |
| :-------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| Echo Speaks:          | [Parent App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks.src/echo-speaks.groovy)                | v3.6.1.1      |
| Echo Speaks Actions:  | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-actions.src/echo-speaks-actions.groovy) | v3.6.1.0      |
| Echo Speaks Zones:    | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-zones.src/echo-speaks-zones.groovy)     | v3.6.1.0      |

| **_Hubitat Devices:_**                | **_Source Code URL:_**                                                                                           | **_Version_** |
| :------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------- |
| Echo Speaks Driver (Hubitat Only):    | [Device Driver](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/drivers/echo-speaks-device.groovy) | v3.6.1.0      |
| Echo Speaks Websocket (Hubitat Only): | [Device Driver](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/drivers/echo-speaks-ws.groovy)     | v3.3.0.0      |

| **_SmartThings Devices:_**             | **_Source Code URL:_**                                                                                                                                | **_Version_** |
| :------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Echo Speaks Device (SmartThings Only): | [Device Handler](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/devicetypes/tonesto7/echo-speaks-device.src/echo-speaks-device.groovy) | v3.6.1.0      |

| **_Server:_**       | **_Source Code URL:_**                                          | **_Version_** |
| :------------------ | --------------------------------------------------------------- | ------------- |
| Echo Speaks Server: | [Heroku Server](https://github.com/tonesto7/echo-speaks-server) | v2.4.1        |

### <h3 style="color: #FF6025;">Getting Started</h3>

**The following items will be required for successful installation on each of the 2 platforms below:**<br>

![](img/logos/st_logo_64.png) SmartThings Platform

<p><u>Requirements:</u></p>
* SmartThings IDE Account access
* SmartThings account with active ST Hub (V1, V2, V3, or SmartThings WiFi Mesh)
* SmartThings Classic mobile app installed on your mobile device

<p><u>Code Install:</u></p>
* [SmartThings Code Install](/echo-speaks-docs/installation/smartthings/installs)

---

![](img/logos/he_logo_64.png) Hubitat Platform

<p><u>Requirements:</u></p>
* Hubitat Hub with Web Portal access

<p><u>Code Install:</u></p>
* [Hubitat Code Install](/echo-speaks-docs/installation/hubitat/installs)

---

<h4>Other Items</h4>

- During the setup process, you will be required to create a free HerokuApp account (Existing accounts will work as well)
- Amazon 2 Factor Authentication. - _Not required (Unless it was enabled in the past), but it's HIGHLY recommended that you enable it for security._

### <h3 style="color: #FF6025;">Recent Changes</h3>

- New Items will eventually be added here.... TBD
