# MelcoExam
sakura.fukuyoshi

Open terminal

> npm install


## How to run local server

> cd server

> node index.js

> ngrok http 3000

Copy the forwarding url and go to LoginScreen.tsx that can be found in

> mobile/react/screen/LoginScreen.tsx

then change the url in line 14 to forwarding url you got from the console

Note: ngrok was unsed because localhost is not working in Android when connecting to the API. It is alwayrs returning Network Error.


## How to run emulator

### For Android

Go to mobile directory

> cd mobile

> npx react-native start

Then run android by typing 

> yarn android


### For iOS

Go to mobile directory by typing

> cd mobile

Then type

> pod install --project-directory=ios

> npx react-native start

After doing it, type this to run on emulator

> yarn ios


##  For username and password

Username: melco
Password: Test123!

## For OTP

You may see the otp in the console