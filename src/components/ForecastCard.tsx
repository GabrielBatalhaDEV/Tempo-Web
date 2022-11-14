import { Minus, ThermometerCold, ThermometerHot, Wind } from "phosphor-react";

interface ForecastCardProps {
  weekDay: string;
  image: string;
  day: number;
  month: number;
  condiction: string;
  therMax: number;
  therMin: number;
  windSpeedy: string;
}

export function ForecastCard({
  image,
  weekDay,
  condiction,
  day,
  month,
  therMax,
  therMin,
  windSpeedy,
}: ForecastCardProps) {
  return (
    <section className="bg-black-600 gap-3 px-3 py-2 flex flex-col items-center rounded">
      <header className="flex flex-col items-center justify-start gap-3 h-40">
        <span className="flex items-center gap-1">
          {weekDay} <Minus size={12} weight="bold" /> {day}/{month}
        </span>
        <img src={image} alt="ForecastImage" />
        <span className="font-bold text-center">{condiction}</span>
      </header>

      <div className="flex gap-2 text-xs">
        <div className="text-blue-900 flex gap-1 items-center">
          <ThermometerCold weight="light" color="#0063F7" size={32} />
          <span>{therMin} &#8451;</span>
        </div>
        <div className="text-red-900 flex gap-1 items-center">
          <ThermometerHot weight="light" color="#FF3B3B" size={32} />
          <span>{therMax} &#8451;</span>
        </div>
      </div>
      <div className="flex items-center text-xs gap-1">
        <Wind size={32} /> {windSpeedy} km/h
        <span className=""></span>
      </div>
    </section>
  );
}
