import { useEffect, useState } from "react";

export const useGetIconSize = () => {
  const [iconWeatherDetailsSize, setIconWeatherDetailsSize] = useState(30);
  const [iconForecastSize, setIconToggleThemSize] = useState(40);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 320) {
        setIconWeatherDetailsSize(10);
      } else if (window.innerWidth <= 384) {
        setIconWeatherDetailsSize(15);
      } else if (window.innerWidth <= 499) {
        setIconWeatherDetailsSize(25);
      } else if (window.innerWidth <= 1153) {
        setIconWeatherDetailsSize(25);
      } else if (window.innerWidth <= 1450) {
        setIconWeatherDetailsSize(35);
        setIconToggleThemSize(40);
      } else {
        setIconWeatherDetailsSize(40);
      }
    };

    updateIconSize();
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  return { iconWeatherDetailsSize, iconForecastSize };
};
