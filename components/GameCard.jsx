import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ArrowDownTrayIcon, HeartIcon } from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import { StarRatingDisplay } from "react-native-star-rating-widget";

const GameCard = ({ feature }) => {
  const [isFavourite, toggleFavourite] = useState(false);
  const { image, downloads, stars, title } = feature;

  return (
    <View className="mr-4 relative">
      <Image source={image} className="w-80 h-60 rounded-3xl" />
      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 0.6)"]}
        className="absolute p-4 h-full w-full flex justify-between"
        style={{ borderRadius: 19 }} // Match this with your rounded-3xl
      >
        <View className="flex-row justify-end">
          <TouchableOpacity
            onPress={() => toggleFavourite(!isFavourite)}
            className="p-3 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <HeartIcon
              size="25"
              color={isFavourite ? storeColors.redHeart : "white"}
            />
          </TouchableOpacity>
        </View>
        <View className="gap-y-1">
          <StarRatingDisplay
            starSize={15}
            style={{ width: 90 }}
            rating={stars}
            emptyColor="white"
            maxStars={5}
          />
          <Text className="text-xl font-bold text-gray-300">{title}</Text>
          <View className="flex-row items-center gap-x-2">
            <ArrowDownTrayIcon size={18} color={"lightgray"} />
            <Text className="text-sm text-gray-300 font-semibold">
              {downloads} Downloads
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default GameCard;
