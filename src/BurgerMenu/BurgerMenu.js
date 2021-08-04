import React from 'react';
import style from './BurgerMenu.module.scss'
import {AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#3b323c',
    },
    menuButton: {
        marginRight: theme.spacing(3),

    },
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        position: "sticky",
        zIndex: 15,
    }
}));


export function BurgerMenu(props) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div >

        <Box display={{xs: 'block', sm: 'none'}}
             position="sticky"
        >
            <AppBar
                    className={classes.root}
            >
                <Toolbar variant="dense"
                         className={classes.menu}

                >
                    <Typography variant="h6" color="inherit">
                        Menu
                    </Typography>


                    <IconButton edge="start" className={classes.menuButton}
                                color="inherit"
                                aria-label="menu">
                        <MenuIcon
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            variant="contained"
                            onClick={handleClick}
                        />
                    </IconButton>

                </Toolbar>
            </AppBar>



        </Box>
            <div className={style.styledMenuItem }>
                <Menu

                    minWidth={'100%'}
                    PaperProps={{
                        style: {
                            width: '100%',
                            paddingLeft: '30px',
                            marginTop: '60px',
                            // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

                        },
                    }}
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>

    </div>
    );
}

