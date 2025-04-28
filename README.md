# Welcome to your Expo app with Authentication 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app) that includes a complete authentication flow.

## Authentication Features

- Sign In and Sign Up screens with a clean UI
- Protected routes using Expo Router
- Global auth context for managing user state
- Persistent auth state using AsyncStorage
- Seamless navigation between auth screens and main app

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

The app will start at the Sign In screen. You can:

- Sign in to access the main app tabs
- Create a new account via Sign Up
- Sign out from the Home tab to return to Sign In

The auth flow uses:

- `app/auth/SignIn.tsx` and `app/auth/SignUp.tsx` for authentication screens
- `app/context/AuthContext.tsx` for global auth state management
- Protected routes under `app/(tabs)` that require authentication

## Development

You can run the app in:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Project Structure

```plaintext
app/
├── (tabs)/              # Protected tab routes
│   ├── _layout.tsx     # Tab navigation configuration
│   ├── index.tsx       # Home screen
│   └── explore.tsx     # Explore screen
├── auth/               # Authentication screens
│   ├── _layout.tsx     # Auth stack configuration
│   ├── SignIn.tsx      # Sign in screen
│   └── SignUp.tsx      # Sign up screen
├── context/            # Global state management
│   └── AuthContext.tsx # Authentication context
└── _layout.tsx         # Root layout with navigation
```

## Features

### Authentication

- Simple mock authentication for testing
- Protected routes that require authentication
- Automatic redirection to auth screens when not authenticated
- Sign in/up functionality with clean UI

### Navigation

- Tab-based navigation for authenticated users
- Stack navigation for auth screens
- Automatic route protection
- Smooth transitions between screens

### UI/UX

- Clean and modern interface
- Consistent styling across screens
- Responsive design for all screen sizes
- Platform-specific optimizations

## Get a fresh project

When you're ready to start from scratch, you can:

1. Delete the current app directory
2. Create a new Expo project
3. Copy over the authentication setup

Or use the included reset script:

```bash
npm run reset-project
```

This will move the current `app` directory to `app-example` and give you a fresh start.
