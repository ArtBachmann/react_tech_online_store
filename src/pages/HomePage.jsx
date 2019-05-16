import React from "react";
import { ProductConsumer } from "../context";

const HomePage = () => {
  return (
    <>
      <ProductConsumer>
        {value => {
          console.log(value);
          return <h3>Hello from homepage</h3>;
        }}
      </ProductConsumer>
    </>
  );
};

export default HomePage;
