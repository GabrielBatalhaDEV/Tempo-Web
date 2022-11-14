import {
  Calendar,
  ThermometerHot,
  ThermometerCold,
  Wind,
  SunHorizon,
  Minus,
} from "phosphor-react";

interface WeatherCardProps {
  weekDay: string;
  image: string;
  day: number;
  month: number;
  condiction: string;
  therMax: number;
  therMin: number;
  windSpeedy: string;
  city: string;
  sunRise: string;
  sunSet: string;
}

export function WeatherCard({
  image,
  weekDay,
  condiction,
  day,
  month,
  therMax,
  therMin,
  windSpeedy,
  city,
  sunRise,
  sunSet,
}: WeatherCardProps) {
  return (
    <div className="flex justify-center mt-24">
      <section className="flex flex-col">
        <h1 className="font-black text-xl">{city}</h1>
        <section className="flex py-4 px-6 bg-black-600  rounded-b-lg rounded-tr-lg gap-6 items-center shadow-md">
          <div className="flex flex-col items-center gap-2">
            <img src={image} alt="Sun" />
            <h2 className="text-md font-bold ">{condiction}</h2>
            <footer className="flex items-center gap-1">
              <SunHorizon size={32} />
              <span>{sunRise} am</span>
              <Minus size={12} weight="bold" />
              <span>{sunSet} pm</span>
            </footer>
          </div>
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-1">
              <Calendar size={32} />
              <span>
                {day}/{month}
              </span>
              <Minus size={12} weight="bold" />
              <span>{weekDay}</span>
            </div>
            <div className="flex items-center gap-1 text-red-900">
              <ThermometerHot size={32} color="#FF3B3B" weight="light" />
              <span>{therMax} &#8451;</span>
            </div>
            <div className="flex items-center gap-1 text-blue-900  ">
              <ThermometerCold size={32} color="#0063F7" weight="light" />
              <span>{therMin} &#8451;</span>
            </div>
            <div className="flex items-center gap-1">
              <Wind size={32} weight="light" />
              <span>{windSpeedy} km/h</span>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
