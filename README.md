# nextjs-nativewind

A **medium-weight Expo template** that gives you Next.js-style file-based routing and Tailwind CSS styling for React Native, already configured and ready to build on.

Built on **Expo SDK 56** (React Native 0.85, React 19.2, New Architecture enabled).

## What's included

- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based navigation, where every file in `app/` is a route
- [NativeWind v4](https://www.nativewind.dev/) for Tailwind CSS (`className`) styling on native and web
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/) for icons
- [React Native Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/) for animations
- `expo-constants`, `expo-linking`, `expo-font`, `expo-status-bar`, `react-native-safe-area-context` and `react-native-screens`
- A working example: two screens, a floating bottom nav bar, and passing params between routes
- Babel, Metro and Tailwind configs already wired together for NativeWind

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- One of the following: the [Expo Go](https://expo.dev/go) app on your phone, an Android emulator, or the iOS Simulator (macOS only)

### Create a new app from this template

```bash
npx create-expo-app <your-app-name> --template https://github.com/Harry-Daniel/nextjs-nativewind
cd <your-app-name>
```

### Run it

```bash
npm start          # start the Expo dev server, then scan the QR code with Expo Go
npm run android    # open on an Android device or emulator
npm run ios        # open on the iOS Simulator
npm run web        # open in the browser
```

### Make it yours

Before you build or publish, update the placeholder values in `app.json`:

| Field | Default | Change it to |
| --- | --- | --- |
| `expo.name` | `My App` | Your app's display name |
| `expo.slug` | `my-app` | A URL-friendly project name |
| `expo.scheme` | `myapp` | A unique deep-link scheme for your app |
| `expo.icon` / `expo.splash.image` | `./assets/msh.png` | Your own icon and splash image |

## Project structure

```
.
├── app/                    # Routes (Expo Router)
│   ├── _layout.jsx         # Root layout: imports global.css, renders the page and the NavBar
│   ├── index.jsx           # "/" (Home screen)
│   └── profile/
│       └── index.jsx       # "/profile" (Profile screen, reads route params)
├── components/
│   └── navBar.jsx          # Floating bottom navigation bar
├── assets/                 # App icon, splash, favicon, adaptive icon
├── global.css              # Tailwind directives
├── tailwind.config.js      # Tailwind config with the NativeWind preset
├── babel.config.js         # babel-preset-expo with NativeWind as the JSX import source
├── metro.config.js         # Metro wrapped with withNativeWind
└── app.json                # Expo app config
```

## Usage

### Adding a page

Create a file in `app/` and it becomes a route:

```jsx
// app/settings/index.jsx  ->  "/settings"
import { Text, View } from "react-native";

const Settings = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-lg font-bold">Settings</Text>
  </View>
);

export default Settings;
```

To show it in the bottom nav, add another `TouchableOpacity` in `components/navBar.jsx` that calls `handlePress("/settings")`.

### Navigating and passing params

The nav bar uses `useRouter` to push a route with params:

```jsx
const router = useRouter();
router.push({ pathname: "/profile", params: { params: "Hello World" } });
```

The target screen reads them with `useLocalSearchParams`:

```jsx
const { params } = useLocalSearchParams();
```

### Styling with NativeWind

Use Tailwind classes through the `className` prop on any React Native component:

```jsx
<View className="bg-gray-700 p-4 rounded-full shadow-2xl">
  <Text className="text-white text-xs">Hello</Text>
</View>
```

If you add folders containing components that use `className`, add them to `content` in `tailwind.config.js` so their classes get generated:

```js
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
```

You can add custom colors, fonts and spacing under `theme.extend` in the same file.

## Troubleshooting

- **Styles aren't applying.** Check that the file's folder is in `tailwind.config.js` `content`, then restart with a cleared cache: `npx expo start -c`.
- **Dependency version warnings.** Run `npx expo install --check` to align packages with SDK 56, and `npx expo-doctor` to check the project's health.

## License

[MIT](LICENSE) © Mawuko Senyo Hayibor
