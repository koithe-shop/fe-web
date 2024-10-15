import type { FC } from "react";
import styles from "./Product.module.scss";

interface ProductProps {
  children: React.ReactNode;
}

const Product: FC<ProductProps> = () => {
  return (
    <div className={styles.productPage}>
      <h1>Product 12</h1>
    </div>
  );
};

export default Product;
