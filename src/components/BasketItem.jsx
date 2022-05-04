import { Button, IconButton, ListItem, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const BasketItem = (props) => {
    const {removeFromOrder, id, name, price, quantity} = props
    return (
        <ListItem>
            <Typography 
                variant="body1"
                sx={{flexGrow: '1'}}
            >
                {name} {price}руб x{quantity}
            </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={() => removeFromOrder(id)}
            >
                <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;