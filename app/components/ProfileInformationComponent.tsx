import {HStack, Image, Text, View, Pressable} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {IProfile} from '../model/IProfile';
import {profileData} from '../dummyData/profileData';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Fonts} from '../utils/fonts';
import {changeCount} from '../helpers/helperFunction';
import {Colors} from '../utils/colors';
import AddConnectionIcon from '../assets/svg/AddConnectionIcon';

interface IProps {
  profile: IProfile;
}
const ProfileInformationComponent = (props: IProps) => {
  const {profile} = props;

  return (
    <View style={styles.container}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Image
          style={styles.profilePic}
          source={{uri: profile.profilePic}}
          alt="pic"
        />
        <HStack style={styles.innerContainer}>
          <View>
            <Text style={styles.numberText}>
              {changeCount(profile.totalPost)}
            </Text>
            <Text style={styles.headingText}>Posts</Text>
          </View>
          <View mx={7}>
            <Text style={styles.numberText}>
              {changeCount(profileData.totalFollowers)}
            </Text>
            <Text style={styles.headingText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.numberText}>
              {changeCount(profile.totalFollowing)}
            </Text>
            <Text style={styles.headingText}>Following</Text>
          </View>
        </HStack>
      </HStack>
      <Text style={styles.bioText}>{profile.bio}</Text>
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
  },
  container: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  innerContainer: {
    // marginLeft: 20,
    width: widthToDp(65),
  },
  numberText: {
    fontSize: responsiveFontSize(18),
    fontWeight: '500',
    fontFamily: Fonts.PoppinsBold,
    lineHeight: 36,
    color: Colors.textColor,
    textAlign: 'center',
  },
  headingText: {
    fontSize: responsiveFontSize(16),
    // fontWeight: '200',
    color: Colors.textColor,
    fontFamily: Fonts.PoppinsRegular,
    lineHeight: 30,
  },
  bioText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: responsiveFontSize(14),
    width: widthToDp(60),
    textAlign: 'justify',
    color: Colors.textColor,
    marginTop: 10,
    marginLeft: 10,
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
