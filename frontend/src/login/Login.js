import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet } from "react-native";

const CustomComponent = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Top Row with Status Bar Icons */}
        <View style={styles.row}>
          <Text style={styles.text}>9:41</Text>
          <Image
            source={require('../../../assets/MainLogo.png')}
            resizeMode="stretch"
            style={styles.image}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.image2}
          />
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.image3}
          />
        </View>

        {/* Main Login Content */}
        <View style={styles.column}>
          <Image
            source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
            resizeMode="stretch"
            style={styles.image4}
          />
          <Image
           source={require('../../../assets/MainLogo.png')}
            resizeMode="stretch"
            style={styles.image5}
          />
          <Text style={styles.text2}>Email or Username</Text>
          <View style={styles.box} />
          <Text style={styles.text3}>Password</Text>
          <View style={styles.box2} />

          <View style={styles.view}>
            <Text style={styles.text4}>Sign In</Text>
          </View>

          <View style={styles.row2}>
            <View style={styles.box3} />
            <Text style={styles.text5}>OR</Text>
            <View style={styles.box3} />
          </View>

          <View style={styles.row3}>
            <Image
              source={require('../../../assets/google.png')}
              resizeMode="stretch"
              style={styles.image6}
            />
            <Text style={styles.text6}>Sign in with Google</Text>
          </View>

          <View style={styles.row4}>
            <Image
              source={require('../../../assets/Facebook.png')}
              resizeMode="stretch"
              style={styles.image7}
            />
            <Text style={styles.text6}>Sign in with Facebook</Text>
          </View>

          <Text style={styles.text7}>Need an account? Create your account</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    paddingTop: 16,
    paddingRight: 23,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 45,
    marginLeft: 38,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 4,
    flex: 1,
  },
  image: {
    width: 18,
    height: 10,
    marginRight: 5,
  },
  image2: {
    width: 15,
    height: 10,
    marginRight: 5,
  },
  image3: {
    width: 26,
    height: 13,
  },
  column: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingTop: 13,
    paddingBottom: 35,
    marginLeft: 23,
  },
  image4: {
    width: 22,
    height: 22,
    marginBottom: 31,
    marginHorizontal: 11,
  },
  image5: {
    height: 124,
    marginBottom: 76,
    marginHorizontal: 101,
  },
  text2: {
    color: "#757575",
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 17,
  },
  box: {
    height: 1,
    backgroundColor: "#34CC99",
    marginBottom: 30,
    marginHorizontal: 15,
  },
  text3: {
    color: "#898989",
    fontSize: 16,
    marginBottom: 7,
    marginLeft: 17,
  },
  box2: {
    height: 1,
    backgroundColor: "#34CC99",
    marginBottom: 40,
    marginHorizontal: 15,
  },
  view: {
    alignItems: "center",
    backgroundColor: "#34CC99",
    borderRadius: 58,
    paddingVertical: 14,
    marginBottom: 34,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    elevation: 10,
  },
  text4: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  row2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 29,
    marginHorizontal: 15,
  },
  box3: {
    width: 100,
    height: 1,
    backgroundColor: "#34CC99",
  },
  text5: {
    color: "#34CC99",
    fontSize: 20,
  },
  row3: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#B3B3B3",
    borderRadius: 58,
    borderWidth: 1,
    paddingVertical: 13,
    marginBottom: 21,
    marginHorizontal: 38,
  },
  image6: {
    width: 17,
    height: 17,
    marginRight: 10,
  },
  text6: {
    color: "#757575",
    fontSize: 14,
  },
  row4: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#B3B3B3",
    borderRadius: 58,
    borderWidth: 1,
    paddingVertical: 12,
    marginBottom: 23,
    marginHorizontal: 39,
  },
  image7: {
    width: 17,
    height: 17,
    marginRight: 11,
  },
  text7: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 10,
  },
});
