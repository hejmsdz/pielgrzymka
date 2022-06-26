import * as React from "react";
import { Link } from "gatsby";
import "@picocss/pico";
// import "../styles/main.scss";

const days = [
    {
        number: 1,
        date: "2022-07-02",
        celebration: "Narodzenie Pańskie",
    },
    {
        number: 2,
        date: "2022-07-03",
        celebration: "Nawiedzenie Najświętszej Maryi Panny",
    },
    {
        number: 3,
        date: "2022-07-04",
        celebration: "Zmartwychwstanie Pańskie",
    },
    {
        number: 4,
        date: "2022-07-05",
        celebration: "Wspomnienie św. Marty, Marii i Łazarza",
    },
    {
        number: 5,
        date: "2022-07-06",
        celebration: "Uroczystość Świętych Apostołów Piotra i Pawła",
    },
    {
        number: 6,
        date: "2022-07-07",
        celebration: "Święto Przemienienia Pańskiego",
    },
    {
        number: 7,
        date: "2022-07-08",
        celebration: "Wielki Czwartek",
    },
    {
        number: 8,
        date: "2022-07-09",
        celebration: "Emaus",
    },
];

const IndexPage = () => {
    return (
        <main>
            <title>Śpiewnik</title>
            <h1>Śpiewnik</h1>
            <ul className="days">
                {days.map((day) => (
                    <li className="" key={day.number}>
                        <strong className="day">Dzień {day.number}</strong>
                        <div className="celebration">{day.celebration}</div>
                        <div className="links">
                            <Link to={`/dzien/${day.number}/jutrznia`}>Jutrznia</Link>
                            <span className="divider" />
                            <Link to={`/dzien/${day.number}/msza`}>Msza Święta</Link>
                            <span className="divider" />
                            <Link href={`/dzien/${day.number}/nieszpory`}>Nieszpory</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default IndexPage;
