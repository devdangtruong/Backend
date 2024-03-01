import { productModel } from "../Model/product.js";
import { faker } from "@faker-js/faker";
const showProducts = async (req, res, next) => {
  const products = await productModel.find().populate(`poster`);
  res.status(200).send(products);
};

const postProducts = async (req, res, next) => {
  const body = req.body;
  const products = await productModel.create({
    name: body.name,
    price: body.price,
    information: faker.lorem.paragraph({ min: 1, max: 3 }),
  });
  res.status(200).send(products);
};

export { showProducts, postProducts };
