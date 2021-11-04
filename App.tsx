import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Greeting from "./components/Greeting";
import Humidity from "./components/Humidity";
import MinMax from "./components/MinMax";
import SunTimes from "./components/SunTimes";
import Temperature from "./components/Temperature";
import Wind from "./components/Wind";
import Wrapper from "./components/Wrapper";
import { useFonts, Rubik_300Light, Rubik_700Bold} from '@expo-google-fonts/rubik'
import AppLoading from 'expo-app-loading';


export default function App() {
const unitobj = {
  f: "F",
  c: "C"
}
const [units, setUnits] = useState(unitobj.f)
  const handleUnitChange = () => {
    console.log(units)
    if(units === unitobj.f)
    {
      setUnits(unitobj.c)
    }
    else
    {    
      setUnits(unitobj.f)
    }
  }
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_700Bold,
  });
  if(!fontsLoaded) {
    return <AppLoading />
  } else{
  return (
    <SafeAreaView style={[styles.safearea, {backgroundColor:'lightblue'}]}>
      <Wrapper>
        <View style={styles.container}>
          <Greeting />
          <View style = {{flex: .3, flexDirection:'row'}}>
              <Temperature 
                dUnit = {units}
              />
              <MinMax 
                dUnit = {units}
                onUnitChange = {() => handleUnitChange()}
              />
          </View>
          
          <StatusBar style="auto" />
        </View>
      </Wrapper>
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safearea: {
    flex: 1,
  },
});
