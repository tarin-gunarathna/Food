import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { Link } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loaded, error] = useFonts({
    "Sen-extraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
    "Sen-regular": require("../assets/fonts/Sen-Regular.ttf"),
    "Sen-bold": require("../assets/fonts/Sen-Bold.ttf")
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
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/getStartedPage/imageTwo.png")}
            style={styles.imagePlaceholder}
          />
        </View>
        <Text style={styles.title}>Order from choosen chef</Text>
        <Text style={styles.subtitle}>
          Get all your loved foods in one once place, you just place the order
          we do the rest
        </Text>
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/onBoardThree" style={styles.nextButton}>
            <TouchableOpacity
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={styles.nextButtonText}>NEXT</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/onBoardThree" style={styles.skipContainer}>
            <Text style={styles.skipText}>Skip</Text>
          </Link>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  imagePlaceholder: {
    width: 350,
    height: 350,
    marginTop: -70,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontFamily: "Sen-extraBold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#646982",
    marginVertical: 20,
    fontFamily: "Sen-regular"
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#FFE1CE",
    marginHorizontal: 5
  },
  activeDot: {
    backgroundColor: "#FF7622"
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: "#FF7622",
    paddingVertical: 20,
    paddingHorizontal: 80,
    borderRadius: 12,
    marginBottom: 15,
    width: "100%"
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Sen-bold"
  },
  skipContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  skipText: {
    fontSize: 16,
    color: "#646982",
    fontFamily: "Sen-regular"
  }
});
