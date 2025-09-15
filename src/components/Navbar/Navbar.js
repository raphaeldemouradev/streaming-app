import { Text, View } from "react-native";
import { styles } from "./NavStyles";

export function Navbar() {
    return (
        <View style={styles.ContainerNavbar}>
            <Text style={styles.TextNavbar}>Catalogo TV</Text>
        </View>
    )
}