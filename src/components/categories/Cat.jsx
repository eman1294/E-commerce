import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Cat() {
    let [cats, setCat] = useState([]);
    let get_cat = async () => {
        let { data } = await axios.get("https://fakestoreapi.com/products/categories")
        setCat(data);
    }

    useEffect(() => {
        get_cat();
    }, [])
    return (
        <div className='container'>
            <h2 className='py-5'>All Categories</h2>
            <div className='d-flex justify-content-between pb-5'>

                    {cats.map((cat, index) =>
                        <div key={index} className='cat w-100'>
                            <Link to={`/category/${cat}`} className='text-decoration-none text-dark bg-warning p-3 rounded text-capitalize'>{cat}</Link>
                        </div>
                    )}

            </div>
            <div className="shipping py-4">
                <img src="image/free.jpg" alt="free shipping"/>
            </div>
        </div>
    )
}

export default Cat