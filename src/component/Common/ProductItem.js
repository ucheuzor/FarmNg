import React from 'react';

const ProductItem = (props) => (
   <div className="col-lg-3 col-md-6 d-flex align-items-stretch pt-3" >
      <div className="productItem">
      <div className="product-img">
      <img src={props.image} className=" img-fluid" alt="..." />
      </div>
         <div className="card-body">
            <h5 className="card-title products-col">{props.title}</h5>
            <p className="card-text font-weight-bold">{props.price}</p>
            <a href="#" className="btn btn-success px-4 btn-product">{props.buttonText}</a>
         </div>
      </div>
   </div>
);

export default ProductItem;
