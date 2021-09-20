import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    appbar: {
      background: 'none',
  
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    container: {
        textAlign: 'center',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    titleIcon: {
        color: '#ffa500',
        fontSize: '4rem',
    },
    link: {
        color: '#ffa500',
        paddingRigth: '2.5em',
        display: 'flex',
    },
    appbarTitle: {
        flexGrow: '1',
        fontSize: '2em',
    },
    colorTitle: {
        color: '#ffa500',
    },
    colorText: {
        color: '#fff',
        fontSize: '4em'
    }
  }));


export default function Header () {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    
    useEffect (() =>{
        setChecked(true)
    }, [])
    
    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0} id="appbar">
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>My<span className={classes.colorTitle}>Recipes.</span>
                    </h1>
                    <IconButton>
                        <Nav>
                            <LinkContainer to="/">
                                <Nav.Link className="link">
                                    <HomeIcon className={classes.icon} />
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/ajoutsrecettes">
                                <Nav.Link className={classes.link}>
                                    <FastfoodIcon className={classes.icon} />
                                    Create your recipes
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </IconButton>
                </Toolbar>
            </AppBar>

                <Collapse 
                    in={checked} 
                    {... (checked ? { timeout: 1000 } : {})}
                    collapsedHeight={50}
                >
                <div className={classes.container}>
                    <h1 className={classes.colorText}>Enjoy your <span className={classes.colorTitle}>meals !</span></h1>
                <Scroll to="enjoy-your-meals" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.titleIcon}/>
                    </IconButton>
                </Scroll>  
                </div>
                </Collapse>
            
        </div>
    )
}