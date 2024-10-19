import { useEffect, useState } from "react";

export const useGetIconSize = () => {
  const [iconWeatherSize, setWeatherIconSize] = useState(30);
  const [iconToggleThemSize, setIconToggleThemSize] = useState(15);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 320) {
        setWeatherIconSize(10);
        setIconToggleThemSize(8);
      } else if (window.innerWidth <= 384) {
        setWeatherIconSize(15);
        setIconToggleThemSize(10);
      } else if (window.innerWidth <= 499) {
        setWeatherIconSize(15);
        setIconToggleThemSize(12);
      } else if (window.innerWidth <= 570) {
        setWeatherIconSize(15);
      } else if (window.innerWidth <= 1375) {
        setWeatherIconSize(20);
      } else if (window.innerWidth <= 1600) {
        setWeatherIconSize(30);
      } else {
        setWeatherIconSize(35);
        setIconToggleThemSize(15);
      }
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return { iconWeatherSize, iconToggleThemSize };
};
