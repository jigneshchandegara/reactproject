import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { productdata } from "./Productdata";
const Product = () => {
  const [detail, setdetail] = useState(productdata);

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Medicine</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto ">
              <li class="nav-item">
                <Link to={'/Product'} class="nav-link">product</Link>
              </li>
              <li class="nav-item">
                <Link to={'/About'} class="nav-link">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className="d-flex flex-wrap justify-content-between">
        {
          detail.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <div class="card " style={{ width: "18rem" }}>
                  <img src={value.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <p class="card-text">id:- {value.id}</p>
                    <h5 class="card-title">name:- {value.name}</h5>
                    <p class="card-text">quantity:- {value.quantity}</p>
                    <p class="card-text">price:- {value.price}</p>
                    <p class="card-text">expiry:- {value.expiry}</p>
                    <button href="#" class="btn btn-primary">view</button>
                  </div>
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
    </>


  )

}

export default Product