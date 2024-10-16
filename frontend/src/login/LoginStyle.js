import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF957C",
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 16,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 45,
    marginLeft: 38,
  },
  statusText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginRight: 4,
  },
  icon: { 
    width: 18, 
    height: 10, 
    marginRight: 5 
  },
  iconLarge: { 
    width: 26, 
    height: 13 
  },
  loginContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 35,
    paddingHorizontal: 23,
    width: '90%',
    alignItems: 'center',
  },
  logo: {
    height: 124,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  label: {
    color: "#757575",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#34CC99",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  signInButton: {
    backgroundColor: "#34CC99",
    borderRadius: 58,
    paddingVertical: 14,
    width: '100%',
    alignItems: "center",
    marginBottom: 34,
  },
  signInText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 29,
  },
  dividerLine: {
    width: 100,
    height: 1,
    backgroundColor: "#34CC99",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#34CC99",
    fontSize: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#B3B3B3",
    borderRadius: 58,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: '100%',
  },
  socialIcon: { 
    width: 17, 
    height: 17, 
    marginRight: 10 
  },
  socialText: {
    color: "#757575",
    fontSize: 14,
  },
  signUpText: {
    fontSize: 14,
    color: "#757575",
    textAlign: 'center',
    marginTop: 20,
  },
  signUpLink: {
    color: '#34CC99',
    fontWeight: 'bold',
  },
});
