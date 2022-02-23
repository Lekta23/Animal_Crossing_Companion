import { View, Text } from 'react-native'
import React from 'react'

type Props = {}

const CardFish = (props: Props) => {
    console.log(props);
    
  return (
    <View>
      <Text>{props}</Text>
    </View>
  )
}

export default CardFish