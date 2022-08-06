import { View, Text, Touchable, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { LocationMarkerIcon, StarIcon } from "react-native-heroicons/outline";

const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="mr-3 bg-white shadow rounded-2xl ">
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-t-2xl rounded-b-md " />

      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-black ">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1 ">
          <LocationMarkerIcon size={22} color="black" opacity={0.5} />
          <Text className="text-xs text-black">Nearby · {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
