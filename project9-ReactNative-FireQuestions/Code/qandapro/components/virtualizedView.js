import React from 'react';
import {FlatList} from 'react-native';
import {useTabBar} from '../contexts/TabBarProvider';

export default function VirtualizedView(props) {
  const {setShowTabBar} = useTabBar();
  let offsetY = 0;

  return (
    <FlatList
      data={[]}
      onScroll={({nativeEvent}) => {
        const newOffset = nativeEvent.contentOffset.y;
        if (newOffset <= 0) return setShowTabBar(true);
        offsetY < newOffset ? setShowTabBar(false) : setShowTabBar(true);
        offsetY = newOffset;
      }}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummy'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
