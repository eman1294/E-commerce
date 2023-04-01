import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CatProduct() {
    let [CatProduct, setCatProduct] = useState([{}]);
    let parameter = useParams();
    let getCatProduct = async () => {
    let {data} = await axios.get(`https://fakestoreapi.com/products/category/${parameter.catName}`)
    setCatProduct(data);
    }
    useEffect(()=>{
        getCatProduct();
    },[]);
    return (
        <div className='container'>
            <h2 className='py-4 text-capitalize'>{parameter.catName}</h2>
            <div className='d-flex flex-wrap justify-content-between'>
                {CatProduct.map((product,index) =>
                    <div key={index} className={` card mb-4`} style={{ width: '18rem' }}>
                        <img src={product.image} className="card-img-top p-4" alt={product.title} />
                        <div className="card-body">
                            <p className="card-text text-dark">{product.title}</p>
                            <p className='text-danger'>{product.price}$</p>
                            <Link to={`/product/${product.id}`} className="bg-danger btn text-white">Details</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CatProduct