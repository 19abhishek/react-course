import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  navigate("/welcome", { replace: true });
  return (
    <section>
      <h1>Here is the product list.</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">A carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">An online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
