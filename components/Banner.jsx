import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import { getAppData } from "../app/actions";
const { width } = Dimensions.get("window");

const TrendingItem = ({ item }) => {
  return (
    <Animatable.View className="mr-1" duration={500}>
      <TouchableOpacity
        style={{ width }}
        className="flex justify-center items-center h-36 px-4"
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: item.uri }}
          className="object-cover w-full h-full rounded-lg"
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};

const PaginationDots = ({ activeIndex, count }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[styles.dot, index === activeIndex && styles.activeDot]}
        />
      ))}
    </View>
  );
};

const Banner = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const appData = await getAppData();
        const bannersArray = Object.keys(appData.banners).map((key, index) => ({
          id: index,
          uri: appData.banners[key],
        }));
        setImages(bannersArray);
        console.log(bannersArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBanners();
  }, []);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].index || 0);
    }
  };

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
        )}
        snapToAlignment="center"
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={viewableItemsChanged}
      />
      <View className="mt-4">
        <PaginationDots activeIndex={activeItem} count={images.length} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#333",
  },
});

export default Banner;
