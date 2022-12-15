import {FlatList, HStack, Image, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {heightToDp, responsiveFontSize, widthToDp} from '../helpers/responsive';
import {IPost} from '../model/IPost';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import {IAttachment} from '../model/IAttachment';
interface IProps {
  post: IPost;
}
const PostSingleComponent = (props: IProps) => {
  const {post} = props;
  const renderPost = (item: IAttachment, index: number) => {
    return (
      <View style={{position: 'relative'}}>
        <Image
          source={{
            uri: item.link,
          }}
          style={styles.image}
          alt="no image"
        />
        <View style={styles.countContainer}>
          <Text style={styles.countText}>{`${index + 1}/${
            post.attachments.length
          }`}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.postContainer}>
      <HStack mx={5} justifyContent={'space-between'}>
        <HStack my={5} style={styles.userContainer}>
          <Image
            alt="pic"
            style={styles.profilePic}
            source={{uri: post.userProfilePic}}
          />
          <Text ml={2} style={styles.usernameText}>
            {post.username}
          </Text>
        </HStack>
      </HStack>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={post.attachments}
        keyExtractor={item => item.link}
        renderItem={item => renderPost(item.item, item.index)}
      />
    </View>
  );
};
export default PostSingleComponent;
const styles = StyleSheet.create({
  postContainer: {
    marginTop: 7,
    paddingVertical: 10,
    // display: 'flex',
    // flex: 1,
    // width: widthToDp(100),
    // height: heightToDp(60),
    backgroundColor: Colors.backgroundColor,
  },
  usernameText: {
    fontFamily: Fonts.poppinsRegular,
    fontWeight: '400',
    fontSize: responsiveFontSize(16),
    color: Colors.textColor,
  },
  profilePic: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  userContainer: {
    alignItems: 'center',
    // justifyContent:""
  },
  countContainer: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.46)',
  },
  countText: {
    fontFamily: Fonts.PoppinsRegular,
    fontWeight: '400',
    color: Colors.backgroundColor,
  },
  image: {
    height: heightToDp(55),
    width: widthToDp(100),
    // flex: 1,
  },
});
