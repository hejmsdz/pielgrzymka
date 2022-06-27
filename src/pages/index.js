import React from "react";
import { Link } from "gatsby";
import "@picocss/pico";
import Toolbar from "../components/toolbar";
import { days } from '../contents';

const IndexPage = () => {
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
