import {FlatList, ScrollView, Text, View} from 'native-base';
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
      <FlatList
        height={heightToDp(80)}
        ListHeaderComponent={<StoriesFlatListComponent data={storiesData} />}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={postsData}
        renderItem={item => <PostSingleComponent post={item.item} />}
        keyExtractor={item => item.id}
      />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default HomeScreen;
