import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

import { uiAction } from "../store/ui-slice";

const CartButton = (props) => {
  const showCart = useSelector((state) => state.ui.showCart);

  const dispatch = useDispatch();

  const toggleUI = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleUI}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
