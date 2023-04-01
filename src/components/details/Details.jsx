import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function Details() {
    let [details, setDetails] = useState({})
    let parameter = useParams();
    let getDetails = async () => {
        let { data } = await axios.get(`https://fakestoreapi.com/products/${parameter.id}`)
        setDetails(data);
    }
    useEffect(() => {
        getDetails();
    }, [])
    return (
        <div className='py-4 border border-1 mt-4 container'>
            <h3>{details.title}</h3>  <br />
            <p>{details.category}</p>  <br />
            <p className='text-danger'>price is: &nbsp; {details.price}$</p>  <br />
            <p>{details.description}</p>  <br />
            <img src={details.image} alt={details.title} width="300" className="true" />
        </div>
    )
}

export default Details