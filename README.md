# React native seed app

This project was generated with react native CLI version 2.0.1.


## Setps for Environment setup (react native and android)

1. Install react-native-cli
> npm install -g react-native-cli

> react-native --version

Create new project as "react_native_seed_app"
> npx react-native init react_native_seed_app

or do npm install and use cloned project as "react_native_seed_app"

> npm i

2. Install Android Studio
3. Install the Android SDK
4. Configure the ANDROID_HOME environment variable and Add platform-tools to Path
5. Start virtual device using AVD Manager

6. Run application to generate apk
> react-native start or npm start

> npx react-native run-android or npm run android

7. We will get "app-debug.apk"

8. To run application on actual android device; run command
> cd android

> gradlew assembleRelease
9. We will get "app-release.apk"


### To kill port in windows
> netstat -ano | findstr 8081

> taskkill /f /pid PID (e.g. taskkill /f /pid 3332)

> keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

### Get "app-release.apk" to run on actual android device
for windows
> "C:\Program Files\Java\jre1.8.0_201\bin\keytool" -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
> Then run the command cd android && ./gradlew assembleRelease

For Windows 'cd android' and then run gradlew assembleRelease command , and find your signed apk under android/app/build/outputs/apk/release/app-release.apk

## Windows & Android: react native server crashes very often

Error: EPERM: operation not permitted, lstat 'C:\workspace...

> cd android
> gradlew clean 
> cd ..
> react-native start
> react-native run-android

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.
> adb devices
https://reactnative.dev/docs/running-on-device
https://stackoverflow.com/questions/47239251/install-failed-user-restricted-android-studio-using-redmi-4-device

https://stackoverflow.com/questions/38701115/windows-android-react-native-server-crashes-very-often

## Navigating Between Screens: React Navigation; Installation and setup

> npm install @react-navigation/native @react-navigation/stack
> npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

https://reactnative.dev/docs/navigation
https://reactnavigation.org/docs/hello-react-navigation

## References

https://medium.com/@austinhale/building-a-mobile-app-in-10-days-with-react-native-c2a7a524c6b4

https://facebook.github.io/react-native/docs/getting-started

https://reactnavigation.org/docs/getting-started

https://stackoverflow.com/questions/35935060/how-can-i-generate-an-apk-that-can-run-without-server-with-react-native

https://stackoverflow.com/questions/51239400/react-native-execution-failed-for-task-apptransformdexarchivewithexternallib/52804801

https://stackoverflow.com/questions/55441230/unable-to-load-script-make-sure-you-are-either-running-a-metro-server-or-that-yo

https://stackoverflow.com/questions/51239400/react-native-execution-failed-for-task-apptransformdexarchivewithexternallib/52804801

https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows

https://stackoverflow.com/questions/39542853/enable-vt-x-in-your-bios-security-settings-refer-to-documentation-for-your-comp

https://medium.com/@vnbnews.vn/reactnative-react-navigation-error-createstacknavigator-has-been-moved-to-f90deacbdba9
