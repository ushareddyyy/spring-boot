import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { useEffect, useState } from 'react';
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "./CartIcon.css";
import "./ProductDetails.css";

const ProductDetails = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const { addToCart, cart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get(`http://localhost:9000/${type}s`)
            .then(res => {
                const item = res.data.find(prod => prod.id === parseInt(id));
                if (item) {
                    setProduct({ ...item, type });
                } else {
                    console.error("Product not found");
                }
            })
            .catch(err => console.error(err));
    }, [type, id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-details-page">
            <Header />

            <div className="product-details-container">
                

                <button className="back-button" onClick={() => navigate(-1)}>Back</button>

                <div className="product-details">
                    <img src={product.pimage} alt={product.pname} />
                    <h2>{product.pname}</h2>
                    <div className="quantity-controls">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(Math.min(product.pqty, quantity + 1))}>+</button>
                    </div>
                    <button onClick={() => addToCart(product, quantity)}>
                        Add to Cart
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetails;
