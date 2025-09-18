import { Text, View, NavigationContainer } from 'react-native';

const Tab = createBottomTabNavigation();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Home Page</Text>
  </View>
  )
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Settings</Text>
  </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name= "- Início -" component={HomeScreen} />
        <Tab.Screen name= "- Configurações -" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
