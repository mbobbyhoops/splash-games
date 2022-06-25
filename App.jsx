import React from "react";
import {
  NativeBaseProvider,
  extendTheme,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import Home from "./screens/Home";
import Balance from "./screens/games/Balance";

// extend the theme
const theme = extendTheme({
  backgroundColor: '#be185d',
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      {/* SCRENS */}

      {/* <Home /> */}
      
      <Balance />

      
    </NativeBaseProvider>
  );
}
