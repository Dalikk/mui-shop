import { Button, Card, CardActions, CardContent, CardMedia, Grid, Snackbar, Typography } from "@material-ui/core";
import { useState } from "react";
import Snack from "./Snack";


const GoodsItem = (props) => {
    const { name, price, poster, setOrder } = props;
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleBuyClick = () => {
        setOrder({
            id: props.id,
            name: props.name,
            price: props.price,
        })
        setIsSnackbarOpen(true)
    }

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx ={{
                    height: '100%'
                }}
            >
                <CardMedia 
                    component="img"
                    alt={name}
                    image={poster}
                    height="140"
                />
                <CardContent>
                    <Typography 
                        variant="h6" 
                        gutterBottom 
                        component="h3"
                    >
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        Цена: {price} руб
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size="small"
                        onClick={handleBuyClick}
                    >
                        Купить
                    </Button>
                </CardActions>
            </Card>
            <Snack open={isSnackbarOpen} setOpen={setIsSnackbarOpen}/>
        </Grid>
        
    );
};

export default GoodsItem;