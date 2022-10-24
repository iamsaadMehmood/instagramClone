import {FlatList, ScrollView, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import StoriesFlatListComponent from '../components/StoriesFlatListComponent';
import {storiesData} from '../dummyData/storydata';
import {postsData} from '../dummyData/postsData';
import PostSingleComponent from '../components/PostSingleComponent';
import {heightToDp} from '../helpers/responsive';
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HeaderComponent title={'Instagram'} />
      <ScrollView
        height={heightToDp(80)}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}>
        <StoriesFlatListComponent data={storiesData} />
        <FlatList
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
          data={postsData}
          renderItem={item => <PostSingleComponent post={item.item} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
