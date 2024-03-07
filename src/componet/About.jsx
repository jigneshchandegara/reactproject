import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const About = () => {

    let id = useRef()
    let name = useRef() 
    let quantity = useRef()
    let price = useRef()
    let expiry = useRef()

    
    let [data ,setdata] = useState([])
    const submitdata = (e) => {
        // e.preventDefault()

        const newdata = {
            id: id.current.value,
            name:  name.current.value,
            quantity:  quantity.current.value,
            price:  price.current.value,
            expiry:  expiry.current.value
           
        }
        
        id.current.value = " ";
        name.current.value = "";
        quantity.current.value= ""; 
        price.current.value= ""; 
        expiry.current.value= "";

        
        console.log(data);
        
        setdata([...data,newdata])
    }

   

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

            
            <label>ID:- <input type="number" placeholder='ID' ref={id}/></label><br/>
            <label>name :-<input type="text" placeholder='name' ref={name}/></label><br/>
            <label>quantity:- <input type="number" placeholder='quantity' ref={quantity}/></label><br/>
            <label>price:- <input type="number" placeholder='price' ref={price}/></label><br/>
            <label>expiry:- <input type="number" placeholder='expiry' ref={expiry}/></label><br/>
            <input type="submit" onClick={submitdata}/>


            {
                data?.map((val, ind) => {

                    return (
                        <>
                            <h1>{val.id}</h1>
                            <p>{val.name}</p>
                            <p>{val.quantity}</p>
                            <p>{val.price}</p>
                            <p>{val.expiry}</p>
                        </>
                    )

                })
            }
        </>
    )
}

export default About