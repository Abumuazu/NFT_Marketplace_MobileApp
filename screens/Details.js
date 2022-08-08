import React from "react";
import { View, Text, SafeAreaView, Image, StatusBar, FlatList, Platform, Dimensions } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";
import { CircleButton, RectButton, SubInfo, DetailsDesc, DetailsBid, FocusedStatusBar } from "../components";
import { SharedElement } from 
"react-navigation-shared-element";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import {
  onGestureEvent,
  snapPoint,
  timing,
  useValues
} from "react-native-redash";
// import Animated, {
//   Extrapolate,
//   and,
//   block,
//   call,
//   cond,
//   eq,
//   interpolateNode,
//   set,
//   useCode,
//   Easing as OldEasing,
//   // @ts-ignore
//   EasingNode,
//   useAnimatedGestureHandler,
// } from "react-native-reanimated";
import { useMemoOne } from "use-memo-one";
const { width, height } = Dimensions.get("window");

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const Height = Platform.OS === 'ios' ? StatusBar.currentHeight + 40 : StatusBar.currentHeight + 30 

//Detail Header
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <SharedElement id={data && data.id}>
    <Image
      source={data && data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    </SharedElement>
 

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={Height}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={Height }
    />
  </View>
);

// const useValues = Animated.Value; 
const Details = ({ route, navigation }) => {
  
  const { data } = route?.params;

//   //extraction using UseValues from react-native-redash package
//   const [
//     translationX,
//     translationY,
//     velocityY,
//     translateX,
//     translateY,
//     snapBack,
//     state,
//   ] = useValues(0, 0, 0, 0, 0, 0, State.UNDETERMINED);
//   //where
//   const snapTo = snapPoint(translationY, velocityY, [0, height]);
//   // scale
//   const scale = interpolateNode(translateY, {
//     inputRange: [0, height / 2],
//     outputRange: [1, 0.75],
//     extrapolate: Extrapolate.CLAMP,
//   });

// // using the useMemo Package
// const gestureHandler = useMemoOne(
//   () => onGestureEvent({ translationX, translationY, velocityY, state }),
//   [state, translationX, translationY, velocityY]
// );
// // usong useCode from reAnimated
// useCode(
//   () =>
//     block([
//       cond(
//         and(eq(state, State.END), eq(snapTo, height), eq(snapBack, 0)),
//         set(snapBack, 1)
//       ),
//       cond(
//         snapBack,
//         call([], () => navigation.navigate('Home')),
//         cond(
//           eq(state, State.END),
//           [
//             set(
//               translateX,
//               timing({ from: translationX, to: 0, duration: 250 })
//             ),
//             set(
//               translateY,
//               timing({ from: translationY, to: 0, duration: 250 })
//             ),
//           ],
//           [set(translateX, translationX), set(translateY, translationY)]
//         )
//       ),
//     ]),
//   []
// );

  return (
   <View style={{ flex: 1, backgroundColor: "#fff"}}>
 <View
        style={{
         
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
                 <FocusedStatusBar backgroundColor='transparent' tanslucent={true} barStyle="dark-content" />
        
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>

      <FlatList 
        data={ data && data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data && data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    // fontFamily: FONTS && FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
   </View>
  );
};

Details.sharedElements = ({route}) => {
  const {data} = route?.params // "pizza"
  return [data.id]
}
export default Details;
