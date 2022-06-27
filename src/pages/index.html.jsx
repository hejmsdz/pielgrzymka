import { Layout } from "../components/layout";
import { days } from "../contents.js";

export default () => (
  <Layout hasBackLink={false}>
    <h1>Śpiewnik</h1>
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
  </Layout>
);
