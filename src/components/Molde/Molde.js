import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./StylesMolde";

export function Molde() {
    return (
        <View>
            <TouchableOpacity>
                <Text style={styles.Molde}>
                    <Image 
                        source={{uri: 'https://via.assets.so/img.jpg?w=400&h=400&bg=e5e7eb&text=N%2FN&f=png'}} 
                        style={styles.imagem}
                    />
                </Text>
            </TouchableOpacity>
        </View>
    )
}