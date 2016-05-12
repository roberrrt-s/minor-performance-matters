# Performence Matters - Robert Spier

## Clean edit
![alt tag](http://i.imgur.com/a4ifYkH.png)

De originele repository, was natuurlijk dramatisch

## Updated HTML/CSS/JS via BEM
![alt tag](http://i.imgur.com/0RKHF2F.png)

Kleine verbetering in verband met minder query's doordat de BEM toegepast was.

## picture srcset gebruikt
![alt tag](http://i.imgur.com/xlNwu3Z.png)

Héél weinig verbetering met srcset, maar voor mobiele telefoons wel een grote verbetering met 2/3G

## SPA / jQuery
![alt tag](http://i.imgur.com/xAUDZRo.jpg)

Grootste verandering, jQuery weghalen was de beste keuze ooit, verder zorgt de SPA voor een kleine verbetering

## Service worker
![alt tag](http://i.imgur.com/yv6yrh0.png)

Het cachen van afbeeldingen, javascript en css zorgt voor een kleine verbetering bij de tweede load.

## Optimized XHR requests.
![alt tag](http://i.imgur.com/xzmAQmE.png)

Het optimaliseren van de requests geeft weinig tot geen verbetering omdat alles toch bij de eerste load wordt ingeladen.

## Optimized google font import
![alt tag](http://i.imgur.com/5P5vw2X.png)

Google Fonts importeerde 9 verschillende soorten fonts, ik heb de subset aangezet zodat hij alleen de basis binnenhaalt, en ipv 9 verschillende weights alleen de 400.

## Added font-observer
![alt tag](http://i.imgur.com/5P5vw2X.png)

De font observer is een kleine toevoeging, van grote waarde op langzame devices, op m'n pc zelf merk ik er niet zoveel van

## Progressive Web Apps (research)

A progressive web application enables the user feeling for users that they're experiencing a native mobile application, rather than a website. This generally gives the user a more stable experience when browsing the website. There has been some speculation around Google willing to enable mobile websites as native applications, during the last Chrome Dev Summit, this idea was finalized as a 'Progressive Web Application'

These applications enable users to create a button on their homescreen, and opening the website without any address section (which gives fullscreen a new meaning). In addition, you are able to send push notification to users, even when they are offline, and you're not restricted to the app store. Everyone is able to visit your web app

### Sources
* http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/
* https://addyosmani.com/blog/getting-started-with-progressive-web-apps/
* https://developers.google.com/web/progressive-web-apps
* https://arc.applause.com/2015/11/30/application-shell-architecture/