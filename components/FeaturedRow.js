import { View, Text } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({title, description}) => {
  return (
    <View>
     <View className="mt-4 flex-row items-center justify-between px-4 ">
        <Text className="font-bold text-black text-lg"> {title}</Text>
        <ArrowRightIcon color="#41e0e1" />
     </View>
     <Text className="text-xs text-black px-4">{description}</Text>
     <ScrollView 
     horizontal
     showsHorizontalScrollIndicator={false }
     contentContainerStyle={{
        paddingHorizontal:15
     }}
     className="pt-4"
     >
{/* Restaurants Cards  */}
<RestaurantCard
 id={123} imgUrl ="https://links.papareact.com/gn7" title= "Yol Sushi"  rating ={4.5} genre="Japanesse" address="osborne" short_description ="This is a test description" dishes ={[]} long ={20} lat={0}
/>
<RestaurantCard
 id={123} imgUrl ="https://links.papareact.com/gn7" title= "Yol Sushi"  rating ={4.5} genre="Japanesse" address="osborne" short_description ="This is a test description" dishes ={[]} long ={20} lat={0}
/>
<RestaurantCard
 id={123} imgUrl ="https://links.papareact.com/gn7" title= "Yol Sushi"  rating ={4.5} genre="Japanesse" address="osborne" short_description ="This is a test description" dishes ={[]} long ={20} lat={0}
/>
     </ScrollView>
    </View> 
  )
}

export default FeaturedRow