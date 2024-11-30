import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AnimatedSplash from 'react-native-animated-splash-screen';

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  setTimeout(() => setIsAppLoaded(true), 3000);

  const [loaded, error] = useFonts({
    "Sen-extraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
    "Sen-regular": require("../assets/fonts/Sen-Regular.ttf")
  });

  useEffect(
    () => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    },
    [loaded, error]
  );

  if (!loaded && !error) {
    return null;
  }

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={isAppLoaded}
      logoImage={require('../assets/images/logo.png')}
      backgroundColor={'#f3f4f6'}
      logoHeight={150}
      logoWidth={150}
    >
      {/* App Content */}
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Foodie App!</Text>
      </View>
    </AnimatedSplash>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2d3748',
  },
});
