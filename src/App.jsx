import Profile from "./components/Profile";
import Card from "./components/Card";
import data from "../public/data.json";
import { useState } from "react";

function cards(i, stats) {
  return (
    <Card
      key={i.title}
      imageType={i.src}
      last={
        stats === "daily"
          ? i.timeframes.daily.previous
          : stats === "weekly"
          ? i.timeframes.weekly.previous
          : i.timeframes.monthly.previous
      }
      tileType={i.title}
      today={
        stats === "daily"
          ? i.timeframes.daily.current
          : stats === "weekly"
          ? i.timeframes.weekly.current
          : i.timeframes.monthly.current
      }
      category={
        stats === "daily" ? "Day" : stats === "weekly" ? "Week" : "Month"
      }
    />
  );
}

export default function App() {
  const [stats, setStats] = useState();

  function handleStatChange(e) {
    const name = e.target.name;
    // console.log(name);
    setStats(name);
  }

  return (
    <main className="container flex gap-4 font-Rubik w-3/4 max-[640px]:flex-col max-[640px]:p-8">
      <Profile statsChange={handleStatChange} />
      <div className="grid grid-rows-2 grid-cols-3 w-9/12 gap-4 max-[640px]:grid-cols-none max-[640px]:w-full">
        {data.map((i) => cards(i, stats))}
      </div>
    </main>
  );
}
