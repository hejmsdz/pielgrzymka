import Canticle from './canticle';

export default ({ antiphon }) => (
    <Canticle title="Pieśń Maryi" antiphon={antiphon}>
        {
            `Wielbi dusza moja Pana *
i raduje się duch mój w Bogu, Zbawicielu moim.

Bo wejrzał na uniżenie swojej Służebnicy. *
Oto bowiem odtąd błogosławić mnie będą wszystkie pokolenia.

Gdyż wielkie rzeczy uczynił mi Wszechmocny, *
a Jego imię jest święte.

Jego miłosierdzie z pokolenia na pokolenie *
nad tymi, którzy się Go boją.

Okazał moc swego ramienia, *
rozproszył pyszniących się zamysłami serc swoich.

Strącił władców z tronu, *
a wywyższył pokornych.

Głodnych nasycił dobrami, *
a bogatych z niczym odprawił.

Ujął się za swoim sługą, Izraelem, *
pomny na swe miłosierdzie,

Jak obiecał naszym ojcom, *
Abrahamowi i jego potomstwu na wieki.

Chwała Ojcu i Synowi, *
i Duchowi Świętemu.

Jak była na początku, teraz i zawsze, *
i na wieki wieków. Amen.`.split('\n\n').map(verse => <p>{verse}</p>)}
    </Canticle >
);
