import type { FC } from "react";
import styles from "./HomePage.module.scss";

interface HomeProps {
  children: React.ReactNode;
}

const Home: FC<HomeProps> = () => {
  return (
    <>
      <h1 className={styles.homePage}>Home</h1>
    </>
  );
};

export default Home;
