import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileHeaderComponent from '../components/ProfileHeaderComponent';
import ProfileInformationComponent from '../components/ProfileInformationComponent';
import { profileData } from '../dummyData/profileData';

const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <ProfileHeaderComponent title={profileData.username} />
      <ProfileInformationComponent
       profile={profileData}
      />
    </SafeAreaView>
  );
};
export default ProfileScreen;
