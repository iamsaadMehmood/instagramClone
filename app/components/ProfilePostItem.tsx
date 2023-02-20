import {StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {widthToDp} from '../helpers/responsive';
import {IPost} from '../model/IPost';
interface IProps {
  data: IPost;
}
const ProfilePostItem = (props: IProps) => {
  return (
    <FastImage
      style={styles.image}
      source={{uri: props.data.attachments[0].link}}
    />
  );
};
export default ProfilePostItem;
const styles = StyleSheet.create({
  image: {
    marginTop: 2,
    marginLeft: 0.5,
    height: 200,
    width: widthToDp(33),
  },
});
