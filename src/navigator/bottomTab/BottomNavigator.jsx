import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../views/HomeScreen';
import ProfileScreen from '../../views/UserTab/ProfileScreen';
import PostScreen from '../../views/UserTab/PostScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle: {
                    marginBottom: (Platform.OS === 'android') ? 10 : 0,
                },
                tabBarStyle: {
                    backgroundColor: 'rgba(0,0,0, 0.95)',
                    borderWidth: 0,
                    elevation: 0,
                    position: 'absolute',
                    height: (Platform.OS === 'android') ? 60 : 80,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => <Icon name="home-outline" size={size} color={color} />
                }} />
            <Tab.Screen
                name="Post"
                component={PostScreen}
                options={{
                    title: "Nueva Publicacion",
                    tabBarIcon: ({ color, size }) => <Icon name="add-circle-outline" size={size} color={color} />
                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => <Icon name="person-outline" size={size} color={color} />
                }} />
        </Tab.Navigator>
    );
}