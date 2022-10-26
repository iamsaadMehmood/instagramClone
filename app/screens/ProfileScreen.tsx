import {AddIcon, HStack, Text, View, VStack} from 'native-base';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ProfileHeaderComponent from '../components/ProfileHeaderComponent';
import ProfileInformationComponent from '../components/ProfileInformationComponent';
import StoriesHighlightFlatList from '../components/StoryHighlightFlatList';
import {profileData} from '../dummyData/profileData';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import {storiesHighlightData} from '../dummyData/storyHighlightData';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ProfileHeaderComponent title={profileData.username} />
      <ProfileInformationComponent profile={profileData} />
      <VStack ml={5} mt={2}>
        <Text style={styles.headingText}>Story highlights</Text>
        <Text style={styles.descText}>
          Keep your favorite stories on your profile
        </Text>
        <HStack mt={5}>
          <View justifyContent={'center'} alignItems={'center'}>
            <View style={styles.addButton}>
              <AddIcon />
            </View>
            <Text style={styles.text}>New</Text>
          </View>

          <StoriesHighlightFlatList list={storiesHighlightData} />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  headingText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '400',
    color: Colors.textColor,
    fontFamily: Fonts.PoppinsRegular,
    lineHeight: 30,
  },
  descText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    width: widthToDp(80),
    textAlign: 'justify',
    color: Colors.textColor,
  },
  text: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    width: 80,
    textAlign: 'center',
  },
  addButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.textColor,
  },
});
