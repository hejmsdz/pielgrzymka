import K from "../k";
import W from "../w";

export default ({ alleluja, children }) => (
  <div>
    <p>
      <div className="comment">
        Jeśli kapłan lub diakon przewodniczy oficjum, zwraca się do wiernych ze
        słowami:
      </div>
      <K>Pan z wami.</K>
      <W> I z duchem twoim.</W>
      {children}
      <K>
         Niech was błogosławi Bóg wszechmogący: Ojciec i Syn, † i Duch Święty.
      </K>
      <W>Amen.</W>
    </p>

    <p>
      <div className="comment">
        Jeśli wierni mają się rozejść, dodaje się wezwanie:
      </div>
      <K>Idźcie w pokoju Chrystusa. {alleluja && "Alleluja, alleluja."}</K>
      <W>Bogu niech będą dzięki. {alleluja && "Alleluja, alleluja."}</W>
    </p>
  </div>
);
