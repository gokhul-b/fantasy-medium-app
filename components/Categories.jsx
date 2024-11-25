import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Category = ({ data, setCategory, category }) => {
  const isSelected = category === data;
  return (
    <TouchableOpacity
      className={`px-4 py-2 border-zinc-400 rounded-full ml-4 ${
        isSelected ? "bg-slate-100 border-none" : "bg-transparent border"
      }`}
      onPress={() => setCategory(data)}
    >
      <Text className={`${isSelected ? "text-black" : "text-slate-50"}`}>
        {data}
      </Text>
    </TouchableOpacity>
  );
};
const Categories = ({ category, setCategory }) => {
  const categories = [
    "Cricket 🏏",
    "Volleyball 🏐",
    "Football ⚽",
    "Basketball 🏀",
    "Baseball ⚾",
  ];
  console.log(setCategory);
  return (
    <View className="">
      <FlatList
        data={categories}
        renderItem={(item) => (
          <Category
            key={item.index}
            data={item.item}
            idx={item.index}
            category={category}
            setCategory={setCategory}
          />
        )}
        keyExtractor={(index) => index.toString()}
        horizontal
        pagingEnabled
        snapToAlignment="center"
      />
    </View>
  );
};

export default Categories;
