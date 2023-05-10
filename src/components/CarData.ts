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
  price: string;
  image: any;
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
    price: "70",
    image: Mercedes,
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
    price: "60",
    image: BMW,
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
    price: "55",
    image: Golf,
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
    price: "60",
    image: Astra,
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
    image: Audi,
    price: "55",
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
    image: Kia,
    price: "30",
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
    image: C3,
    price: "40",
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
    image: TRoc,
    price: "70",
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
    image: Touareg,
    price: "45",
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
    price: "55",
    image: Tucson,
  },
];
