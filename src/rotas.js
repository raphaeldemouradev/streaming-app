import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home/Home";
import { Perfil } from "./pages/perfil/Perfil";

const Tab = createBottomTabNavigator()

export function Rotas() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#006effff',
                    tabBarStyle: {
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderTopWidth: 0,
                        elevation: 0,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }
                }}
            />

            <Tab.Screen 
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: '#006effff',
                    tabBarStyle: {
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        borderTopWidth: 0,
                        elevation: 0,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }
                }}
            />
        </Tab.Navigator>
    )
}