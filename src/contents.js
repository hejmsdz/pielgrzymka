export const labels = {
    jutrznia: 'Jutrznia',
    msza: 'Msza Święta',
    nieszpory: 'Nieszpory',
};

const defaultLinks = ['jutrznia', 'msza', 'nieszpory'];

export const days = [
    {
        number: 1,
        celebration: "Narodzenie Pańskie",
    },
    {
        number: 2,
        celebration: "Nawiedzenie Najświętszej Maryi Panny",
    },
    {
        number: 3,
        celebration: "Zmartwychwstanie Pańskie",
    },
    {
        number: 4,
        celebration: "Wspomnienie św. Marty, Marii i Łazarza",
    },
    {
        number: 5,
        celebration: "Uroczystość Świętych Apostołów Piotra i Pawła",
    },
    {
        number: 6,
        celebration: "Święto Przemienienia Pańskiego",
    },
    {
        number: 7,
        celebration: "Getsemani",
    },
    {
        number: 8,
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
