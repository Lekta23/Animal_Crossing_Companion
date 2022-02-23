import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useFish } from '../hooks/useFish';
import CardFish from '../components/Fish/CardFish';

type Props = {}

const FishScreen = (props: Props) => {
  const { isLoading, isError, data } = useFish();
  if (isLoading) {
    return <Text>Loading…</Text>;
  }
  if (isError) {
    return <Text>Something bad happened…</Text>;
  }

  const renderItem = (props: any) => <CardFish {...props} />;
  

  return (
    <>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </>
  )
}

export default FishScreen