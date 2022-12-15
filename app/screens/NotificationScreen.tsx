import {FlatList, View, HStack, Image, Text} from 'native-base';
import {SafeAreaView, StyleSheet} from 'react-native';
import {INotification} from '../model/INotification';
import {notificationData} from '../dummyData/notificationData';

const NotificationScreen = () => {
  const renderItem = (item: INotification) => {
    return (
      <HStack p={5}>
        <Image style={styles.image} source={{uri: item.user.profilePic}} />
        <Text>
          <Text>@{item.user.username}{" "}{item.description}</Text>
          <Text>{}</Text>
        </Text>
      </HStack>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={notificationData}
        renderItem={item => renderItem(item.item)}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
export default NotificationScreen;
