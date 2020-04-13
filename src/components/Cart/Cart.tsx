import {
  Fab,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import MinusIcon from "@material-ui/icons/Remove";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem, clearCart, removeItem } from "../../store/cart/cart";
import {
  selectCartItems,
  selectDiscounts,
  selectTotalPrice,
} from "../../store/cart/selectors";
import { formatCurrency } from "../../util/formatCurrency";
import { getDiscountAmountFromCode } from "../../util/getDiscountAmountFromCode";
import { DiscountField } from "../DiscountField";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectTotalPrice);
  const discounts = useSelector(selectDiscounts);

  return (
    <div style={{ padding: "20px" }}>
      {cartItems.length ? (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Item name
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>Quantity</TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Price per unit
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Total price
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <>
                  {cartItems.map((item) => (
                    <TableRow data-cy={`item-row`}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>
                        {item.quantity}{" "}
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => {
                            dispatch(removeItem(item));
                          }}
                          data-cy="decrease-quantity-clickable"
                        >
                          <MinusIcon />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => {
                            dispatch(addItem(item));
                          }}
                          data-cy="increase-quantity-clickable"
                        >
                          <AddIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>{formatCurrency(item.price)}</TableCell>
                      <TableCell>
                        {formatCurrency(item.price * item.quantity)}
                      </TableCell>
                    </TableRow>
                  ))}
                  {discounts.map((discount) => (
                    <TableRow data-cy={`discount-code-row`}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell align="right">
                        Discount Code: {discount}
                      </TableCell>
                      <TableCell>
                        -{formatCurrency(getDiscountAmountFromCode(discount))}
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              </TableBody>
              <TableFooter>
                <TableRow data-cy="total-row">
                  <TableCell />
                  <TableCell />
                  <TableCell align="right">Total</TableCell>
                  <TableCell>{formatCurrency(total)}</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <div style={{ marginTop: "20px" }}>
            <DiscountField />
          </div>
          <Fab
            style={{ position: "absolute", right: 20, bottom: 20 }}
            onClick={() => {
              dispatch(clearCart());
            }}
            data-cy="clear-cart-clickable"
          >
            <DeleteIcon color="secondary" />
          </Fab>
        </>
      ) : (
        <p data-cy="no-items-message">
          You have no items in your cart. <Link to="/">Why not add some?</Link>
        </p>
      )}
    </div>
  );
};

export default Cart;
