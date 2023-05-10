import Mercedes from "../images/hero-picture.png";
import BMW from "../images/bmw.png";
import Golf from "../images/golf7.png";
import Astra from "../images/astra.png";
import Audi from "../images/a3.png";
import Kia from "../images/ceed.png";
import C3 from "../images/c3.png";
import TRoc from "../images/troc.png";
import Touareg from "../images/touareg.png";
import Tucson from "../images/tucson.png";
import MercedesNEW from "../images/car-merc-e.jpg";
import BMWNEW from "../images/car-bmw-525.jpg";
import GolfNEW from "../images/car-golf.jpg";
import AstraNEW from "../images/car-astra.jpg";
import AudiNEW from "../images/car-audi.jpg";
import KiaNEW from "../images/car-kia.jpg";
import C3NEW from "../images/car-c3.jpg";
import TRocNEW from "../images/car-troc.png";
import TouaregNEW from "../images/car-touareg.jpg";
import TucsonNEW from "../images/car-tucson.jpg";

interface CarData {
  name: string;
  make: string;
  model: string;
  year: string;
  doors: string;
  coupe: string;
  engine: string;
  transmission: string;
  horsepower: string;
  consumption: string;
  price: number;
  image: any;
  imageNEW: any;
}

export const CAR_DATA: CarData[] = [
  {
    name: "Mercedes E200",
    make: "Mercedes",
    model: "E200",
    year: "2020",
    doors: "4/5",
    coupe: "Sedan",
    engine: "Gasoline",
    transmission: "Automatic",
    horsepower: "197",
    consumption: "6.9l/100km",
    price: 70,
    image: Mercedes,
    imageNEW: MercedesNEW,
  },
  {
    name: "BMW 525",
    make: "BMW",
    model: "525",
    year: "2017",
    doors: "4/5",
    coupe: "Sedan",
    engine: "Diesel",
    transmission: "Automatic",
    horsepower: "231",
    consumption: "4.8l/100km",
    price: 60,
    image: BMW,
    imageNEW: BMWNEW,
  },
  {
    name: "VW Golf 7",
    make: "Volkswagen",
    model: "Golf 7",
    year: "2018",
    doors: "4/5",
    coupe: "Hatchback",
    engine: "Diesel",
    transmission: "Manual",
    horsepower: "184",
    consumption: "4.7l/100km",
    price: 55,
    image: Golf,
    imageNEW: GolfNEW,
  },
  {
    name: "Opel Astra",
    make: "Opel",
    model: "Astra",
    year: "2022",
    doors: "4/5",
    coupe: "Hatchback",
    engine: "Gasoline",
    transmission: "Automatic",
    horsepower: "130",
    consumption: "5.0l/100km",
    price: 60,
    image: Astra,
    imageNEW: AstraNEW,
  },
  {
    name: "Audi A3",
    make: "Audi",
    model: "A3",
    year: "2017",
    doors: "2/3",
    coupe: "Cabrio",
    engine: "Diesel",
    transmission: "Automatic",
    horsepower: "150",
    consumption: "4.2l/100km",
    price: 55,
    image: Audi,
    imageNEW: AudiNEW,
  },
  {
    name: "Kia Ceed",
    make: "Kia",
    model: "Ceed",
    year: "2015",
    doors: "4/5",
    coupe: "Hatchback",
    engine: "Gasoline",
    transmission: "Automatic",
    horsepower: "136",
    consumption: "3.8l/100km",
    price: 30,
    image: Kia,
    imageNEW: KiaNEW,
  },
  {
    name: "Citroen C3",
    make: "Citroen",
    model: "C3",
    year: "2019",
    doors: "4/5",
    coupe: "SUV",
    engine: "Diesel",
    transmission: "Automatic",
    horsepower: "120",
    consumption: "4.1l/100km",
    price: 40,
    image: C3,
    imageNEW: C3NEW,
  },
  {
    name: "VW T-Roc",
    make: "Volkswagen",
    model: "T-Roc",
    year: "2021",
    doors: "4/5",
    coupe: "SUV",
    engine: "Diesel",
    transmission: "Automatic",
    horsepower: "110",
    consumption: "5.1l/100km",
    price: 70,
    image: TRoc,
    imageNEW: TRocNEW,
  },
  {
    name: "VW Touareg",
    make: "Volkswagen",
    model: "Touareg",
    year: "2012",
    doors: "4/5",
    coupe: "SUV",
    engine: "Diesel",
    transmission: "Automatic",
    horsepower: "245",
    consumption: "7.2l/100km",
    price: 45,
    image: Touareg,
    imageNEW: TouaregNEW,
  },
  {
    name: "Hyundai Tucson",
    make: "Hyundai",
    model: "Tucson",
    year: "2016",
    doors: "4/5",
    coupe: "SUV",
    engine: "Gasoline",
    transmission: "Automatic",
    horsepower: "177",
    consumption: "7.6l/100km",
    price: 55,
    image: Tucson,
    imageNEW: TucsonNEW,
  },
];
