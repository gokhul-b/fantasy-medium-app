import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const CountDown = ({ matchDate, startsAt }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const matchDateTime = new Date(
      `${matchDate}T${convertTimeTo24HourFormat(startsAt)}:00`
    );
    const now = new Date();
    const difference = matchDateTime - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function convertTimeTo24HourFormat(time) {
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  }

  return (
    <View className="flex-row space-x-1">
      {timeRemaining.days > 0 && (
        <Text className="text-slate-100 font-pmedium">{`${timeRemaining.days}d`}</Text>
      )}
      <Text className="text-slate-100 font-pmedium">{`${timeRemaining.hours}hr`}</Text>
      <Text className="text-slate-100 font-pmedium">{`${timeRemaining.minutes}m`}</Text>
      <Text className="text-slate-100 font-pmedium">{`${timeRemaining.seconds}s`}</Text>
    </View>
  );
};

export default CountDown;
