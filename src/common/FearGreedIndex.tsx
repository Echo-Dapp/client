import React from "react";
import useFetch from "../hooks/useFetch";

type FearGreedData = {
  name: string;
  now: {
    value: string;
    value_classification: string;
    timestamp: string;
    time_until_update: string;
  };
  yesterday: {
    value: string;
    value_classification: string;
    timestamp: string;
  };
  lastWeek: {
    value: string;
    value_classification: string;
    timestamp: string;
  };
};

export default function FearGreedIndex() {
  const data = useFetch<FearGreedData>(
    "https://api.coin-stats.com/v2/fear-greed"
  );

  return <div>FearGreedIndex</div>;
}
