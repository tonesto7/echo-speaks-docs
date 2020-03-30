---
title: Echo Speaks Documentation
summary: A brief description of my document.
authors:
  - A. Santilli
date: 2020-03-11
some_url: https://tonesto7.github.io/echo-speaks-docs/#
---

<h3 style="font-size: 30px;"><img style="vertical-align: middle;" src="img/EchoSpeaks.png"></img> Echo Speaks</h3>

## <h2 class="doc-head">About the Project</h2>

### <h3 class="doc-head">Description</h3>

- **Echo Speaks** is a utilitarian smartapp and device handler that allows you to discover, select, and use the Amazon Alexa Devices directly in your Smart Home Environment. It will give you the ability to wake your Alexa devices remotely to speak any text that you wish for almost any given scenario. There are now many different built-in automations that allow actions based on events in your home. Gone are the days of using expensive speakers connected to your hub. The day that you have all been waiting for has arrived.

### <h3 class="doc-head">Attributions</h3>

|                    |                                    |
| :----------------- | ---------------------------------- |
| **Author:**        | Anthony Santilli                   |
| **Documentation:** | Anthony Santilli and Jason Headley |
| **Contributor:**   | Tony Fleisher (@TonyFleisher)      |

## <h2 class="doc-head">Getting Started</h2>

### <h3 class="doc-head">SmartThings Platform</h3>

![](./img/logos/st_logo_64.png)

#### <h4 class="doc-head">Code Links</h4>

| **_Code Type:_**                       | **_Source Code URL:_**                                                                                                                                | **_Version_** |
| :------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Echo Speaks:                           | [Parent App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks.src/echo-speaks.groovy)                     | v3.6.1.1      |
| Echo Speaks Actions:                   | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-actions.src/echo-speaks-actions.groovy)      | v3.6.1.0      |
| Echo Speaks Zones:                     | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-zones.src/echo-speaks-zones.groovy)          | v3.6.1.0      |
| Echo Speaks Device (SmartThings Only): | [Device Handler](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/devicetypes/tonesto7/echo-speaks-device.src/echo-speaks-device.groovy) | v3.6.1.0      |
| Echo Speaks Server:                    | [Heroku Server](https://github.com/tonesto7/echo-speaks-server)                                                                                       | v2.4.1        |

#### <h4 class="doc-head">Requirements</h4>

- SmartThings IDE Account access
- SmartThings account with active ST Hub (V1, V2, V3, or SmartThings WiFi Mesh)
- SmartThings Classic mobile app installed on your mobile device
- During the setup process, you will be required to create a free HerokuApp account (Existing accounts will work as well)

#### <h4 class="doc-head">Recommendations</h4>

- Amazon 2 Factor Authentication. - _Not required (Unless it was enabled in the past), but it's HIGHLY recommended that you enable it for security._

#### <h4 class="doc-head">Begin Installation</h4>

- [SmartThings Code Install](./installation/smartthings/types.md)

---

### <h3 class="doc-head">Hubitat Platform</h3>

![](./img/logos/he_logo_64.png)

#### <h4 class="doc-head">Code Links</h4>

| **_Code Type:_**                      | **_Source Code URL:_**                                                                                                                           | **_Version_** |
| :------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| Echo Speaks:                          | [Parent App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks.src/echo-speaks.groovy)                | v3.6.1.1      |
| Echo Speaks Actions:                  | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-actions.src/echo-speaks-actions.groovy) | v3.6.1.0      |
| Echo Speaks Zones:                    | [Child App](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/smartapps/tonesto7/echo-speaks-zones.src/echo-speaks-zones.groovy)     | v3.6.1.0      |
| Echo Speaks Driver (Hubitat Only):    | [Device Driver](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/drivers/echo-speaks-device.groovy)                                 | v3.6.1.0      |
| Echo Speaks Websocket (Hubitat Only): | [Device Driver](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/drivers/echo-speaks-ws.groovy)                                     | v3.3.0.0      |
| Echo Speaks Server:                   | [Heroku Server](https://github.com/tonesto7/echo-speaks-server)                                                                                  | v2.4.1        |

#### <h4 class="doc-head">Requirements</h4>

- Hubitat Hub with Web Portal access
- During the setup process, you will be required to create a free HerokuApp account (Existing accounts will work as well)

#### <h4 class="doc-head">Recommendations</h4>

- Amazon 2 Factor Authentication. - _Not required (Unless it was enabled in the past), but it's HIGHLY recommended that you enable it for security._

#### <h4 class="doc-head">Begin Installation</h4>

- [Hubitat Code Install](./installation/hubitat/types.md)

---

## <h2 class="doc-head">Recent Changes</h2>

### <h3 class="doc-head">ChangeLog</h3>

- [View Change Log](https://raw.githubusercontent.com/tonesto7/echo-speaks/master/resources/changelog.txt)
