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
    const matchDateTime = new Date(`${matchDate}T${startsAt}:00`);
    const now = new Date();
    const difference = matchDateTime - now;
    // console.log(matchDateTime);

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

  return (
    <View className="flex-row space-x-1 bg-zinc-100 px-2 py-0.5 rounded-sm mb-1">
      {timeRemaining.days > 0 && <Text>{`${timeRemaining.days}d`}</Text>}
      {timeRemaining.hours > 0 && <Text>{`${timeRemaining.hours}hr`}</Text>}
      {timeRemaining.hours > 0 && <Text>{`${timeRemaining.minutes}m`}</Text>}
      {timeRemaining.hours > 0 && <Text>{`${timeRemaining.seconds}s`}</Text>}
    </View>
  );
};
export default CountDown;
