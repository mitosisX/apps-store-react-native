import { LinearGradient } from "expo-linear-gradient";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowDownTrayIcon,
  Bars3CenterLeftIcon,
  BellIcon,
} from "react-native-heroicons/solid";
import { storeColors } from "../theme";
import { act, useState } from "react";
import GradientButton from "../components/GradientButton";
import GameCard from "../components/GameCard";

const categories = [
  "Action",
  "Family",
  "Puzzle",
  "Adventure",
  "Racing",
  "Education",
];

const featured = [
  {
    id: 1,
    title: "Zooba",
    image: require("../assets/images/zooba.png"),
    downloads: "200K",
    stars: 3,
  },
  {
    id: 2,
    title: "Zooba",
    image: require("../assets/images/subway.png"),
    downloads: "5M",
    stars: 4,
  },
  {
    id: 3,
    title: "Free Fire",
    image: require("../assets/images/freeFire.png"),
    downloads: "100M",
    stars: 5,
  },
  {
    id: 4,
    title: "Altos Adventure",
    image: require("../assets/images/altosAdventure.png"),
    downloads: "20K",
    stars: 2,
  },
  {
    id: 5,
    title: "Angry Birds",
    image: require("../assets/images/angryBirds.png"),
    downloads: "1B",
    stars: 5,
  },
];

const games = [
  {
    id: 1,
    title: "Shadow Fight",
    image: require("../assets/images/shadowFight.png"),
    downloads: "20M",
    stars: 4.5,
  },
  {
    id: 2,
    title: "Valor Arena",
    image: require("../assets/images/valorArena.png"),
    downloads: "10k",
    stars: 3.4,
  },
  {
    id: 3,
    title: "Frag",
    image: require("../assets/images/frag.png"),
    downloads: "80k",
    stars: 4.6,
  },
  {
    id: 4,
    title: "Zooba Wildlife",
    image: require("../assets/images/zoobaGame.png"),
    downloads: "40K",
    stars: 3.5,
  },
  {
    id: 5,
    title: "Clash of Clans",
    image: require("../assets/images/clashofclans.png"),
    downloads: "20k",
    stars: 4.2,
  },
];

const StoreScreen = () => {
  const [activeCategory, setActiveCategory] = useState("Action");
  const [selectedGame, setSelectedGame] = useState(null);
  return (
    <LinearGradient
      colors={["rgba(58, 131, 244, 0.4)", "rgba(9, 181, 211, 0.4)"]}
      className="flex-1"
    >
      <SafeAreaView>
        <View className="container">
          <View className="flex-row justify-between items-center px-4">
            <Bars3CenterLeftIcon color={storeColors.text} size="30" />
            <BellIcon color={storeColors.text} size="30" />
          </View>

          {/* Categories */}
          <View className="mt-3 gap-y-3">
            <Text className="text-3xl ml-4 font-bold">Browse Games</Text>

            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((cat, index) => {
                  if (cat == activeCategory) {
                    return (
                      <GradientButton
                        key={cat}
                        value={cat}
                        containerClass="mr-2"
                      />
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        key={cat}
                        onPress={() => setActiveCategory(cat)}
                        className="bg-blue-200 p-3 rounded-full mr-2"
                      >
                        <Text>{cat}</Text>
                      </TouchableOpacity>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>

          {/* Featured row */}
          <View className="mt-3 gap-y-4">
            <Text className="ml-4 text-lg font-bold">Featured Games</Text>
            <View className="pl-4">
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {featured.map((feature, index) => {
                  return (
                    <GameCard
                      key={feature.id}
                      feature={feature}
                      likes={feature.stars}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </View>

          {/* Top action games list */}
          <View className="mt-3">
            <View className="flex-row justify-between items-center mb-2">
              <Text
                style={{ color: storeColors.text }}
                className="ml-4 text-lg font-bold"
              >
                Top Action Games
              </Text>
              <TouchableOpacity className="mr-4 ">
                <Text className="text-blue-600 font-bold">See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ height: 420 }}
              showsVerticalScrollIndicator={false}
            >
              {games.map(({ id, title, stars, downloads, image }, index) => {
                let bg =
                  id == selectedGame
                    ? "rgba(255, 255, 255, 0.4)"
                    : "transparent";

                return (
                  <TouchableOpacity
                    style={{ backgroundColor: bg }}
                    onPress={() => setSelectedGame(id)}
                    className="mx-4 p-2 mb-2 flex-row rounded-3xl"
                    key={index}
                  >
                    <Image
                      source={image}
                      style={{ width: 80, height: 80 }}
                      className="rounded-2xl"
                    />
                    <View className="flex-1 flex justify-center pl-3 gap-y-3">
                      <Text
                        style={{ color: storeColors.text }}
                        className="font-semibold"
                      >
                        {title}
                      </Text>
                      <View className="flex-row gap-x-3">
                        <View className="flex-row gap-x-1">
                          <Image
                            className="h-4 w-4 opacity-80"
                            source={require("../assets/images/fullStar.png")}
                          />
                          <Text className="text-xs text-gray-700">
                            {stars} stars
                          </Text>
                        </View>
                        <View className="flex-row gap-x-1">
                          <ArrowDownTrayIcon size={15} color="#3b82f6" />
                          <Text className="text-xs text-gray-700">
                            {downloads}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View className="flex justify-center items-center">
                      <GradientButton value="play" buttonClass={"py-2 px-5"} />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default StoreScreen;
