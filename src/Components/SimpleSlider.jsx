import { Carousel } from "@material-tailwind/react";

export function SimpleSlider() {
  return (
    <Carousel transition={{ duration: 2 }} className=" h-[45vh]">
      <img
        src="https://images.hdqwalls.com/wallpapers/road-to-haven-mountains-4k-ut.jpg"
        alt="image 1"
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.hdqwalls.com/wallpapers/sunrise-in-twin-lakes-colorado-ll.jpg"
        alt="image 2"
        className="w-full h-full object-cover"
      />
      <img
        src="https://images.hdqwalls.com/wallpapers/switzerland-hills-mountains-et.jpg"
        alt="image 3"
        className="w-full h-full object-cover"
      />
    </Carousel>
  );
}
