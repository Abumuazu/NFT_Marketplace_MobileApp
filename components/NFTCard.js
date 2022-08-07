import { View, Text } from 'react-native'
import React from 'react'
import {  Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
import { SharedElement } from 'react-navigation-shared-element'
import {  TouchableWithoutFeedback } from 'react-native-gesture-handler';

const NFTCard = ({navigation,  data}) => {
  return (
    <TouchableWithoutFeedback
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
      onPress={() => navigation.navigate("Details", { data })}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
       
      >
        <SharedElement id={data && data.id}>
        <Image
          source={ data && data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
            borderBottomLeftRadius: SIZES.font,
            borderBottomRightRadius: SIZES.font
          }}
        />
        </SharedElement>
    

        <CircleButton  imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={ data && data.name}
          subTitle={ data && data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={ data && data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NFTCard