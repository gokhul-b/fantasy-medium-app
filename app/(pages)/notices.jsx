import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getNotices } from "../actions";
import Loading from "../../components/Loading";

const Notices = () => {
  const [notices, setNotices] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchNotices = async () => {
      setIsLoading(true);
      try {
        const data = await getNotices();
        data.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
        setNotices(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNotices();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView className="px-4 py-2 bg-zinc-900 flex-1">
      <View>
        {notices &&
          notices.map((notice, index) => {
            return (
              <View className="my-2.5" key={index}>
                <Text className="text-slate-300 text-center text-xs mb-2 font-pregular">
                  {notice.formattedTimeStamp}
                </Text>
                <View className="border-b bg-zinc-800 px-2 pt-2 pb-3.5 rounded-lg">
                  <Text className="text-slate-200 font-pmedium text-base">
                    {notice.messageTitle}
                  </Text>
                  <Text className="text-slate-300 font-pregular text-sm">
                    {notice.messageBody}
                  </Text>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default Notices;
