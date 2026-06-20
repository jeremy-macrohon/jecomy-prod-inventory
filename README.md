# Simple emulator test: Dart backend + React Native CLI frontend

Overview
- Dart backend (shelf) running on port 8080
- React Native CLI frontend that calls the backend

Prerequisites
- Install Dart SDK: https://dart.dev/get-dart
- Install Node.js (>=16) and npm
- Install Android Studio with an Android Virtual Device (AVD) configured
- Install `react-native-cli` globally if preferred: `npm install -g react-native-cli`

Run the backend (on host machine)

```bash
cd backend
dart pub get
dart run bin/server.dart
```

Run the frontend (open emulator first)

1. Start Android emulator from Android Studio (AVD Manager)
2. In another terminal:

```bash
cd frontend
npm install
npx react-native run-android
```

Notes
- When running Android emulator, the host machine is available at `10.0.2.2`. The frontend uses `http://10.0.2.2:8080/ping`.
- If you use a physical device, replace `10.0.2.2` with your host IP and ensure the device can reach the host.
