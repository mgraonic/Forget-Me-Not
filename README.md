# Forget Me Not
Forget Me Not is a simple Raspberry Pi-based system you can use to monitor your plant's soil moisture. Realtime moisture readings are displayed online in an easy-to-read graph. If the moisture drops below your chosen threshold, Forget Me Not sends you a text.

# How It Works

The Raspberry Pi (RPi) receives analog voltage readings from a resistive sensor placed in the plant's soil. The RPi only has digital input pins, so those analog readings are converted to a digital signal using an analog-to-digital converter (ADC). The RPi (already connected to the internet) then leverages a Python script to log the realtime readings in Firebase. If the reading is at or below a designated threshold, a text is sent to your phone via the Twilio API. The frontend reads the data stored in Firebase and displays it as an svg-powered graph, which you can access online with your favorite web browser.

# Setup and Installation

### Raspberry Pi Configuration

Connect your RPi to a monitor, mouse, and keyboard for the [initial setup](https://www.raspberrypi.org/help/noobs-setup/2/). From here on out, you can access the RPi remotely via [SSH](https://www.raspberrypi.org/documentation/remote-access/ssh/README.md) or a [VNC client](https://www.raspberrypi.org/documentation/remote-access/vnc/).

For installation, I recommend using the [pip](https://pip.pypa.io/en/latest/) package manager for Python.
1. Enable the RPi's [I2C](https://learn.sparkfun.com/tutorials/i2c) bus  
2. Configure RPi for your timezone and keyboard
3. Install [Python 3](https://www.raspberrypi.org/documentation/linux/software/python.md)
4. Install [Pyrebase](https://github.com/thisbejim/Pyrebase)  
5. Install [pytz](http://pytz.sourceforge.net/)
6. Install [Adafruit ADC library](https://github.com/adafruit/Adafruit_Python_ADS1X15)
7. Install [Twilio](https://www.twilio.com/docs/libraries/python)
8. Clone the [FMN-sensor repo](https://github.com/mgraonic/FMN-Sensor) on the RPi

### Computer Configuration

Sign in to [Firebase](https://firebase.google.com/) with your Google account and set up a Realtime Database (*not* Cloud Firestore). Start without security rules (see below) but add security once you've set up the project because otherwise ** *anyone* can steal, modify, or delete data in your database**.

Click on the "Rules" tab and disable security:
```js
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```  

Install [react-easy-chart](https://www.npmjs.com/package/react-easy-chart)  
Install [firebase](https://www.npmjs.com/package/firebase)  
Install [Moment](https://momentjs.com/docs/)  
Clone the [Forget Me Not](https://github.com/mgraonic/Forget-Me-Not) repo on your computer

In your local Forget Me Not repo, create a file called firebase.js  
You can choose to hide your API key using the [dotenv package](https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f), but use the code below to start:

```js
import firebase from 'firebase';

// Set the configuration for your app
// TODO: Replace with your project's config object
let config = {
  apiKey: "apiKey",
  authDomain: "projectId.firebaseapp.com",
  databaseURL: "https://databaseName.firebaseio.com",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
export default firebase;
```



# Parts List and Assembly

[Resistive moisture sensor](https://www.sparkfun.com/products/13637)  
[ADS1015 12-Bit ADC](https://www.adafruit.com/product/1083)  
[Raspberry Pi 3 Model B](https://www.adafruit.com/product/3055) or any other Wifi-enabled Pi  
[Jumper Wires](http://a.co/8uqPOi3)  
[Raspberry Pi Cobbler Plus](https://www.adafruit.com/product/2029)  
