import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDiscount } from "../../store/cart/cart";

const VALID_DISCOUNT_CODES = ["FRUITY10", "FRUITY30"];

const DiscountField: React.FC = () => {
  const dispatch = useDispatch();
  const [discountCode, setDiscountCode] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleApplyDiscountCode = () => {
    if (!VALID_DISCOUNT_CODES.includes(discountCode)) {
      setHasError(true);
    } else {
      setHasError(false);
      dispatch(addDiscount(discountCode));
      setDiscountCode("");
    }
  };

  return (
    <TextField
      label="Have a discount code?"
      value={discountCode}
      error={hasError}
      helperText={hasError && "That code is not valid"}
      onChange={({ target: { value } }) => {
        setDiscountCode(value);
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleApplyDiscountCode}
              data-cy="apply-discount-clickable"
            >
              <CheckIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      data-cy="discount-code-field"
    />
  );
};

export default DiscountField;
