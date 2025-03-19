import { Link, Outlet } from "react-router-dom";
import { useCart } from "./CartContext";
import Header from "./Header";
import Footer from "./Footer";
import "./Dashboard.css";
import "./CartIcon.css";

const Dashboard = () => {
  const { cart } = useCart();

  return (
    <div className="dashboard-container">
      <Header />

      {/* Cart Icon */}
      <Link to="/cart" className="cart-icon">
        🛒<span className="cart-count">{cart.length}</span>
      </Link>

      <nav className="dashboard-nav">
        <Link to="">Laptops</Link>
        <Link to="mobiles">Mobiles</Link>
        <Link to="watches">Watches</Link>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;






// import { Link, Outlet } from "react-router-dom";
// import { useCart } from "./CartContext";
// import Header from "./Header";
// import Footer from "./Footer";
// import "./Dashboard.css";
// import "./CartIcon.css";

// const Dashboard = () => {
//   const { cart } = useCart();

//   return (
//     <div className="dashboard-container">
//       <Header />

//       <nav className="dashboard-nav">
//         <Link to="">Laptops</Link>
//         <Link to="mobiles">Mobiles</Link>
//         <Link to="watches">Watches</Link>
//       </nav>

//       <Link to="/cart" className="cart-icon">
//         🛒<span className="cart-count">{cart.length}</span>
//       </Link>

//       <div className="dashboard-content">
//         <Outlet />
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;
