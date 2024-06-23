const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Kitty Litter" },
    { name: "Carbon Credits" },
    { name: "Garden" },
    //     { name: [Artist] },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Lavender Litter",
      description: "Lavender Fields Furrever.",
      artist: "Super Lightweight, absorbent and clumping kitty litter",
      image: "/images/cat3.jpeg",
      category: categories[0]._id,
      price: 20.99,
      quantity: 1,
    },
    {
      name: "Cosmic Kitty Litter",
      description: "Totally groovy cat litter for your totally groovy cat.",
      artist: "Frankensense Aromatherapy for your cat.",
      image: "/images/cat4.jpeg",
      category: categories[0]._id,
      price: 20.99,
      quantity: 2,
    },
    {
      name: "Unscented Cat Litter",
      description:
        "Unscented Cat Litter for the discerning cat owner.  10 LB bag.",
      artist: "Simple, clean, and effective.",
      image: "/images/cat8.png",
      category: categories[0]._id,
      price: 20.99,
      quantity: 1,
    },
    {
      name: "Carbon Credits",
      description: "1 ton of CO2 offset",
      artist: "Thank you for offsetting carbon emissions!",
      image: "/images/carboncredit.jpeg",
      category: categories[1]._id,
      price: 200,
      quantity: 1,
    },
    {
      name: "Carbon Footprints Stepping Stones",
      description: "1 Foot by 1 Foot square stepping stones.",
      artist: "Large Square Tiles",
      image: "/images/pavers.jpeg",
      category: categories[2]._id,
      price: 20,
      quantity: 1,
    },
    {
      name: "Carbon Footprints Stepping Stones",
      description: "6 inch by 6 inch square stepping stones.",
      artist: "Small Square Tiles",
      image: "/images/pavers.jpeg",
      category: categories[2]._id,
      price: 20,
      quantity: 1,
    },
    {
      name: "Carbon Footprints Stepping Stones",
      description: "6 inch by 12 inch rectangular stepping stones.",
      artist: "Rectangle Tiles",
      image: "/images/pavers.jpeg",
      category: categories[2]._id,
      price: 20,
      quantity: 1,
    },
    {
      name: "Gnome",
      description:
        "Imagine Glimmerwick the Gnome standing about 12 inches tall, with a cheerful expression on his face.  Glimmerwick's attire is crafted from textured, carbonized cement, which gives him a weathered appearance that blends harmoniously with garden surroundings.",
      artist: "Fawn Z. Hay",
      image: "/images/gnome.jpeg",
      category: categories[2]._id,
      price: 200,
      quantity: 1,
    },
    {
      name: "Flower Pot",
      description: "An elegant carbonized cement flower pot.",
      artist: "C. Ment",
      image: "/images/flowerpot.jpeg",
      category: categories[2]._id,
      price: 200,
      quantity: 1,
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
