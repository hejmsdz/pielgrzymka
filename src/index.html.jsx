import { Layout } from "./layouts/base";
import { days } from "./contents.js";

export default () => (
  <Layout hasBackLink={false} bodyClassName="mainPage">
    {/* <header className="header">
      <div className="innerHeader">
        <h1>
          Ziemia Święta
          <small>pielgrzymkowy śpiewnik i brewiarz</small>
        </h1>
      </div>
    </header> */}
    <main>
      <ul className="days">
        {days.map((day) => (
          <li key={day.number}>
            <strong className="day">Dzień {day.number}</strong>
            <div className="celebration">{day.celebration}</div>
            <div className="links">
              {day.links.map((link, index) => (
                <React.Fragment key={link.key}>
                  {index > 0 && <span className="divider" />}
                  <a href={link.path}>{link.label}</a>
                </React.Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </main>
  </Layout>
);
