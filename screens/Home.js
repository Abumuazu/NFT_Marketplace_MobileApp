import { View, Text, SafeAreaView, Image, TextInput, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
 
const HomeScreen = () => {
  const _renderItem= ({ item }) => <NFTCard data={item} />
  const _ListHeaderComponent = <HomeHeader  />
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FocusedStatusBar backgroundColor={COLORS.primary} />
    <NFTCard  />
    <View style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
        <FlatList
          data={NFTData}
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
          style={{ height: 300, backgroundColor: COLORS.primary }} />
        <View style={{ flex: 1, backgroundColor: COLORS.white }} />
      </View>
    </View>
  </SafeAreaView>
  );
};

export default HomeScreen;
