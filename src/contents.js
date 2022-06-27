export const labels = {
    jutrznia: 'Jutrznia',
    msza: 'Msza Święta',
    nieszpory: 'Nieszpory',
};

const defaultLinks = ['jutrznia', 'msza', 'nieszpory'];

export const days = [
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
        path: `/dzien/${day.number}/${key}.html`,
    })),
}));
