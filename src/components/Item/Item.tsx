import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Fab,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, CartItem } from "../../store/cart/cart";
import { formatCurrency } from "../../util/formatCurrency";

type ItemProps = {
  item: CartItem;
};

const useStyles = makeStyles({
  itemImage: {
    height: "300px",
  },
  actions: {
    flexDirection: "row-reverse",
  },
});

const Item: React.FC<ItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={item.name}
        subheader={item.description}
        action={formatCurrency(item.price)}
      />
      <CardMedia
        image={item.image}
        title={item.name}
        classes={{ root: classes.itemImage }}
      />
      <CardActions classes={{ root: classes.actions }}>
        <Fab
          color="primary"
          onClick={() => {
            dispatch(addItem(item));
          }}
          data-cy={`add-${item.name}`}
        >
          <AddIcon />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default Item;
