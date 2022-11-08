import React, { useEffect, useState } from 'react';

const About = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {
                products.map(service => <li>{service.name}</li>)
            }
        </div>
    );
};

export default About;