import {Image, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
interface IProps {
  story: string;
}
const SingleStoryComponent = (props: IProps) => {
  return <Image style={styles.image} source={{uri: props.story}} alt="story" />;
};
const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});
export default SingleStoryComponent;
