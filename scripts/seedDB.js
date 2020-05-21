const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost/reactsugarrush"
);

const restaurantSeed = [
  {
    name: "Rita's Italian Ice",
    dessertOne: {
      description: "Italian Ice",
      price: 4,
    },
    dessertTwo: {
      description: "Macaron",
      price: 2,
    },

    location: {
      address: "3390 Coachman Road 55121",
      locality: "Eagan",
    },
    price_range: 1,
    phone_number: "(651) 207-5727",
  },
  {
    name: "Adele's",
    dessertOne: {
      description: "Custard",
      price: 5,
    },
    dessertTwo: {
      description: "Ice Cream Sandwich",
      price: 4,
    },
    dessertThree: {
      description: "Malt",
      price: 4,
    },
    location: {
      address: "800 Excelsior Blvd 55331",
      locality: "Excelsior",
    },
    price_range: 3,
    phone_number: "(952) 470-0035",
  },
  {
    name: "Licks Unlimited",
    dessertOne: {
      description: "Ice Cream", 
      price: 3,
    },
    dessertTwo: {
        description: "Pie", 
        price: 4,
      },
    location: {
      address: "31 Water Street 55331",
      locality: "Excelsior",
    },
    price_range: 2,
    phone_number: "(952) 474-4791",
  },
  {
    name: "Patisserie 46",
    dessertOne: {
      description: "Macarons",
      price: 3,
    },
    dessertTwo: {
      description: "Cookie",
      price: 3,
    },
    dessertThree: {
      description: "Pie",
      price: 4,
    },
    location: {
      address: "4552 Grand Ave S",
      locality: "Minneapolis",
    },
    price_range: 3,
    phone_number: "(612) 354-3257",
  },
  {
    name: "Rustica",
    dessertOne: {
      description: "Cookies",
      price: 4,
    },
    dessertTwo: {
      description: "Eclair",
      price: 5,
    },
    location: {
      address: "3220 W Lake Street",
      locality: "Minneapolis",
    },
    price_range: 4,
    phone_number: "(612) 822-1119",
  },
  {
    name: "Glam Doll Donuts",
    dessertOne: {
      description: "Donuts",
      price: 5,
    },
    location: {
      address: "2605 Nicollet Ave",
      locality: "Minneapolis",
    },
    price_range: 5,
    phone_number: "(612) 345-7064",
  },
  {
    name: "Sebastian Joe's Ice Cream Cafe",
    dessertOne: {
      description: "Ice Cream",
      price: 4,
    },
    dessertTwo: {
      description: "Cookie",
      price: 4,
    },
    dessertThree: {
      description: "Biscotti",
      price: 3,
    },
    location: {
      address: "1007 W Franklin Ave",
      locality: "Minneapolis",
    },
    price_range: 4,
    phone_number: "(612) 870-0065",
  },
  {
    name: "Wuollet Bakery",
    dessertOne: {
      description: "Donut",
      price: 8,
    },
    dessertTwo: {
      description: "Cookie",
      price: 4,
    },
    dessertThree: {
      description: "Biscotti",
      price: 3,
    },
    location: {
      address: "3608 W 50th Street",
      locality: "Minneapolis",
    },
    price_range: 4,
    phone_number: "(612) 922-4341",
  },
  {
    name: "Nothing Bundt Cakes",
    dessertOne: {
      description: "Cakes",
      price: 8,
    },
    dessertTwo: {
      description: "Cookie",
      price: 5,
    },
    
    location: {
      address: "12987 Ridgedale Drive",
      locality: "Minnetonka",
    },
    price_range: 5,
    phone_number: "(952) 546-1406",
  },
  {
    name: "Cocoa & Fig",
    dessertOne: {
      description: "Macaron",
      price: 8,
    },
    dessertTwo: {
      description: "Cupcake",
      price: 8,
    },
    dessertThree: {
      description: "Cake",
      price: 8,
    },
    location: {
      address: "651 Nicollet Mall",
      locality: "Minneapolis",
    },
    price_range: 8,
    phone_number: "(312) 333-1485",
  },
  {
    name: "Patisserie Margo",
    dessertOne: {
      description: "Macaron",
      price: 4,
    },
    dessertTwo: {
      description: "Croissant",
      price: 4,
    },
    dessertThree: {
      description: "Danish",
      price: 4,
    },
    location: {
      address: "4510 Valley View Road",
      locality: "Edina",
    },
    price_range: 3,
    phone_number: "(952) 926-0548",
  },
  {
    name: "Cone Brothers Ice Cream",
    dessertOne: {
      description: "Ice Cream",
      price: 4,
    },
    dessertTwo: {
      description: "Malt",
      price: 4,
    },
    dessertThree: {
      description: "Pie",
      price: 4,
    },
    location: {
      address: "6633 Penn Ave S",
      locality: "Richfield",
    },
    price_range: 4,
    phone_number: "(612) 455-0452",
  },
];

db.Restaurant.remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
