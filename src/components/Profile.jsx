import { useState } from "react";

export default function Profile({ statsChange }) {
  const [activeButtons, setActiveButtons] = useState({
    daily: false,
    weekly: false,
    monthly: false,
  });

  return (
    <div className="bg-Blue-2 rounded-lg w-3/12 max-[640px]:w-full">
      <div className="rounded-lg bg-Blue-0 p-6 h-2/3 max-[640px]:flex max-[640px]:justify-evenly">
        <img
          className="object-contain w-12 h-12 border-white border-2 border-solid rounded-full mb-4"
          src="./images/image-jeremy.png"
          alt="profile image"
        />
        <div>
          <p className="text-Blue-4 text-sm">Report for</p>
          <p className="text-white text-4xl font-sm mb-10 max-[1000px]:text-3xl">
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className="p-6 text-Blue-3 flex flex-col items-start max-[640px]:flex-row max-[640px]:justify-between">
        <button
          name="daily"
          className={
            "cursor-pointer hover:text-white " +
            (activeButtons.daily ? "text-white" : "")
          }
          onClick={(event) => {
            statsChange(event);
            setActiveButtons((prev) => ({
              daily: true,
              weekly: false,
              monthly: false,
            }));
          }}
        >
          Daily
        </button>
        <button
          name="weekly"
          className={
            "cursor-pointer hover:text-white " +
            (activeButtons.weekly ? "text-white" : "")
          }
          onClick={(event) => {
            statsChange(event);
            setActiveButtons((prev) => ({
              daily: false,
              weekly: true,
              monthly: false,
            }));
          }}
        >
          Weekly
        </button>
        <button
          name="monthly"
          className={
            "cursor-pointer hover:text-white " +
            (activeButtons.monthly ? "text-white" : "")
          }
          onClick={(event) => {
            statsChange(event);
            setActiveButtons((prev) => ({
              daily: false,
              weekly: false,
              monthly: true,
            }));
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
}
