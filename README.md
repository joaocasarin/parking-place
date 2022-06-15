# Parking-place

This is a project of a website viewer for malls and other parking places which can be managed.
It was created for the college subject Embedded Systems.

## Description

There will be an Arduino board with ultrasonic sensors + LEDs to detect the presence of a car in the spot. The board will be connected to the computer via a USB cable only for study purposes, if it were to be used in a real project it would be connected to a WiFi network.
The server was written using `Python3` and the client was written using `React.js`.

## Server

To create the server we used `Flask` to create a simple web server, and wrapped by it is a websocket server to emit data to the client continuously. In order to retrieve data from the Arduino, `PySerial` was used. Unfortunately the serial connection was not possible to be established with our computer, so the Arduino was not able to send data to the server. Because of that we are faking the data from the Arduino and sending it to the client.

## Client

In order to create the website, we used `React.js` because of its popularity and easeness of using. To receive the data emitted by the server websocket, we used `socket.io`.
The interface is really simple, containing only a board with the spots in the parking place, so the user can see the available spots straight away.

## Requirements

    Python3 - 3.10.2+
    Node.js - 16.15.0+

## Starting the server

    $ cd ./pyserial
    $ python -m venv .venv --upgrade-deps

### On Windows Powershell

    $ .venv/Scripts/Activate.ps1

### On Linux Bash

    $ .venv/Scripts/activate

### Install dependencies and run the server

    $ pip install -r requirements.txt
    $ python app.py

## Starting the client

    $ cd ./frontend
    $ yarn install

### If you prefer npm over yarn

    $ npm install

Then run the client

    $ yarn dev

or

    $ npm run dev
