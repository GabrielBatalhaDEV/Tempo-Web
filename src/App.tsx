import { WeatherCard } from "./components/WeatherCard";

import { Icons64, Icons160 } from "./assets";
import { ForecastCard } from "./components/ForecastCard";

interface WeatherProps {
  city_name: string;
  sunrise: string;
  sunset: string;
  forecast: {
    date: string;
    weekday: string;
    max: number;
    min: number;
    wind_speedy: string;
    description: string;
    condition: string;
  };
}

function App() {
  return (
    <div className="text-white-300 text-sm font-semibold py-10">
      <img
        src="images/UmbrellaLogo.png"
        alt="UmbrellaLogo"
        className="m-auto"
      />
      <WeatherCard
        image={Icons160.Sun160}
        city="São Paulo"
        condiction="Tempo Limpo"
        day={13}
        month={11}
        sunRise="5:40"
        sunSet="6:30"
        therMax={24}
        therMin={16}
        weekDay="Dom"
        windSpeedy="4.65"
      />

      <div className="grid grid-cols-6 mx-16 mt-8 gap-4 h-72">
        <ForecastCard
          image={Icons64.Rain64}
          condiction="chuva"
          day={14}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Seg"
          windSpeedy="4.20"
        />
        <ForecastCard
          image={Icons64.Fog64}
          condiction="Parcialmente Nublado"
          day={15}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Ter"
          windSpeedy="4.20"
        />
        <ForecastCard
          image={Icons64.Hail64}
          condiction="Granizo"
          day={16}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Qua"
          windSpeedy="4.20"
        />
        <ForecastCard
          image={Icons64.Storm64}
          condiction="Tempestade"
          day={17}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Qui"
          windSpeedy="4.20"
        />
        <ForecastCard
          image={Icons64.Undefined64}
          condiction="Indefinido"
          day={18}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Sex"
          windSpeedy="4.20"
        />
        <ForecastCard
          image={Icons64.CloudSun64}
          condiction="Tempo Fechado"
          day={19}
          month={11}
          therMax={40}
          therMin={15}
          weekDay="Sab"
          windSpeedy="4.20"
        />
      </div>
    </div>
  );
}

export default App;
