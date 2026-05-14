import { useEffect, useRef } from "react";
import {
  ScrollView,
  Text,
  View,
} from "react-native";

type CalenderSetProps = {
  width?: number;
  height?: number;
};

const CalenderSet = ({
  width = 70,
  height = 120,
}: CalenderSetProps) => {

  const scrollRef = useRef<ScrollView>(null);

  const today = new Date();

  const dates = [];

  for (let i = -30; i <= 30; i++) {

    const date = new Date();

    date.setDate(today.getDate() + i);

    dates.push({
      fullDate: date,
      day: date.toLocaleDateString("en-US", {
        weekday: "short",
      }),
      dateNumber: date
        .getDate()
        .toString()
        .padStart(2, "0"),

      isToday:
        date.toDateString() ===
        today.toDateString(),
    });
  }

  useEffect(() => {

    const todayIndex = dates.findIndex(
      (item) => item.isToday
    );

    const itemWidth = width + 18;

    scrollRef.current?.scrollTo({
      x: todayIndex * itemWidth,
      animated: true,
    });

  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        gap: 18,
        paddingVertical: 10,
        paddingHorizontal: 4,
      }}
    >

      {dates.map((item, index) => {

        return (
          <View
            key={index}
            style={{
              width,
              height,
              justifyContent: "center",
              alignItems: "center",
              gap: 14,
            }}
          >

            {/* Day */}
            <Text
              style={{
                fontSize: 18,
                color: "#2D0C0C",
                fontFamily:
                  "playfairDisplay_Medium",
              }}
            >
              {item.day}
            </Text>

            {/* Circle */}
            <View
              style={{
                width: 58,
                height: 58,
                borderRadius: 999,
                justifyContent: "center",
                alignItems: "center",

                backgroundColor: item.isToday
                  ? "#2B0000"
                  : "rgba(0,0,0,0.06)",
              }}
            >
              <Text
                style={{
                  fontSize: 24,

                  color: item.isToday
                    ? "white"
                    : "#2D0C0C",

                  fontFamily:
                    "playfairDisplay_Bold",
                }}
              >
                {item.dateNumber}
              </Text>
            </View>

          </View>
        );
      })}

    </ScrollView>
  );
};

export default CalenderSet;
