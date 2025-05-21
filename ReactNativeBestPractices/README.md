# React Native Best Practices Project (Expo)

This project is a React Native application built with Expo, aiming to demonstrate a setup with best practices, including TypeScript, navigation, state management, linting, and formatting.

## Project Structure

The project follows a feature-first or domain-driven structure within the `src` directory:

-   `src/`
    -   `App.tsx`: Main application component, sets up the root navigator.
    -   `assets/`: Static assets like images, fonts.
    -   `components/`: Shared UI components used across multiple screens.
    -   `contexts/` (or `store/`): Global state management (e.g., Zustand, React Context). For this project, `src/store` is used for Zustand.
    -   `hooks/`: Custom React hooks.
    -   `navigation/`: Navigation setup (e.g., stack, tab navigators).
    -   `screens/`: Screen components, representing different views of the app.
    -   `services/`: API calls, utility functions for external interactions.
    -   `utils/`: General utility functions, helpers, constants.
    -   `types/`: Global TypeScript type definitions. (Optional, can also be co-located)

## Prerequisites

-   Node.js (LTS version recommended)
-   npm or Yarn
-   Expo CLI: `npm install -g expo-cli` (if you don't have it already)
-   Watchman (for macOS users): `brew install watchman`
-   Git

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ReactNativeBestPractices
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

Expo allows you to run your React Native application on a physical device or simulators/emulators.

1.  **Start the Metro Bundler:**
    ```bash
    npm start
    # or
    yarn start
    # or
    expo start
    ```
    This will open the Expo Developer Tools in your web browser.

2.  **Run on a device/simulator:**
    -   **iOS Simulator:** Press `i` in the terminal where Metro Bundler is running, or click "Run on iOS simulator" in Expo Dev Tools. (Requires Xcode)
    -   **Android Emulator:** Press `a` in the terminal, or click "Run on Android device/emulator" in Expo Dev Tools. (Requires Android Studio and an emulator setup)
    -   **Physical Device (iOS or Android):**
        1.  Install the "Expo Go" app from the App Store or Google Play Store.
        2.  Scan the QR code displayed in the terminal or Expo Dev Tools using the Expo Go app.

    -   **Web Browser:** Press `w` in the terminal, or click "Run in web browser" in Expo Dev Tools. (May have limitations compared to native)

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting.

-   **Check for linting errors:**
    ```bash
    npm run lint
    ```

-   **Fix linting errors automatically:**
    ```bash
    npm run lint:fix
    ```

-   **Format code with Prettier:**
    ```bash
    npm run format
    ```

It's recommended to integrate these tools with your code editor for a better development experience (e.g., via extensions for VS Code).

## State Management

This project uses Zustand for simple and effective state management. The example store can be found in `src/store/useCountStore.ts`.

## Scripts Overview

-   `npm start`: Starts the Expo development server.
-   `npm run android`: Runs the app on an Android emulator/device.
-   `npm run ios`: Runs the app on an iOS simulator/device.
-   `npm run web`: Runs the app in a web browser.
-   `npm run lint`: Lints the codebase using ESLint.
-   `npm run lint:fix`: Lints and automatically fixes issues.
-   `npm run format`: Formats code using Prettier.

## Learn More

-   [React Native Documentation](https://reactnative.dev/)
-   [Expo Documentation](https://docs.expo.dev/)
-   [React Navigation](https://reactnavigation.org/)
-   [Zustand](https://github.com/pmndrs/zustand)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
