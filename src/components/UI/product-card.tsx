import React from "react";
import classes from "./product-card.module.scss";
import Image from "next/image";

interface ProductCardProps {
  product: {
    image: string;
    description: string;
    likes: number;
    price: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={classes.box}>
      <Image
        className={classes.prod_img}
        src={product.image}
        width="200"
        height="150"
        alt="red dapper shoe"
        priority
      />
      <div className={classes.prod_details}>
        <h1>{product.description}</h1>
        <span className={classes.price}>R{product.price}</span>
      </div>
      <div className={classes.cartbutton}>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
