# Ionic React Boilerplate

The problem with using a framework (Ionic, Nest, etc.) that built upon another framework (React, Express, etc.) is that it makes your app locked in to that specific set up. Let's take Ionic for example, we can use Ionic React to build a cross-platform applocation with a single code base. Everything looks nice until one day in the future you want to migrate from it to build native apps, and keep the existing code for web. In this situation, if not carefully consider it from the beginning, you may end up having a really hard time refactoring the code.

This boilerplate is created with the solution for above scenario in mind, installing `@ionic/react` as a dependency instead of having it as a wrapper, and use Capacito modules to target native modules when it's needed.

## Features
- Emotion for styling
- Force using yarn as npmClient

## Prerequisite
- Node installed
- Yarn installed
- XCode set up with iOS emulator
- Android simulator

## Getting started
- Clone the project and cd to project folder
- Run `yarn install` to install dependencies
- Run `yarn build` to create build
- Run `yarn dev:web` to start the web project with hot reload
- Run `yarn dev:ios` to start iOS app (may need to build project from XCode) with hot reload
- Run `yarn dev:android` to start iOS app (may need to build project from Android Studio) with hot reload