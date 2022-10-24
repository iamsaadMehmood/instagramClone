import {View, Image, Pressable, Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AddWhite from '../assets/svg/AddWhite';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
// import {View} from 'react-native';
import {IStory} from '../model/IStory';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
interface IProps {
  story: IStory;
}
const StoryComponent = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.story.username !== 'saad' ? (
        <Pressable style={styles.buttonContainer}>
          <Image
            style={styles.image}
            source={{uri: props.story.userProfile}}
            alt={'profile'}
          />
        </Pressable>
      ) : (
        <Pressable style={styles.buttonContainer}>
          <Image
            style={styles.image}
            source={{uri: props.story.userProfile}}
            alt={'profile'}
          />
          <View style={styles.add}>
            <AddWhite width={4} height={4} />
          </View>
        </Pressable>
      )}
      <Text style={styles.name} numberOfLines={1}>
        {props.story.username !== 'saad' ? props.story.username : 'Your Story'}
      </Text>
    </View>
  );
};
export default StoryComponent;
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 35,
  },
  buttonContainer: {
    height: 82,
    width: 82,

    borderRadius: 41,
    borderWidth: 1,
    borderColor: '',
  },
  add: {
    position: 'absolute',
    bottom: 2,
    right: 3,
    backgroundColor: Colors.blue,
    height: widthToDp(5),
    width: widthToDp(5),
    borderRadius: widthToDp(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: Fonts.PoppinsBlack,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    width: 80,
    textAlign: 'center',
  },
});
