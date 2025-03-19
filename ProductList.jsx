import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./ProductList.css";

const ProductList = ({ endpoint }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9000/${endpoint}`)
      .then((res) => res.json())
      .then((data) =>
        setProducts(data.map((p) => ({ ...p, type: endpoint.slice(0, -1) })))
      );
  }, [endpoint]);

  
  return (
    <div className="product-page">
     

      

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={`${product.type}-${product.id}`}
            className="product-card"
            onClick={() => navigate(`/product/${product.type}/${product.id}`)}
          >
            <img src={product.pimage} alt={product.pname} />
            <h2>{product.pname}</h2>
            <h3>₹{product.pcost}</h3>
          </div>
        ))}

      </div>

     
    </div>
  );
};

export const Laptops = () => <ProductList endpoint="laptops" />;
export const Mobiles = () => <ProductList endpoint="mobiles" />;
export const Watches = () => <ProductList endpoint="watches" />;
export default Laptops;





// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Laptops.css";

// const ProductList = ({ endpoint }) => {
//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`http://localhost:9000/${endpoint}`)
//       .then(res => res.json())
//       .then(data => setProducts(data.map(p => ({ ...p, type: endpoint.slice(0, -1) }))));
//       // "laptops" -> "laptop"
//   }, [endpoint]);

//   return (
//     <div className="parent">
//       {products.map((product) => (
        
//         <div
//   key={`${product.type}-${product.id}`}
//   className="child"
//   onClick={() => navigate(`/product/${product.type}/${product.id}`)}
// >
//   <img src={product.pimage} alt={product.pname} />
//   <h2>{product.pname}</h2>
//   <h3><i className='fa fa-rupee'></i> {product.pcost}</h3>
// </div>


//       ))}
//     </div>
//   );
// };

// export const Laptops = () => <ProductList endpoint="laptops" />;
// export const Mobiles = () => <ProductList endpoint="mobiles" />;
// export const Watches = () => <ProductList endpoint="watches" />;
// export default Laptops;


