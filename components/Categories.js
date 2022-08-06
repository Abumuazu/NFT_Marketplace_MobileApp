import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
   <ScrollView 
   contentContainerStyle={{
    paddingHorizontal: 15, 
    paddingTop: 10 
   }}
   horizontal
   showsHorizontalScrollIndicator={false}
   >
{/* CategoryCards  */}
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>
<CategoryCard imageUrl= "https://links.papareact.com/gn7" title ="testing"/>


   </ScrollView>
  )
}

export default Categories