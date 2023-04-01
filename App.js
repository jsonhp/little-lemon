import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/profile";
import Onboarding from "./screens/onBoarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import SplashScreen from "./screens/splash";
import Error from "./screens/error";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [fontsLoaded] = useFonts({
    "MarkaziText-Regular": require("./assets/fonts/MarkaziText-Regular.ttf"),
    "Karla-Regular": require("./assets/fonts/Karla-Regular.ttf"),
  });

  const getData = async () => {
    try {
      const isLoggedInStorage = await AsyncStorage.getItem("isLoggedIn");
      if (isLoggedInStorage) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, [isOnboardingCompleted]);

  if (error) {
    return <Error />;
  }

  if (isLoading || !fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Profile"
            component={() => (
              <Profile setIsOnboardingCompleted={setIsOnboardingCompleted} />
            )}
          />
        ) : (
          <Stack.Screen
            name="OnBoarding"
            component={() => (
              <Onboarding setIsOnboardingCompleted={setIsOnboardingCompleted} />
            )}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
