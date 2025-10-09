import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#162346ff',
  },
  content: {
    paddingBottom: 100,
  },
  banner: {
    backgroundColor: "#ffaaaaff",
    width: "auto",
    height: 150,
    position: 'relative',
    marginBottom: 50,
  },
  user: {
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginLeft: 25,
    marginTop: 200,
    position: 'absolute',
  },
  usuarioArea: {
    marginTop: 40,
    margin: "auto"
  },
  textArea: {
    color: "#fff", 
    fontWeight: "bold",
    marginBottom: 10,
  },
  inputArea: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
  }
})