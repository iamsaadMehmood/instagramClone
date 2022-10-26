import {HStack, Pressable, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import ChatIcon from '../assets/svg/ChatIcon';
import LockIcon from '../assets/svg/lockIcon';
import OptionIcon from '../assets/svg/OptionIcon';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';

interface IProps {
  title: string;
}
const ProfileHeaderComponent = (props: IProps) => {
  return (
    <HStack style={styles.header} px={5}>
      <HStack>
        <LockIcon width={4} height={4} />
        <Text style={styles.title}>{props.title}</Text>
      </HStack>
      <Pressable>
        <OptionIcon width={7} height={7} />
      </Pressable>
    </HStack>
  );
};
export default ProfileHeaderComponent;
const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightToDp(7),
    width: widthToDp(100),
  },
  title: {
    fontFamily: Fonts.PoppinsBlack,
    fontWeight: '500',
    marginLeft: 5,
    color: Colors.textColor,
    fontSize: responsiveFontSize(18),
  },
});
