import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
const CardContainer = () => {
    const {data} = useLoaderData();
  return (
    <div className="container">
      <div className="row">
        {
           data.map(value=><Card key={value.id} name={value.name} logo={value.logo} total={value.total}/>) 
        }

      </div>
    </div>
  );
};

export default CardContainer;
