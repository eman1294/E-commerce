import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './products.module.css'
import { Link } from 'react-router-dom';

function Products() {
    let [products, setProducts] = useState([]);
    let [search, setSearch] = useState('');
    let getProducts = async () => {
        let { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className='container'>
            <h2 className='py-4'>All Products</h2>
            <label htmlFor="find"><span className='text-warning'><i className="fa-solid fa-magnifying-glass"></i></span> Search for Products:</label> &nbsp;
            <input className='mb-5' type="search" name='product_name' id='find' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            <div className='d-flex flex-wrap justify-content-between'>
                {products.filter((product) => {
                    if (search === '') { return product; }
                    else if (product.title.toLowerCase().includes(search.toLowerCase())) { return product; }
                }).map((product) =>
                    <div key={product.id} className={` card mb-4 `} style={{ width: '18rem' }}>
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

export default Products


