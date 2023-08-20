export default function Card({ tileType, last, today, imageType, category }) {
  return (
    <div
      className={
        "rounded-lg relative w-full h-48 max-[640px]:w-full max-[640px]:h-40 overflow-clip " +
        (tileType === "Social"
          ? "bg-social"
          : tileType === "Work"
          ? "bg-work"
          : tileType === "Play"
          ? "bg-play"
          : tileType === "Exercise"
          ? "bg-exercise"
          : tileType === "Study"
          ? "bg-study"
          : "bg-self-care")
      }
    >
      <img
        src={imageType}
        className="object-contain w-12 h-12 absolute right-2 -top-2"
      />
      <div className="bg-Blue-2 rounded-lg p-6 absolute bottom-0 w-full hover:bg-Blue-3 cursor-pointer">
        <div className="flex justify-between items-center mb-4">
          <p className="text-white font-md text-sm">{tileType}</p>
          <img
            src="./images/icon-ellipsis.svg"
            alt="icon image"
            className="h-full cursor-pointer"
          />
        </div>
        <div className="max-[640px]:flex max-[640px]:justify-between max-[640px]:items-center">
          <p className="text-white font-sm text-5xl mb-2 max-[1000px]:text-3xl">
            {today}hrs
          </p>
          <p className="text-white font-sm text-xs">
            Last {category}-{last}
          </p>
        </div>
      </div>
    </div>
  );
}
