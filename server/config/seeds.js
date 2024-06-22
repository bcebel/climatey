const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Lavender" },
    { name: "Cosmic Cat" },
    { name: "Unscented" },
    { name: "10 LB" },
    { name: "20 LB" },
    //     { name: [Artist] },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Lavender Fields Forever",
      description:
        "Like Woodstock, but with more lavender, or I dunno like Pike's Place Market in Seattle, but with more lavender.",
      artist: "Super Lightweight, super absorbent, super lavender-y",
      image: "/images/cat1.jpeg",
      category: categories[0]._id,
      price: 20.99,
      quantity: 1,
    },
    {
      name: "Cosmic Cat Litter",
      description: "Totally groovy cat litter for your totally groovy cat.",
      artist: "Montgomery Montague",
      image: "/images/cat2.jpeg",
      category: categories[1]._id,
      price: 109.99,
      quantity: 2,
    },
    {
      name: "Happy Days",
      description: "Neon Car 50s",
      artist: "Fonzie Heyy",
      image: "/images/cat3.jpeg",
      category: categories[2]._id,
      price: 200.99,
      quantity: 1,
    },
    {
      name: "Moo",
      description: "Neon Cow",
      artist: "Fawn Z. Hay",
      image: "/images/cat4.jpeg",
      category: categories[3]._id,
      price: 200.99,
      quantity: 1,
    }
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
