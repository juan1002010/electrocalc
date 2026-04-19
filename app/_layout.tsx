import "../src/global.css";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const colorScheme = useColorScheme();
  
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f172a",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          contentStyle: {
            backgroundColor: "#0f172a",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "ElectroCalc Pro" }} />
        <Stack.Screen name="ohms-law" options={{ title: "Ley de Ohm" }} />
        <Stack.Screen name="resistor-color" options={{ title: "Código de Colores" }} />
        <Stack.Screen name="voltage-divider" options={{ title: "Divisor de Voltaje" }} />
      </Stack>
    </>
  );
}
