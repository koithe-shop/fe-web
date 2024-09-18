import React from "react";
import ExampleComponent from "../../components/ExampleComponent";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="homeTitle">Home Page</h1>
      <p>Welcome to the home page!</p>
      <ExampleComponent />
    </div>
  );
};

export default HomePage;
