import {Pressable, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import AddWhite from '../assets/svg/AddWhite';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IStory} from '../model/IStory';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import SingleStoryComponent from './SingleStoryComponent';
interface IProps {
  story: IStory;
}
const StoryComponent = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.story.username !== 'saadmehmood' ? (
        <Pressable style={styles.buttonContainer}>
          <SingleStoryComponent story={props.story.userProfile} />
        </Pressable>
      ) : (
        <Pressable style={styles.buttonContainer}>
          <SingleStoryComponent story={props.story.userProfile} />
          <View style={styles.add}>
            <AddWhite width={4} height={4} />
          </View>
        </Pressable>
      )}
      <Text style={styles.name} numberOfLines={1}>
        {props.story.username !== 'saadmehmood'
          ? props.story.username
          : 'Your Story'}
      </Text>
    </View>
  );
};
export default StoryComponent;
const styles = StyleSheet.create({
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
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    width: 80,
    textAlign: 'center',
  },
});
