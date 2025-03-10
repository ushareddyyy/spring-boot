import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ProductDetails.css";


const ProductDetails = () => {
    const { type, id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:7070/${type}`)
            .then(res => {
                const item = res.data.find(prod => prod.id === parseInt(id));
                setProduct(item);
            });
    }, [type, id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details">
            <img src={product.pimage} alt={product.pname} />
            <h2><i className="fa fa-rupee"></i> {product.pcost}</h2>
            <div className="quantity-controls">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span> {quantity} </span>
                <button onClick={() => setQuantity(Math.min(product.pqty, quantity + 1))}>+</button>
            </div>
        </div>
    );
    
};
export default ProductDetails;