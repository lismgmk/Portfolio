import React from 'react';
import style from './BurgerMenu.module.scss'
import {AppBar, Box, IconButton, Link, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import {Component} from "react";
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        // position: 'sticky',
        backgroundColor: '#3b323c',

    },
    menuButton: {
        marginRight: theme.spacing(3),

    },
    menu: {

        display: 'flex',
        justifyContent: 'space-between',
    },
    styledMenuItem: {
        width: '100%',
        display: 'inline-block',
        borderBottom: '1px solid',
        textAlign: 'center',
        color: '#3b323c',
        textDecoration: 'none',
        cursor: 'pointer',
        fontFamily: '\'Open Sans\', sans-serif',
        fontSize: '25px',
        textTransform: 'upperCase',
        padding: '5px',
        fontWeight: '400',
    }
}));


export function BurgerMenu() {

    const nameId = [
        'main', 'progects', 'skils', 'contacts'
    ]

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    };

    return (
        <div className={style.styledMenuItem}>
            <AppBar
                className={classes.root}
            >

                <Toolbar variant="dense"
                         className={classes.menu}
                         position='sticky'
                >
                    <Typography
                        variant="h6" color="inherit">
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

                <Menu
                    className={classes.menu}
                    PaperProps={{
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            paddingLeft: '30px',
                            marginTop: '30px',
                        },
                    }}
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {nameId.map(i => {
                        return (
                            <Link
                                className={classes.styledMenuItem}
                                href={`#${i}`}
                                width={1}
                                onClick={handleClose}
                            >
                                {i}
                            </Link>
                        )
                    })}
                </Menu>
            </AppBar>
        </div>
    )
}

