import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
const CardContainer = () => {
    const {data} = useLoaderData();
  return (
    <div className="container" style={{marginTop:'150px'}}>
      <h1 className="text-center my-5" >Take a test</h1>
      <div className="row">
        {
           data.map(value=><Card key={value.id} name={value.name} logo={value.logo} total={value.total} id={value.id}/>) 
        }
      </div>
    </div>
  );
};

export default CardContainer;
