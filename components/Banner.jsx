import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";
const { width } = Dimensions.get("window");
const images = [
  {
    id: 1,
    uri: "https://www.farmley.com/cdn/shop/files/May2023_Website-Home-Banner_2000x.jpg?v=1687326758",
  },
  {
    id: 2,
    uri: "https://www.farmley.com/cdn/shop/files/Website_new_banner_2000x.jpg?v=1693309993",
  },
  {
    id: 3,
    uri: "https://www.farmley.com/cdn/shop/files/dried-fruit_web_2000x.jpg?v=1674645038",
  },
];
const TrendingItem = ({ item }) => {
  return (
    <Animatable.View className="mr-1" duration={500}>
      <TouchableOpacity
        style={{ width }}
        className="flex justify-center items-center h-48"
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: item.uri }}
          className="object-cover w-full h-full"
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
  const [activeItem, setActiveItem] = useState(images[0]);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].index || 0);
    }
  }).current;

  return (
    <View className="">
      {/* <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / width
          );
          setActiveIndex(newIndex);
        }}
      >
        {images.map((image) => (
          <View
            key={image.id}
            style={{ width }}
            className="flex justify-center items-center h-48"
          >
            <Image
              source={{ uri: image.uri }}
              className="object-cover w-full h-full"
            />
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TrendingItem activeItem={activeItem} item={item} />
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        showsHorizontalScrollIndicator={false}
      />
      <View className="mt-10">
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
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#333",
  },
});

export default Banner;
