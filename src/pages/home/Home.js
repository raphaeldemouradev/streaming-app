import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles.js';
import { Navbar } from '../../components/Navbar/Navbar.js';
import { Main } from '../../components/Main/Main.js';


export function Home() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style='auto' />
        <View style={styles.content}>
          <Navbar />
          
          <Main />

        </View>
    </ScrollView>
  );
}