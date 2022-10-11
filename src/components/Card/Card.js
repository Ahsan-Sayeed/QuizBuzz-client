import React from "react";
import Button from "react-bootstrap/Button";

const Card = ({name,logo,total}) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 col-sm-12 py-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top border-bottom rounded"
          src={logo}
          alt="Card image cap"
          style={{backgroundColor:'#E0F0FB'}}
        />
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="card-text">
              <span>{name}</span> <br />
              <span>Total: {total}</span>
            </p>
          </div>
          <div>
            <Button size="sm">Start Practice</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
