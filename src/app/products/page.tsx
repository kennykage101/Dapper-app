import React from "react";
import ProductCard from "@/components/UI/product-card";
import classes from "@/components/UI/product-card.module.scss";
import RedWhiteShoe from "@/assets/redWhit_side.png";
import RedShoe from "@/assets/red_side.png";
import TurqShoe from "@/assets/turq_side.png";
import BrownShoe from "@/assets/brown_side.png";

const DUMMY_PRODUCTS = [
  {
    image: RedShoe.src,
    description: "Red Shooz",
    likes: 2,
    price: 800.00,
  },
  {
    image: RedWhiteShoe.src,
    description: "Red and White Shooz",
    likes: 3,
    price: 650.00,
  },
  {
    image: TurqShoe.src,
    description: "Turquios Shooz",
    likes: 6,
    price: 900.00,
  },
  {
    image: BrownShoe.src,
    description: "Brown Shooz",
    likes: 1,
    price: 1000.00,
  },
];

const ProductPage: React.FC = () => {
  return (
    <main className={classes.container}>
      <h1 className={classes.title}>MEN/WOMEN</h1>
      <div className={classes["product-container"]}>
        {DUMMY_PRODUCTS.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductPage;
