import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
const Card = ({ name, logo, total,id }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 col-sm-12 py-2 d-flex justify-content-center">
      <div className="card shadow p-2 mb-5 bg-white rounded border-0" style={{ width: "18rem" }}>
        <img
          className="card-img-top border-bottom rounded"
          src={logo}
          alt="Card image cap"
          style={{ backgroundColor: "#E0F0FB" }}
        />
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <p className="card-text">
              <span style={{fontWeight:'bold'}}>{name}</span> <br />
              <span style={{fontSize:'12px'}}>Questions: {total}</span>
            </p>
          </div>
          <div>
            <Button size="sm">
                <Link to={"/"+id} className="text-white text-decoration-none">Start practice</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
