import { Text, View } from "react-native";
import { Molde } from "../../components/Molde/Molde";

export function Perfil() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Hello Word</Text>
            <Molde />
        </View>
    )
}