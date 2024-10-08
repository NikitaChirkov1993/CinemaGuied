import top10__1 from "/imgs/top10Film/top10__1.png";
import top10__2 from "/imgs/top10Film/top10__2.png";
import top10__3 from "/imgs/top10Film/top10__3.png";

interface Movie {
    id: number;
    imges: string;
    rating: number;
    year: number;
    genere: string[];
    time: number;
    title: string;
}

export const dataTop5:Movie[] = [
    {
        id: 1,
        imges: top10__1,
        rating: 7.555,
        year: 1979,
        genere: ["детектив"],
        time: 107,
        title: "Шерлок Холмс и доктор Ватсон: Знакомство",
    },
    {
        id: 2,
        imges: top10__2,
        rating: 7.44,
        year: 2009,
        genere: ["боевик", "приключение"],
        time: 128,
        title: "Шерлок Холмс",
    },
    {
        id: 3,
        imges: top10__3,
        rating: 8.9,
        year: 2013,
        genere: ["детектив"],
        time: 107,
        title: "Шерлок (сериал)",
    },
];
