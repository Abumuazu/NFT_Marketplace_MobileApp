import { View, Text, SafeAreaView, Image, TextInput, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { ScrollView } from "react-native";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
 
const HomeScreen = ({navigation}) => {

   //Search fucntionality
   const _handleSearch = (value) => {
    if (value.length === 0) {
      setNftData(NFTData);
    }

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };
  const [nftData, setNftData] = useState(NFTData);
  const _renderItem= ({ item }) => <NFTCard data={item} navigation={navigation} />
  const _ListHeaderComponent = <HomeHeader onSearch={_handleSearch}  />
 
  return (
    <>
        <FocusedStatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
    <SafeAreaView style={{ flex: 1 }}>

    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
        <FlatList
          data={nftData}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={_ListHeaderComponent}
        />
      </View>

      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <View
          style={{ height: 300, backgroundColor: COLORS && COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor:COLORS && COLORS.white }} />
      </View>
    </View>
  </SafeAreaView>
  </>
  );
};

export default HomeScreen;

