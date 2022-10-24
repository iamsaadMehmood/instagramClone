import {ScrollView, Text} from 'native-base';
import {SafeAreaView} from 'react-native';
import StoriesFlatListComponent from '../components/StoriesFlatListComponent';
import { storiesData } from '../dummyData/storydata';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StoriesFlatListComponent data={storiesData}/>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
