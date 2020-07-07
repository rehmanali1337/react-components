import React from 'react';
import {
    AppBar, IconButton,
    Typography, Toolbar,
    Button,
    makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MyButton from './Button'

const styles = makeStyles({
    center: {
        position: 'absolute', left: '50%', top: '50%',
    }
})

export default function TopBar() {
    const classes = styles()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.position}>
                    </Typography>
                    <MyButton text='Home' />
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

// export default TopBar;