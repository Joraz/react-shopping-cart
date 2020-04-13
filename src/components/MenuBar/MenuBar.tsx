import { AppBar, IconButton, Typography, Badge } from "@material-ui/core";
import CartIcon from "@material-ui/icons/ShoppingCart";
import React from "react";
import { useSelector } from "react-redux";
import { selectTotalNumberOfItems } from "../../store/cart/selectors";
import { useHistory } from "react-router-dom";

const MenuBar: React.FC = () => {
  const totalItems = useSelector(selectTotalNumberOfItems);
  const history = useHistory();

  return (
    <AppBar position="static" style={{ padding: "15px", flexDirection: "row" }}>
      <Typography
        variant="h4"
        style={{ flexGrow: 1 }}
        onClick={() => {
          history.push("/");
        }}
      >
        Welcome to your e-grocer
      </Typography>
      <IconButton
        color="inherit"
        onClick={() => {
          history.push("/cart");
        }}
        data-cy="cart-clickable"
      >
        <Badge
          badgeContent={totalItems}
          color="secondary"
          data-cy="cart-no-of-items"
        >
          <CartIcon />
        </Badge>
      </IconButton>
    </AppBar>
  );
};

export default MenuBar;
