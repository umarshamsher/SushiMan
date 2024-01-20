//  import images as relative image path won't work with vite/vercel.

// import check from '/assets/check.svg'
// import star from '/assets/star.svg'
// import sushil2 from '/assets/sushi-12.svg'
// import sushil11 from '/assets/sushi-11.svg'
// import sushi10 from '/assets/sushi-10.svg'


//  init AOS animation

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc:"/assets/sushi12.png",
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc:"/assets/sushi11.png",
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc:"/assets/sushi10.png",
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];