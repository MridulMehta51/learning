// import React from "react";
// import { SafeAreaView, View, ScrollView, Image, Text, StyleSheet, Platform } from "react-native";
// import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';

// const ProfileSetupScreen = (props) => {
//   // Use the correct LinearGradient component based on the platform
//   const Gradient = Platform.OS === 'web' ? ExpoLinearGradient : LinearGradient;

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView style={styles.scrollView}>
//         {/* Profile Image */}
//         <Image
//           source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
//           resizeMode="stretch"
//           style={styles.profileImage}
//         />

//         {/* Upload Photo Section */}
//         <View style={styles.uploadRow}>
//           <View style={styles.iconContainer}>
//             <View style={styles.iconRow}>
//               <Image
//                 source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
//                 resizeMode="stretch"
//                 style={styles.iconSmall}
//               />
//               <Image
//                 source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
//                 resizeMode="stretch"
//                 style={styles.iconMedium}
//               />
//             </View>
//             <Image
//               source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
//               resizeMode="stretch"
//               style={styles.iconSmall}
//             />
//           </View>
//           <Text style={styles.uploadText}>Upload Profile Photo</Text>
//         </View>

//         {/* Form Fields */}
//         {["Full Name*", "Email*", "Country*", "State/Province*"].map((label, index) => (
//           <React.Fragment key={index}>
//             <Text style={styles.labelText}>{label}</Text>
//             <View style={styles.inputBox} />
//           </React.Fragment>
//         ))}

//         {/* Account Type Section */}
//         <Text style={styles.labelText}>Type of Account*</Text>
//         <View style={styles.selectBox}>
//           <Text style={styles.selectBoxText}>Choose account type</Text>
//         </View>

//         {/* Optional School Field */}
//         <Text style={styles.labelText}>School (optional)</Text>
//         <View style={styles.inputBox} />

//         {/* Submit Button with Gradient */}
//         <Gradient
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//           colors={["#EB7B38", "#E26662", "#E15890"]}
//           style={styles.createAccountButton}
//         >
//           <Text style={styles.buttonText}>Create account</Text>
//         </Gradient>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfileSetupScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: "#FFFFFF",
//     paddingTop: 40,
//   },
//   profileImage: {
//     height: 130,
//     width: 130,
//     alignSelf: "center",
//     marginBottom: 20,
//   },
//   uploadRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 40,
//     paddingHorizontal: 50,
//   },
//   iconContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   iconRow: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
//   iconSmall: {
//     height: 20,
//     width: 20,
//     marginHorizontal: 2,
//   },
//   iconMedium: {
//     height: 30,
//     width: 30,
//   },
//   uploadText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//     textAlign: "center",
//   },
//   labelText: {
//     color: "#757575",
//     fontSize: 16,
//     marginBottom: 5,
//     marginLeft: 25,
//   },
//   inputBox: {
//     height: 50,
//     backgroundColor: "#FFFFFF",
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     borderWidth: 1,
//     marginBottom: 25,
//     marginHorizontal: 25,
//   },
//   selectBox: {
//     backgroundColor: "#FFFFFF",
//     borderColor: "#34CC99",
//     borderRadius: 10,
//     borderWidth: 1,
//     height: 50,
//     marginBottom: 25,
//     justifyContent: "center",
//     paddingHorizontal: 20,
//     marginHorizontal: 25,
//   },
//   selectBoxText: {
//     color: "#AEAEAE",
//     fontSize: 14,
//   },
//   createAccountButton: {
//     alignItems: "center",
//     borderRadius: 58,
//     paddingVertical: 15,
//     marginHorizontal: 25,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 16,
//   },
// });
