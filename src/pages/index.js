import React, { useEffect } from "react";
import { Link, prefetchPathname } from "gatsby";
import "@picocss/pico";
import Toolbar from "../components/toolbar";

const labels = {
    jutrznia: 'Jutrznia',
    msza: 'Msza Święta',
    nieszpory: 'Nieszpory',
};

const defaultLinks = ['jutrznia', 'msza', 'nieszpory'];

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
].map(day => ({
    ...day,
    links: (day.links || defaultLinks).map(key => ({
        key,
        label: labels[key],
        path: `/dzien/${day.number}/${key}`,
    })),
}));

const IndexPage = () => {
    useEffect(() => {
        const links = days.flatMap(day => day.links);
        const promises = links
            .map(link => console.log('fetching', link.path) || prefetchPathname(link.path)
                .then(() => console.log('DONE', link.path)));
        Promise.all(promises).then(() => console.log('all done!'));
    }, []);
    const today = new Date();

    return (
        <main>
            <title>Śpiewnik</title>
            <Toolbar />
            <h1>Śpiewnik</h1>
            <ul className="days">
                {days.map((day) => {
                    const date = new Date(day.date);
                    const isPast = date < today;

                    return (
                        <li className={isPast ? 'past' : ''} key={day.number}>
                            <strong className="day">Dzień {day.number}</strong>
                            <div className="celebration">{day.celebration}</div>
                            <div className="links">
                                {day.links.map((link, index) => (
                                    <React.Fragment key={link.key}>
                                        {index > 0 && (<span className="divider" />)}
                                        <Link to={link.path}>{link.label}</Link>
                                    </React.Fragment>
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </main>
    );
};

export default IndexPage;
