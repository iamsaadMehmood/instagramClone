import React from 'react';
import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
interface IProps {
  story: string;
}
const SingleStoryComponent = (props: IProps) => {
  return (
    <FastImage
      style={styles.image}
      source={{uri: props.story, priority: FastImage.priority.normal}}
    />
  );
};
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
export default SingleStoryComponent;
