import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./MainStyles";
import { Molde } from "../Molde/Molde";

export function Main() {
    return (
        <View>
            <View style={styles.ImgPrimary}>
                <Image 
                    source={{uri: 'https://cdn.pixabay.com/photo/2020/01/01/14/42/manipulation-4733725_1280.jpg'}} 
                    style={styles.ImgPrimary}
                />
            </View>

            <View>
                <View style={styles.MainContent}>
                    <Text style={styles.TextMain}>Novos/Lançamento</Text>
                        <ScrollView style={styles.ContentMolde} horizontal={true}>
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                        </ScrollView>
                </View>

                <View style={styles.MainContent}>
                    <Text style={styles.TextMain}>Em Alta</Text>
                        <ScrollView style={styles.ContentMolde} horizontal={true}>
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                        </ScrollView>
                </View>

                <View style={styles.MainContent}>
                    <Text style={styles.TextMain}>Adicionados Recentes</Text>
                        <ScrollView style={styles.ContentMolde} horizontal={true}>
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                            <Molde />
                        </ScrollView>
                </View>

            </View>
        </View>
    )
}