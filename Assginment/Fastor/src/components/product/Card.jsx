import React from "react";

const Card = (props) => {
  return (
    <>
      {props.proData.map((product) => (
        <div class="col mb-4">
          <div className="card">
            <img
              src={product.pimage}
              style={{ width: "100%", height: "100%" }}
              className="card-img-top"
              alt="doc-img"
            />
            <div className="card-body">
              <h5 className="card-title">{product.pname}</h5>
              <p className="card-text">Price Rs.{product.price}</p>
              <p className="card-text">
                <button className="btn btn-sm btn-info">Buy Now</button>&nbsp;
                <small className="text-muted">Vendor :{product.vname}</small>
                &nbsp;
                <small className="text-muted">
                  product-ID :{product.proId}
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
