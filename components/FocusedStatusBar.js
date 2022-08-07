import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/core";

// const FocusedStatusBar = ({backgroundColor, ...props}) => {
//   const isFocused = useIsFocused();
//   return isFocused ? <StatusBar animated={true} backgroundColor={backgroundColor} {...props} /> : null;
// };


const FocusedStatusBar = ({backgroundColor, ...props}) => 
{
  const isFocused = useIsFocused();
  if (isFocused){
    return (

      <View style={[styles.statusBar, { backgroundColor }]}>
        <SafeAreaView>
          <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </SafeAreaView>
      </View>
    ) 
  }else return null
} 



export default FocusedStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
