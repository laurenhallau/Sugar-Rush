const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGOD_URI || "mongodb://localhost/reactsugarrush"
);

const restaurantSeed = [
{
   name: "Rita's Italian Ice",
   dessert:{
        description: ["Italian Ice", "Macaroon"],
        price: 2
   },
   location: {
       address: "3390 Coachman Road 55121",
       locality: "Eagan",
       city: "Twin Cities",
   },
   price_range: 1,
},
{
    name: "Adele's",
    dessert:{
        description: ["Soft Serve", "Cake", "Cookie", "Malt"],
        price: 2
   },
    location: {
        address: "800 Excelsior Blvd 55331",
        locality: "Excelsior",
        city: "Twin Cities",
    },
    price_range: 3,
},
{
    name: "Licks Unlimited",
    dessert:{
        description: ["Ice Cream", "Pie"],
        price: 2
   },
    location: {
        address: "31 Water Street 55331",
        locality: "Excelsior",
        city: "Twin Cities",
    },
    price_range: 2,
}
];

db.Restaurant.remove({})
  .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
