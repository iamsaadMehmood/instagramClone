import {FlatList} from 'native-base';
import React from 'react';
import {IStory} from '../model/IStory';
import StoryComponent from './StroyComponent';
interface IProps {
  data: IStory[];
}
const StoriesFlatListComponent = (props: IProps) => {
  return (
    <FlatList
      data={props.data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={item => <StoryComponent story={item.item} />}
      keyExtractor={item => item.id}
    />
  );
};
export default StoriesFlatListComponent;
