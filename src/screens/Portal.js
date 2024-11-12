import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../styles/styling";
import { Button} from "react-native-paper";
import {Ionicons} from "@expo/vector-icons"; 

const Portal = ({ navigation }) => {
  const footer = require("../../assets/gradient.png");
  const codered = require("../../assets/codered.png");
  const [isUserPressed, setIsUserPressed] = useState(false);
  const [isAdminPressed, setIsAdminPressed] = useState(false);

  return (
    <SafeAreaView style={portalStyle.container}>
      <Image source={codered} style={[styles.logoImage, { width: 180, height: 180, marginTop: 0, marginBottom: -20 }]} />
          <Text style={[styles.headingTitle, { textAlign: 'center' }]}>
            Join Us, Pulse!
          </Text>
          <Text style={{
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: 13,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: 1,
            marginHorizontal: 30,
            marginVertical: 10,
            }}>
            Join Code Red to help save lives by donating blood or connecting donors with those in urgent need!
            </Text>

            <Text style={{
            color: 'black',
            fontFamily: 'Poppins',
            fontSize: 18,
            alignSelf: 'center',
            textAlign: 'center',
            marginTop: 15,
            marginHorizontal: 10,
            marginVertical: 10
            }}>
            Which one are you?
            </Text>

            

            <View style={{ alignItems: 'center', marginVertical:10 }}>
              <Button
                icon={'account'}
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                onPressIn={() => setIsUserPressed(true)} 
                onPressOut={() => setIsUserPressed(false)}
                labelStyle={{ fontSize: 18, textAlign: 'center', color: 'white', fontFamily: "PoppinsBold" }} 
                style={{
                  backgroundColor: isUserPressed ? "#ff8e92" : "#fe0009",
                  paddingVertical: 7,
                  paddingHorizontal: 5,
                  margin: 10,
                  borderRadius: 7,
                  width: 240,
                  height: 50,
                }}
              >
                USER
              </Button>
            </View>

            <View style={{ alignItems: 'center', marginBottom: 200 }}>
              <Button
                icon={'account-cog'}
                mode="outlined"
                onPress={() => navigation.navigate("AdminLogin")}
                onPressIn={() => setIsAdminPressed(true)} 
                onPressOut={() => setIsAdminPressed(false)}
                labelStyle={{ fontSize: 18, textAlign: 'center', color: isAdminPressed ? "white" : "red", fontFamily: "PoppinsBold" }} 
                style={{
                  backgroundColor: isAdminPressed ? "#ff8e92" : "white",
                  paddingVertical: 7,
                  borderColor: 'red',
                  paddingHorizontal: 5,
                  margin: 10,
                  borderRadius: 7,
                  width: 240,
                  height: 50,
                }}
              >
                ADMIN
              </Button>
            </View>

            <View style={[styles.footerContainer, { position: 'absolute', bottom: 0, left: 0, right: 0, zIndex:-1 }]}>
          <Image source={footer} style={styles.footerImage} />
        </View>
    </SafeAreaView>
  );
};

export default Portal;

const portalStyle = StyleSheet.create(styles);