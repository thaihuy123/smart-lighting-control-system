import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeHomeScreen from "./HomeHomeScreen";
import HomeRoomScreen from "./HomeRoomScreen";
import HomeLightScreen from "./HomeLightScreen";

const HistoryStack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <HistoryStack.Navigator screenOptions={{ headerShown: false }}>
      <HistoryStack.Screen name="HomeHome" component={HomeHomeScreen} />
      <HistoryStack.Screen name="HomeRoom" component={HomeRoomScreen} options={{ headerShown: true }}/>
      <HistoryStack.Screen name="HomeLight" component={HomeLightScreen} options={{ headerShown: true, headerBackTitle: "Back" }}/>
    </HistoryStack.Navigator>
  );
}
