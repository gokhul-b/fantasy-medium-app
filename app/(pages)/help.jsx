import { Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { getAppData } from "../actions";
import Loading from "../../components/Loading";

const Help = () => {
  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchContact = async () => {
      setLoading(true);
      try {
        const appData = await getAppData();
        console.log("appData => ", appData);
        setContact(appData.help);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchContact();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <ScrollView className="px-4 py-6 bg-zinc-900 flex-1">
      <Text className="text-slate-50">{contact}</Text>
    </ScrollView>
  );
};

export default Help;
