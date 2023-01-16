import {HStack, Pressable, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import AddConnectionIcon from '../assets/svg/AddConnectionIcon';
import {profileData} from '../dummyData/profileData';
import {changeCount} from '../helpers/helperFunction';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IProfile} from '../model/IProfile';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
interface IProps {
  profile: IProfile;
}
const ProfileInformationComponent = (props: IProps) => {
  const {profile} = props;

  return (
    <View style={styles.container}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <FastImage
          style={styles.profilePic}
          source={{
            uri: profile.profilePic,
            priority: FastImage.priority.normal,
          }}
        />
        <HStack style={styles.innerContainer}>
          <VStack>
            <Text style={styles.numberText}>
              {changeCount(profile.totalPost)}
            </Text>
            <Text style={styles.headingText}>Posts</Text>
          </VStack>
          <VStack>
            <Text style={styles.numberText}>
              {changeCount(profileData.totalFollowers)}
            </Text>
            <Text style={styles.headingText}>Followers</Text>
          </VStack>
          <VStack>
            <Text style={styles.numberText}>
              {changeCount(profile.totalFollowing)}
            </Text>
            <Text style={styles.headingText}>Following</Text>
          </VStack>
        </HStack>
      </HStack>
      <View style={styles.nameBioContainer}>
        <Text style={styles.nameText}>
          {profile.firstName + ' ' + profile.lastName}
        </Text>
        <Text style={styles.bioText}>{profile.bio}</Text>
      </View>
      <HStack mt={2}>
        <Pressable style={styles.editProfileBtn}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </Pressable>
        <Pressable style={styles.addConnectionBtn}>
          <AddConnectionIcon height={4} width={4} />
        </Pressable>
      </HStack>
    </View>
  );
};
export default ProfileInformationComponent;
const styles = StyleSheet.create({
  profilePic: {
    height: widthToDp(20),
    width: widthToDp(20),
    borderRadius: widthToDp(10),
    // resizeMode: 'contain',
  },
  container: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  innerContainer: {
    // marginLeft: 20,
    width: widthToDp(65),
    justifyContent: 'space-between',
    paddingRight: 10,
  },
  numberText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '500',
    fontFamily: Fonts.poppinsRegular,
    lineHeight: 36,
    color: Colors.textColor,
    textAlign: 'center',
  },
  headingText: {
    fontSize: responsiveFontSize(16),
    fontWeight: '300',
    color: Colors.textColor,
    fontFamily: Fonts.PoppinsRegular,
    lineHeight: 30,
  },
  nameText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '400',
    color: Colors.textColor,
    fontFamily: Fonts.PoppinsRegular,
    lineHeight: 30,
  },
  bioText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(16),
    width: widthToDp(80),
    textAlign: 'justify',
    color: Colors.textColor,
  },
  nameBioContainer: {
    marginLeft: 10,
    marginTop: 10,
  },
  editProfileBtn: {
    height: 40,
    width: widthToDp(80),
    backgroundColor: Colors.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addConnectionBtn: {
    height: 40,
    width: widthToDp(10),
    backgroundColor: Colors.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  editProfileText: {
    fontSize: responsiveFontSize(14),
    color: Colors.textColor,
  },
});
