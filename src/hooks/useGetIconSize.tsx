import { useEffect, useState } from "react";

export const useGetIconSize = () => {
  const [iconWeatherDetailsSize, setIconWeatherDetailsSize] = useState(30);
  const [iconForecastSize, setIconForecastSize] = useState(40);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= 320) {
        setIconWeatherDetailsSize(20);
        setIconForecastSize(20)
      } else if (window.innerWidth <= 384) {
        setIconWeatherDetailsSize(15);
      } else if (window.innerWidth <= 500) {
        setIconWeatherDetailsSize(25);
        setIconForecastSize(30)
      } else if (window.innerWidth <= 1153) {
        setIconWeatherDetailsSize(25);
      } else if (window.innerWidth <= 1450) {
        setIconWeatherDetailsSize(35);
        setIconForecastSize(40);
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
