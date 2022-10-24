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
import HomeActive from '../assets/HomeActive';
import HomeInActive from '../assets/HomeInActive';
import NotificationActive from '../assets/NotificationActive';
import NotificationInActive from '../assets/NotificationInActive';
import AddActive from '../assets/AddActive';
import AddInActive from '../assets/AddInActive';
import SearchActive from '../assets/SearchActive';
import SearchInActive from '../assets/SearchInActive';
import ProfileActive from '../assets/ProfileActive';
import ProfileInActive from '../assets/ProfileInActive';

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
                    <SearchActive width={10} height={10} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <SearchInActive width={10} height={10} />
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
                    <AddActive width={7} height={7} />
                  </View>
                ) : (
                  <View style={styles.iconView}>
                    <AddInActive width={7} height={7} />
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
  midIcon: {
    height: 80,
    width: 80,
    // backgroundColor: Colors.primary,
    borderRadius: 40,
    position: 'absolute',
  },
  textActive: {
    // color: Colors.primary,
    // fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,

    marginTop: 6,
  },
  textInActive: {
    // color: Colors.primary,
    // fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,
    marginTop: 6,
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  ////////
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});
