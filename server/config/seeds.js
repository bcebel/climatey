const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Kitty Litter" },
    { name: "Carbon Credits" },
    { name: "Home" },
    { name: "Garden" },
    //     { name: [Artist] },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "PurrCarbon Kitty Litter",
      description: "Super Lightweight, absorbent and clumping kitty litter",
      artist:
        "Carbon Negative, Super Lightweight, absorbent and clumping kitty litter",
      image: "/images/futurecat.jpeg",
      category: categories[0]._id,
      price: 20.99,
      quantity: 100,
    },

    {
      name: "Carbon Credits",
      description: "1 ton of CO2 offset",
      artist: "Every ton of biochar produced sequesters 3 tons of CO2.",
      image: "/images/carboncredit.jpeg",
      category: categories[1]._id,
      price: 200,
      quantity: 100,
    },
    {
      name: "Flower Pot",
      description: "Carbonized Cement Flower Pot.  Elegant and durable.  It is lighter than traditional concrete",
      artist: "An elegant carbonized cement flower pot.",
      image: "/images/flowerpot.jpeg",
      category: categories[2]._id,
      price: 200,
      quantity: 100,
    },
    {
      name: "CarbonGarden",
      description:
        "A soil booster made from biochar and compost.  Helps alkalize soil and retain moisture.     Improved Soil Fertility and Nutrient Retention Enhanced Nutrient Availability Biochar increases the availability of essential nutrients like nitrogen, phosphorus, and potassium in the soil. Its porous structure allows it to retain nutrients and slowly release them to plants, reducing nutrient leaching and enhancing soil fertility. Microbial Activity Enhanced Soil Structure and Water Retention Improved Soil Aeration Water Holding Capacity This increased water holding capacity reduces the frequency of irrigation needed and helps plants withstand periods of water stress Carbon Sequestration and Environmental Benefits Carbon Storage Reduction of Greenhouse Gas Emissions",
      artist: "Biochar Soil Booster with Compost",
      image: "/images/soil.jpeg",
      category: categories[3]._id,
      price: 200,
      quantity: 100,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Robert",
    lastName: "Boss",
    email: "RB@happytrees.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Pranksy",
    lastName: "Banksy",
    email: "graffiti@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
