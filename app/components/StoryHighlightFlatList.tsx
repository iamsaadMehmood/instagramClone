import {FlatList, Pressable, Text, View, VStack} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
// import {Text} from 'react-native-svg';
import {responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IStoryHighlight} from '../model/IStoryHighlight';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import SingleStoryComponent from './SingleStoryComponent';
interface IProps {
  list: IStoryHighlight[];
}
const StoriesHighlightFlatList = (props: IProps) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={props.list}
      renderItem={item => {
        return (
          <View style={styles.container}>
            <Pressable style={styles.buttonContainer}>
              <SingleStoryComponent story={item.item.imageAttachment[0]} />
            </Pressable>
            <Text style={styles.descText} numberOfLines={1}>
              {item.item.description}
            </Text>
          </View>
        );
      }}
    />
  );
};
export default StoriesHighlightFlatList;
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
  descText: {
    fontFamily: Fonts.poppinsRegular,
    fontSize: responsiveFontSize(14),
    fontWeight: '400',
    width: 80,
    textAlign: 'center',
  },
});
