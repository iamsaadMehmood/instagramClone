import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../helpers/screenConstant';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AddPostScreen from '../screens/AddPostScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import React from 'react';
import {View} from 'native-base';
import {StyleSheet} from 'react-native';
import HomeActive from '../assets/svg/HomeActive';
import HomeInActive from '../assets/svg/HomeInActive';
import SearchActive from '../assets/svg/SearchActive';
import SearchInActive from '../assets/svg/SearchInActive';
import AddActive from '../assets/svg/AddActive';
import AddInActive from '../assets/svg/AddInActive';
import NotificationActive from '../assets/svg/NotificationActive';
import NotificationInActive from '../assets/svg/NotificationInActive';
import ProfileActive from '../assets/svg/ProfileActive';
import ProfileInActive from '../assets/svg/ProfileInActive';

const BottomTab = (props: any) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        // tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        options={{
          //   tabBarLabel: 'Home',
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <HomeActive width={6} height={6} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <HomeInActive width={6} height={6} />
                  </View>
                )}
              </View>
            );
          },
        }}
        name={Screens.home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <SearchActive width={12} height={12} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <SearchInActive width={12} height={12} />
                  </View>
                )}
              </View>
            );
          },
        }}
        name={Screens.search}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <AddActive width={8} height={8} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <AddInActive width={8} height={8} />
                  </View>
                )}
              </View>
            );
          },
        }}
        name={Screens.addPost}
        component={AddPostScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <NotificationActive width={6} height={6} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <NotificationInActive width={6} height={6} />
                  </View>
                )}
              </View>
            );
          },
        }}
        name={Screens.notifications}
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabInfo => {
            return (
              <View>
                {tabInfo.focused ? (
                  <View style={styles.iconView}>
                    <ProfileActive width={6} height={6} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <ProfileInActive width={6} height={6} />
                  </View>
                )}
              </View>
            );
          },
        }}
        name={Screens.profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
