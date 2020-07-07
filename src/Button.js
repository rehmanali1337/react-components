import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const styles = makeStyles({
    btn: {
        // marginTop: 20,
        // paddingTop: 10,
        "&:hover": {
            backgroundColor: 'green',
        }
    }
});


function MyButton({ onClick, text, color, variant }) {
    const classes = styles();
    if (!text) {
        text = 'Button'
    }
    if (!color) {
        color = 'inherit'
    }
    if (!variant) {
        variant = 'text'
    }
    return (
        <Button
            className={classes.btn}
            variant={variant}
            size='large'
            color={color}
            onClick={() => {
                if (onClick) {
                    onClick()
                }
            }}>
            {text}
        </Button>
    )
}

export default MyButton;