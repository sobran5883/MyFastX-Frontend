import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div className="products">
      <div className="productSideNav">
        <Link to="/profile/myprofile">Myprofile</Link>
        <Link to="/profile/order">Order</Link>
        <Link to="/profile/wallet">Wallet</Link>
      </div>

      <Outlet />
    </div>
  );
}

export default Products;
