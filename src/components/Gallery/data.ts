import {
    westminster,
    westminsterMd,
    westminsterSm,
    face,
    faceMd,
    faceSm,
    market,
    marketMd,
    marketSm,
    statue,
    statueMd,
    statueSm,
} from "../../assets";

export interface Gallery {
    id: number;
    img: string;
    imgMd: string;
    imgSm: string;
    cat: string;
    title: string;
    cols: number;
    ratio: string;
}

export const galleryData: Gallery[] = [
    {
        id: 1,
        img: westminster,
        imgMd: westminsterMd,
        imgSm: westminsterSm,
        cat: "Palacio de Westminster, Londres",
        title: "Gótico Perpendicular",
        cols: 7,
        ratio: "4/5",
    },
    {
        id: 2,
        img: face,
        imgMd: faceMd,
        imgSm: faceSm,
        cat: "Estatua en el Louvre, París",
        title: "Fisonomía de la Sabiduría",
        cols: 5,
        ratio: "4/6",
    },
    {
        id: 3,
        img: market,
        imgMd: marketMd,
        imgSm: marketSm,
        cat: "Mercado San Miguel, Madrid",
        title: "Mercado Viejo",
        cols: 5,
        ratio: "16/9",
    },
    {
        id: 4,
        img: statue,
        imgMd: statueMd,
        imgSm: statueSm,
        cat: "Estatua en el V&A, Londres",
        title: "Postura Elegante",
        cols: 7,
        ratio: "16/9",
    },
];
