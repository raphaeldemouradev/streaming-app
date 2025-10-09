import { Text, TextInput, View } from "react-native";
import { Molde } from "../../components/Molde/Molde";
import { styles } from "./Styles";
import { ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Navbar } from "../../components/Navbar/Navbar";


export function Perfil() {
    return (
        <ScrollView style={styles.container}>
            <StatusBar style='auto' />
                <View style={styles.content}>
                    <Navbar />
                    
                    <View style={styles.banner}></View>

                    <View style={styles.user}></View>

                    <View style={styles.usuarioArea}>
                        <Text style={styles.textArea}>Usuário</Text>
                        <TextInput style={styles.inputArea} />
                    </View>

                    <View style={styles.usuarioArea}>
                        <Text style={styles.textArea}>Email</Text>
                        <TextInput style={styles.inputArea} />
                    </View>
                </View>
        </ScrollView>
    )
}