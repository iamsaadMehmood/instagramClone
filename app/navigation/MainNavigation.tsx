import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/screenConstant';
import HomeScreen from '../screens/HomeScreen';
import BottomTab from './BottomTab';
const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Screens.home}>
      <Stack.Screen
        options={{headerShown: false}}
        name={Screens.bottomTab}
        component={BottomTab}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
