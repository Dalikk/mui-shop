import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'

const Header = (props) => {
    const {
        handleCart,
        orderLen
    } = props
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography 
            variant='h6'
            component='span'
            sx={{flexGrow: 1}}
        >
            MUI Shop
        </Typography>
        <IconButton
            color='inherit'
            onClick={handleCart}
        >
            <Badge 
                badgeContent={orderLen} 
                color='secondary'
            >
                <ShoppingBasket/>
            </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
