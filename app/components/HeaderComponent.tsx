import {HStack, Pressable, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import ChatIcon from '../assets/svg/ChatIcon';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {Fonts} from '../utils/fonts';

interface IProps {
  title: string;
}
const HeaderComponent = (props: IProps) => {
  return (
    <HStack style={styles.header} px={5}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable>
        <ChatIcon width={6} height={6} />
      </Pressable>
    </HStack>
  );
};
export default HeaderComponent;
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
    fontSize: responsiveFontSize(18),
  },
});
